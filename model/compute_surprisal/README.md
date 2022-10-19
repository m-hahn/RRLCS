# Optimize Retention Probabilities and Compute Model Surprisal

## Record Model Surprisal

In all cases, the script ending in `_RUNALL.py` iteratevely runs the other script until the desired numbers of runs have been obtained.

Refer to section ''Run on your own dataset'' to run the model on other datasets.

Models come with two parameters: `predictability_weight` and `deletion_rate`.
`predictaility_weight` is always 1.0 in the relevant models, except for SI Appendix Figure 27, which corresponds to 0.0.
The repository includes code and data for a more general model interpolating between the two models.
`deletion_rate` is the fraction of context words forgotten on average; 0 corresponds to delta=20 (i.e., full GPT-2, operationalizing Surprisal Theory); 1 corresponds to delta=0 (i.e., unigram surprisal).

### Full Model

* [Run on items for Study S5](resource_rational_surprisal_E1Stims_3_W_GPT2M_TPLE0.py)
* [Run on items for Experiment 1](resource_rational_surprisal_E1Stims_3_W_GPT2M_TPLE1.py)
* [Run on items for Experiment 2](resource_rational_surprisal_VN3Stims_3_W_GPT2M_TPL.py)


### Simplified Implementation

The simplified implementation fixes the prediction inference network after pretraining, only continuing training the reconstruction inference network. This approach substantially reduces computation time. We found no evidence for a difference in model predictions compared to the implementation where the prediction inference network continues training.


* [Run on items for Study S5](resource_rational_surprisal_E1Stims_3_W_GPT2M_LE0_OOV.py)
* [Run on items for Experiment 1](resource_rational_surprisal_E1Stims_3_W_GPT2M_LE1_OOV.py)
* [Run on items for Experiment 2](resource_rational_surprisal_VN3Stims_3_W_GPT2M_L.py)


### Fillers

* [Run full implementation](resource_rational_surprisal_VN3Stims_3_W_GPT2M_TPLf.py)
* [Run simplified implementation](resource_rational_surprisal_VN3Stims_3_W_GPT2M_Lf.py)

### Run on your own dataset
We provide scripts for running  [model](runModel_Full.py) on your own dataset (also for the [simplified](runModel_Simplified.py) variant). Please do feel free to get in touch to discuss your use case before running -- we'll be happy to provide advice.

The workflow is as follows:

* Install [Pytorch](https://pytorch.org/) and [Huggingface transformers](https://huggingface.co/docs/transformers/index). We developed the code under older versions, but have recently tested the model using Pytorch 1.12.1 and transformers 4.23.0. The code will assume that a GPU is available.
* Download appropriate models [from Zenodo](https://zenodo.org/record/6602698). Models are provided in zip files by deletion rates; the parameter `delta` as described in the paper should be converted into the deletion rate 1-delta/20. Data for the relevant models is collected in the TSV files in [this directory](logsByScript).
* Within the script, replace `calibrationSentences` with the sentences of interest. Currently, this list consists of the fillers.
* In the same script, replace `<<OUTPUT_PATH>>` with the correct path for storing the output.
* Create symlinks at `CODEBOOKS_MEMORY` to the path where you stored the models; and at `CODEBOOKS` to the path where you stored the inference networks.
* Run the corresponding  `RUNALL` script to get predictions across model runs.


If you want to get predictions for specific regions (very typical for psycholinguistic research), you can instead use corresponding [script](runModel_Full_ForRegion.py) (also for the [simplified](runModel_Simplified_ForRegion.py) variant). This way, you can substantially reduce computation cost when there are many stimuli or conditions but only one or a few regions are of relevance.
For this, you'll need to store your stimuli in a suitable TSV file. An example is provided [here](runModel_Simplified_ForRegion.py#L636).

You can also create additional model runs, or train adaptations for the model, building off the scripts listed under `Optimize Model Parameters`. Please feel free to contact us for advice if you're considering this.



## Record and analyze retention probabilities

* [Recording retention probabilities for simplified implementation](resource_rational_surprisal_VN3Stims_3_W_GPT2M_p.py)
* [Recording retention probabilities for full implementation](resource_rational_surprisal_VN3Stims_3_W_GPT2M_TPp.py)
* [Collecting](collectRetentionRates_p.py) and [visualizing](collectRetentionRates_p_analyze.R)

## Optimize Model Parameters

* [Simplified implementation](resource_rational_surprisal_VN3Stims_3_W_GPT2M_S.py)
* [Full implementation](resource_rational_surprisal_VN3Stims_3_W_GPT2M_TPS.py)

## Raw GPT-2

* [Run raw GPT-2](resource_rational_surprisal_VN3Stims_3_W_GPT2M_ZERO.py)

## Collect Model Surprisal

* [Study S5](collect12_NormJudg_Short_Cond_W_GPT2_ByTrial_E0.py)
* [Experiment 1](collect12_NormJudg_Short_Cond_W_GPT2_ByTrial_E1.py)
* [Experiment 2](collect12_NormJudg_Short_Cond_W_GPT2_ByTrial_VN3.py)
* [Fillers](collect12_NormJudg_Short_Cond_W_GPT2_ByTrial_VN3_Fillers.py)
* [Analyzing output further](analyze_output)

## Helpers

* [Access Wikipedia corpus](corpusIteratorWikiWords.py)
* [Access GPT-2 Medium (used in reported results)](scoreWithGPT2Medium.py)
* [Access GPT-2 Xtra Large](scoreWithGPT2XtraLarge.py)

