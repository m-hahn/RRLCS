#!/usr/bin/env python3
"""
Per-word plots:
- one row, columns = deletion_rate
- ONLY mean across runs (no per-run faint lines)
- mean curves for iterations 0/45/90 in different colors + legend

Files (exclude Fast):
  resource_rational_surprisal_VN3Stims_3_W_GPT2M_S_Finetune.py_<RUNID>_Model_<ITER>.tsv

Mapping file:
  ID <tab/space> deletion_rate
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Dict, Iterable, Sequence, Tuple

import numpy as np
import pandas as pd
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D


FNAME_RE = re.compile(
    r"resource_rational_surprisal_VN3Stims_3_W_GPT2M_S_Finetune\.py_(\d+)_Model_(\d+)\.tsv$"
)
ITERATIONS = (0, 45, 90)


def load_rate_map(rate_map_path: Path) -> Dict[int, float]:
    df = pd.read_csv(rate_map_path, sep=r"\s+", engine="python")
    if "ID" not in df.columns or "deletion_rate" not in df.columns:
        raise ValueError(f"Unexpected columns in rate map: {df.columns.tolist()}")
    return {int(r["ID"]): float(r["deletion_rate"]) for _, r in df.iterrows()}


def iter_score_files(score_dir: Path) -> Iterable[Tuple[Path, int, int]]:
    for p in score_dir.glob("resource_rational_surprisal_VN3Stims_3_W_GPT2M_S_Finetune.py_*_Model_*.tsv"):
        if "Fast" in p.name:
            continue
        m = FNAME_RE.search(p.name)
        if not m:
            continue
        run_id = int(m.group(1))
        it = int(m.group(2))
        if it not in ITERATIONS:
            continue
        yield p, run_id, it


def parse_score_file(path: Path) -> Dict[str, np.ndarray]:
    out: Dict[str, np.ndarray] = {}
    with path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split()
            if len(parts) < 3 or parts[0] != "SCORES":
                continue
            word = parts[1]
            vals = np.asarray([float(x) for x in parts[2:]], dtype=float)
            out[word] = vals
    return out


def sanitize_filename(s: str) -> str:
    return re.sub(r"[^A-Za-z0-9._-]+", "_", s)


def build_long_df(score_dir: Path, rate_map: Dict[int, float]) -> pd.DataFrame:
    rows = []
    for path, run_id, it in iter_score_files(score_dir):
        if run_id not in rate_map:
            continue
        deletion_rate = rate_map[run_id]
        word2vals = parse_score_file(path)
        for word, arr in word2vals.items():
            for x, y in enumerate(arr):
                rows.append(
                    dict(
                        word=word,
                        run_id=run_id,
                        iteration=it,
                        deletion_rate=deletion_rate,
                        x=x,
                        y=float(y),
                    )
                )
    if not rows:
        raise RuntimeError("No data loaded. Check paths/patterns and iteration filters.")
    return pd.DataFrame(rows)


def plot_word_one_row_means(
    df_word: pd.DataFrame,
    deletion_rates: Sequence[float],
    out_path: Path,
    *,
    y_lim: Tuple[float, float] = (-0.02, 1.02),
    facet_w: float = 2.2,
    facet_h: float = 2.6,
    mean_lw: float = 2.2,
):
    word = df_word["word"].iloc[0]
    ncols = len(deletion_rates)

    fig, axes = plt.subplots(
        1,
        ncols,
        figsize=(facet_w * ncols, facet_h),
        sharex=True,
        sharey=True,
        squeeze=False,
    )
    axes = axes[0]

    colors = {0: "C0", 45: "C1", 90: "C2"}

    for ci, r in enumerate(deletion_rates):
        ax = axes[ci]
        ax.set_ylim(*y_lim)

        # column title
        ax.set_title(f"{r:g}", fontsize=9)

        for it in ITERATIONS:
            d = df_word[(df_word["iteration"] == it) & (np.isclose(df_word["deletion_rate"], r))]
            if d.empty:
                continue

            # mean across runs per x (robust)
            run_means = (
                d.groupby(["run_id", "x"], as_index=False)["y"].mean()
                 .groupby("x", as_index=False)["y"].mean()
                 .sort_values("x")
            )

            ax.plot(
                run_means["x"].to_numpy(),
                run_means["y"].to_numpy(),
                color=colors[it],
                linewidth=mean_lw,
                alpha=1.0,
                zorder=10,
            )

        ax.tick_params(labelsize=8)

    axes[0].set_ylabel("score", fontsize=10)
    for ax in axes:
        ax.set_xlabel("column", fontsize=10)

    # legend (iterations)
    handles = [
        Line2D([0], [0], color=colors[0], lw=2.5, label="0"),
        Line2D([0], [0], color=colors[45], lw=2.5, label="45"),
        Line2D([0], [0], color=colors[90], lw=2.5, label="90"),
    ]
    fig.legend(
        handles=handles,
        title="iterations",
        loc="upper right",
        frameon=False,
        fontsize=9,
        title_fontsize=9,
    )

    fig.suptitle(word, fontsize=12, y=1.03)
    fig.tight_layout()
    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, bbox_inches="tight")
    plt.close(fig)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--score_dir", type=Path, default=Path("."), help="Directory with the per-run TSV files")
    ap.add_argument("--rate_map", type=Path, required=True, help="TSV mapping with columns: ID deletion_rate")
    ap.add_argument("--outdir", type=Path, default=Path("plots_by_word_means_row"), help="Output directory")
    ap.add_argument("--words", nargs="*", default=None, help="Optional list of words to plot; default: all")
    ap.add_argument("--fmt", choices=["png", "pdf", "svg"], default="pdf", help="Output file format")
    ap.add_argument("--mean_lw", type=float, default=2.2, help="Line width for mean curves")
    args = ap.parse_args()

    rate_map = load_rate_map(args.rate_map)
    df = build_long_df(args.score_dir, rate_map)

    deletion_rates = sorted({float(v) for v in rate_map.values()})

    if args.words:
        df = df[df["word"].isin(set(args.words))].copy()

    words = sorted(df["word"].unique())
    if not words:
        raise RuntimeError("No words left to plot (check --words).")

    for w in words:
        out = args.outdir / f"{sanitize_filename(w)}.{args.fmt}"
        plot_word_one_row_means(
            df[df["word"] == w],
            deletion_rates=deletion_rates,
            out_path=out,
            mean_lw=args.mean_lw,
        )


if __name__ == "__main__":
    main()

