
export CUDA_LAUNCH_BLOCKING=1

export HOME=/scratch/mhahn
export PATH="/scratch/mhahn/SOFTWARE/miniconda3/bin:$PATH"

source ~/.bashrc

conda init
#conda activate con312

#pip install matplotlib

cd /scratch/mhahn/CODE/RRLCS/model/compute_surprisal

python3 resource_rational_surprisal_VN3Stims_3_W_GPT2M_S_Finetune_Fast_RUNALL.py
