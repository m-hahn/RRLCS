from paths import WIKIPEDIA_HOME
from io import StringIO
import random
import gzip 
import csv
import pandas as pd

def load(language, partition="train", removeMarkup=True):
  if language == "english":
     #path = WIKIPEDIA_HOME+"/english-"+partition+"-tagged.txt"
    path = "/Users/teodorakamova/Documents/Uni Saarland/Work/RRLCS/resource-rational-surprisal/model/data/english-train-tagged.txt"
  elif language == "german":
    path = WIKIPEDIA_HOME+"/german-"+partition+"-tagged.txt.gz"
  chunk = []
  with open(path, "r") if language == "english" else gzip.open(path, "rb") as inFile:
    for line in inFile:
      if language == "german":
        line = line.decode()
      index = line.find("\t")
      print(index,line)
      if index == -1:
        if removeMarkup:
          print(f"Skipping line {line} (no tab)")  # Debug
          continue
        else:
          index = len(line)-1
      word = line[:index]
      chunk.append(word.lower())
      if len(chunk) > 1000000:
         print(f"Yielding chunk at line {line}, size={len(chunk)}")  # Debug
      #   random.shuffle(chunk)
         yield chunk
         chunk = []
  yield chunk

def load_100_stimuli(path, chunk_size=100):
    chunk = []
    #df = pd.read_csv(path, sep=",", skipinitialspace=True,index_col=False)
    df = pd.read_excel("/Users/teodorakamova/Documents/Uni Saarland/Work/RRLCS/resource-rational-surprisal/model/data/exp_100items.xlsx", sheet_name=0)
    df.to_csv("clean.csv", index=False, encoding="utf-8", quoting=csv.QUOTE_MINIMAL)

    #print(df.columns)
    #print(df.head())
    col = df.columns[0]
    #print(col)
    #print(df[col].astype(str))
    df_fixed = pd.read_csv(StringIO("\n".join(df[col].astype(str))), quotechar='"', engine="python")
    df_fixed = df_fixed.drop('1', axis=1)
    df_fixed.rename(columns={"1.1": "SentenceID", "exp.b.1": "Label", "was":"critical_word","The insinuation that the teacher failed the student was only a malicious smear.":"Sentence"}, inplace=True)
    #print(df_fixed.columns)
    #print(df_fixed.head())
    df = df_fixed

    # Convert SentenceID to numeric
    df_fixed["SentenceID"] = pd.to_numeric(df_fixed["SentenceID"], errors="coerce")

    #Split into train/test sets 
    test_df = df_fixed[df_fixed["SentenceID"] <= 176].copy()
    train_df = df_fixed[df_fixed["SentenceID"] >= 177].copy()

    print(f"Train set: {len(train_df)} sentences")
    print(f"Test set: {len(test_df)} sentences")

    def stream_chunks(df_subset):
        chunk = []
        for _, row in df_subset.iterrows():
            sentence = str(row["Sentence"]).strip().lower()
            words = sentence.split()
            chunk.extend(words)
            if len(chunk) >= chunk_size:
                yield chunk
                chunk = []
        if chunk:
            yield chunk

    return stream_chunks(train_df), stream_chunks(test_df), train_df, test_df
    # Preprocess into lists of words 
    # def sentence_to_words(sentence):
    #     if isinstance(sentence, str):
    #         return [w.lower() for w in sentence.strip().split()]
    #     else:
    #         return []

    # train_sentences = [sentence_to_words(s) for s in train_df["Sentence"]]
    # test_sentences = [sentence_to_words(s) for s in test_df["Sentence"]]

    # train_generator = (s for s in train_sentences if s)
    # test_generator = (s for s in test_sentences if s)

    # return train_generator, test_generator, train_df, test_df
    # for row in range(len(df_fixed)):
    #     #print(df.columns)
    #     #print(df.iloc[row])
    #     sentence = df.iloc[row]["Sentence"]
    #     #print(sentence, row)
    #     # basic preprocessing: lowercase, split words
    #     words = [w.lower() for w in sentence.strip().split()]
    #     chunk.extend(words)
    #     if len(chunk) >= chunk_size:
    #         yield chunk
    #         chunk = []
    # if chunk:
    #     yield chunk

def training(language):
  return load(language, "train")

def finetune(language):
  return load_100_stimuli("/Users/teodorakamova/Documents/Uni Saarland/Work/RRLCS/resource-rational-surprisal/model/data/exp_100items(in)-2.csv")

def dev(language, removeMarkup=True):
  return load(language, "valid", removeMarkup=removeMarkup)

def test(language, removeMarkup=True):
  return load(language, "test", removeMarkup=removeMarkup)


