import random
import subprocess
scripts = []

import sys
stimulus_file = sys.argv[1]
criticalRegions = sys.argv[2] # separate region names by commas, e.g., "NP1_0,NP1_1,OR,NP2_0,NP2_1"

script = "runModel_Simplified_ForRegion.py"

import glob
models = glob.glob("CODEBOOKS_MEMORY/char-lm-ud-stationary_12_SuperLong_WithAutoencoder_WithEx_Samples_Short_Combination_Subseq_VeryLong_WithSurp12_NormJudg_Short_Cond_Shift_NoComma_Bugfix_VN3Stims_3_W_GPT2M_S.py_*.model")
random.shuffle(models)
limit = 1000
count = 0

with open("logsByScript/char-lm-ud-stationary_12_SuperLong_WithAutoencoder_WithEx_Samples_Short_Combination_Subseq_VeryLong_WithSurp12_NormJudg_Short_Cond_Shift_NoComma_Bugfix_VN3Stims_3_W_GPT2M_S.py.tsv", "r") as inFile:
   model_logs = [[q.strip() for q in x.split("\t")] for x in inFile.read().strip().split("\n")]
   model_logs = {x[0] : x for x in model_logs}

for model in models:
   ID = model[model.rfind("_")+1:model.rfind(".")]
   if len(glob.glob(f"<OUTPUT_PATH>/{script}_{stimulus_file}_{ID}_Model"))>0:
     print("EXISTS", ID)
     continue
   if ID in model_logs:
      model_log = model_logs[ID]
      args = dict([x.split("=") for x in model_log[1] ])
      delta = float(args["deletion_rate"])
      lambda_ = float(args["predictability_weight"])
      if lambda_ != 1:
        print("FOR NOW DON'T CONSIDER")
        continue
   else:
       print("Cannot find this model:", ID)
       count += 1
       continue
   print("DOES NOT EXIST", ID, delta, lambda_)
   command = ["/u/nlp/anaconda/main/anaconda3/envs/py36-mhahn/bin/python", script, "--stimulus_file="+stimulus_file, "--criticalRegions="+criticalRegions, "--load_from_joint="+ID]
   print(command)
   subprocess.call(command)
   count += 1
   if count >= limit:
     break
