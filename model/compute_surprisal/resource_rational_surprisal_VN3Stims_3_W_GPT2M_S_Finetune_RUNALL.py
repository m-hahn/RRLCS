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
for model in models:
   ID = model[model.rfind("_")+1:model.rfind(".")]
   if len(glob.glob(f"LOGS/loss/*{script}*{ID}*"))>0:
     print("EXISTS", ID)
     continue
   print("DOES NOT EXIST", ID)
   command = ["python3", script, "--load-from-joint="+ID]
   print(command)
   subprocess.call(command)
   count += 1
   if count >= limit:
     break
