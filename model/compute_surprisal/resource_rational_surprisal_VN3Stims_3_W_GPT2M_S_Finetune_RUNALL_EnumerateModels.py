__file__ = __file__.split("/")[-1]

import random
import subprocess
scripts = []

import sys

script = "resource_rational_surprisal_VN3Stims_3_W_GPT2M_S_Finetune.py"

import glob
models = glob.glob("../data/pred_1.0_del*simple/char-lm-ud-stationary_12_SuperLong_WithAutoencoder_WithEx_Samples_Short_Combination_Subseq_VeryLong_WithSurp12_NormJudg_Short_Cond_Shift_NoComma_Bugfix_VN3Stims_3_W_GPT2M_S.py_*.model")
random.shuffle(models)
limit = 1000
count = 0
with open(f"LOGS/{__file__}.tsv", "w") as outFile:
 print("\t".join(["ID", "deletion_rate"]), file=outFile)
 for model in models:
   ID = model[model.rfind("_")+1:model.rfind(".")]
   folder = model.split("/")[-2]
   deletion_rate = folder.split("_")[-2]
   print("\t".join([ID, deletion_rate]), file=outFile)

