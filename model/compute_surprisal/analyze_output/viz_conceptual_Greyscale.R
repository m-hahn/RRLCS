library(tidyr)
library(dplyr)


library(ggplot2)

data = read.csv("conceptual.tsv", sep="\t")

data$compatible = grepl("_compatible", data$Condition)
data$HasSC = !grepl("NoSC", data$Condition)
data$HasRC = grepl("RC", data$Condition)

data$HasSCHasRC = (paste(data$HasSC, data$HasRC, sep="_"))


data[data$Ratio == 0,]$Ratio = log(0.7)

plot = ggplot(data %>% filter(Theory == "DLT") %>% group_by(compatible, HasSCHasRC, HasSC, HasRC, Condition, Ratio) %>% summarise(Difficulty=mean(Difficulty)), aes(x=Ratio, y=Difficulty, group=Condition, linetype=HasSCHasRC)) + geom_smooth(method="lm", se=F) + theme_bw() + theme(legend.position = "none") + xlab("Embedding Bias") + ylab("Difficulty") + scale_linetype_manual(values = c("FALSE_FALSE" = "dotdash",
                                "TRUE_FALSE"="dashed",
                                "TRUE_TRUE"="solid"))
plot = plot + ylim(-0.5, 5.5) 
ggsave(plot, file="figures/conceptual-predictions-dlt_Greyscale.pdf", width=1.8, height=1.8)



