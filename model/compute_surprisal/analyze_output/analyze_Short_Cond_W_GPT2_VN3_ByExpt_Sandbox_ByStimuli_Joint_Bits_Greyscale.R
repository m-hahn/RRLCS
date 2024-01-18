library(tidyr)
library(dplyr)

data_E2 = read.csv("prepareMeansByExperiment_ByStimuli.R.tsv", quote='"', sep="\t") %>% mutate(Experiment = "Experiment2")


data_E1 = read.csv("prepareMeansByExperiment_E1_Exp_ByStimuli.R.tsv", quote='"', sep="\t") %>% mutate(Experiment = "Experiment1")


data = rbind(data_E1, data_E2)

counts = unique(read.csv("../../../materials/nouns/corpus_counts/wikipedia/results/counts4NEW_Processed.tsv", sep="\t"))
counts$Ratio = log(counts$CountThat) - log(counts$CountBare)


scrc = read.csv("../../../materials/nouns/corpus_counts/wikipedia/RC_annotate/results/collectResults.py.tsv", sep="\t")
scrc = scrc %>% mutate(SC_Bias = (SC+1e-10)/(SC+RC+Other+3e-10))
scrc = scrc %>% mutate(Log_SC_Bias = log(SC_Bias))

counts = merge(counts, scrc, by=c("Noun")) %>% mutate(RatioSC = Ratio + Log_SC_Bias)



data = merge(data, counts, by=c("Noun"), all.x=TRUE)


library(ggplot2)


library(lme4)

data$SurprisalReweighted = data$SurprisalReweighted / 0.6931472



data$compatible = grepl("_co", data$Condition)
data$HasSC = !grepl("NoSC", data$Condition)
data$HasRC = grepl("RC", data$Condition)

data$HasSCHasRC = (paste(data$HasSC, data$HasRC, sep="_"))


############### surprisal

data0 = data %>% filter(Experiment == "Experiment1", deletion_rate==0.05, !grepl("_co", Condition), predictability_weight==0.25, Region == "V1_0") %>% group_by(compatible, HasSCHasRC, HasSC, HasRC, predictability_weight, deletion_rate, Condition, Noun, Ratio) %>% summarise(SurprisalReweighted=mean(SurprisalReweighted))  %>% group_by(compatible, HasSCHasRC, HasSC, HasRC, Condition, Noun, Ratio) %>% summarise(SurprisalReweighted=mean(SurprisalReweighted)) 
plot = ggplot(data0, aes(x=Ratio, y=SurprisalReweighted, group=Condition, linetype=HasSCHasRC)) + geom_smooth(method="lm", se=F)  + geom_point(data = data0 %>% filter(SurprisalReweighted >= 7/0.6931472, SurprisalReweighted <=11.0/0.6931472), alpha=0.05) + theme_bw() + theme(legend.position = "none") + xlab("Embedding Bias") + ylab("Surprisal (bits)") + scale_linetype_manual(values = c("FALSE_FALSE" = "dotdash",
                                "TRUE_FALSE"="dashed",
                                "TRUE_TRUE"="solid")) 
ggsave(plot, file="figures/model-critical-experiment1-005-points_SQUARE_Bits_Greyscale.pdf", height=1.8, width=1.8)



data0 = data %>% filter(Experiment == "Experiment1", deletion_rate==0.5, grepl("_TPL", Script), !grepl("_co", Condition), predictability_weight==1, Region == "V1_0") %>% group_by(compatible, HasSCHasRC, HasSC, HasRC, predictability_weight, deletion_rate, Condition, Noun, Ratio) %>% summarise(SurprisalReweighted=mean(SurprisalReweighted))  %>% group_by(compatible, HasSCHasRC, HasSC, HasRC, Condition, Noun, Ratio) %>% summarise(SurprisalReweighted=mean(SurprisalReweighted)) 
plot = ggplot(data0, aes(x=Ratio, y=SurprisalReweighted, group=Condition, linetype=HasSCHasRC)) + geom_smooth(method="lm", se=F)  + geom_point(data = data0 %>% filter(SurprisalReweighted >= 7/0.6931472, SurprisalReweighted <=11.0/0.6931472), alpha=0.1) + theme_bw() + theme(legend.position = "none") + xlab("Embedding Bias") + ylab("Surprisal (bits)") + scale_linetype_manual(values = c("FALSE_FALSE" = "dotdash",
                                "TRUE_FALSE"="dashed",
                                "TRUE_TRUE"="solid"))  
ggsave(plot, file="figures/model-critical-experiment1-05-points_Bits_Greyscale.pdf", height=3.5, width=1.8)


