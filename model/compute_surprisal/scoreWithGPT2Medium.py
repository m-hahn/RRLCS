import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained("gpt2-medium")

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# add the EOS token as PAD token to avoid warnings
model = GPT2LMHeadModel.from_pretrained("gpt2-medium", pad_token_id=tokenizer.eos_token_id, torch_dtype=torch.float32,    attn_implementation="eager",) #, force_download=True, use_safetensors=True)
if DEVICE == "cuda":
  model = model.cuda()
else:
  model = model.to("cpu", dtype=torch.float32)
print("Finished loading GPT2")


bad = []
for n, p in model.named_parameters():
    if not torch.isfinite(p).all():
        bad.append(n)
print("non-finite params:", bad[:20], "count:", len(bad))

#quit()

def scoreSentences(batch):
       print(batch[0])
       tensors = [tokenizer.encode(" "+text, return_tensors='pt') for text in batch] # below using bos, so should be no need for adding "<|endoftext|> "+
       maxLength = max([x.size()[1] for x in tensors])
       for i in range(len(tensors)):
          tensors[i] = torch.cat([torch.LongTensor([tokenizer.bos_token_id]).view(1,1), tensors[i], torch.LongTensor([tokenizer.eos_token_id for _ in range(maxLength - tensors[i].size()[1])]).view(1, -1)], dim=1)
       tensors = torch.cat(tensors, dim=0)

       print("DEVICE var:", DEVICE)
       print("tensors.device:", tensors.device, "tensors.dtype:", tensors.dtype)
       print("model device:", next(model.parameters()).device, "model dtype:", next(model.parameters()).dtype)
       #quit()

       # Accounting for a change in transformers library since this was originally written
       import transformers
       VERSION = transformers.__version__
       if int(VERSION[0]) < 3:
          predictions, _ = model(tensors.to(DEVICE))
       else:
# Transformers v 3:
        with torch.no_grad():
         with torch.autocast(device_type="cuda", enabled=False) if DEVICE=="cuda" else torch.no_grad():
          predictions = model(tensors.to(DEVICE))
          predictions = predictions["logits"]
#       print(tensors)
#       print("PREDICTIONS", predictions.size())      
       print(predictions[0,0])
       print(tensors.max(), tensors.min())
       print(tensors.dtype)
       print(predictions.max(), predictions.min())
       surprisals = torch.nn.CrossEntropyLoss(reduction='none')(predictions[:,:-1].contiguous().view(-1, 50257), tensors[:,1:].contiguous().view(-1).to(DEVICE)).view(len(batch), -1)
       surprisals = surprisals.detach().cpu()
       print(surprisals)
#       quit()
 #      print(surprisals, surprisals.size())
       surprisalsCollected = []
       for batchElem in range(len(batch)):
         words = [[]]
         if batchElem == 0:
           print(tensors[batchElem])
         for q in range(1, maxLength+1):
            word = tokenizer.decode(int(tensors[batchElem][q]))
            if batchElem == 0:
               print(q, int(tensors[batchElem][q]), word, maxLength)
            if word == '<|endoftext|>':
                break
            if word.startswith(" ") or q == 0:
                words.append([])
            words[-1].append((word, float(surprisals[batchElem][q-1])))
         # find where last word starts and separately get the surprisals
         surprisalsPast = sum([sum(x[1] for x in y) for y in words[:-1]])
         surprisalsFirstFutureWord = sum(x[1] for x in words[-1])
         if batchElem == 0:
            print(words)
         surprisalsCollected.append({"past" : surprisalsPast, "next" : surprisalsFirstFutureWord})
       return surprisalsCollected

