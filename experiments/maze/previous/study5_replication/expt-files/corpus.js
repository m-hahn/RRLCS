// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1. 
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

exp.condition = 0; //Math.floor(Math.random()*2);
console.log("Condition "+exp.condition)





var stimuliContext =  makeStimsContext();
var stimuliContextPart = {};
stimuliContextPart[1] = stimuliContext.slice(0, Math.floor(stimuliContext.length/4))
stimuliContextPart[2] = stimuliContext.slice(Math.floor(stimuliContext.length/4), Math.floor(2*stimuliContext.length/4))
stimuliContextPart[3] = stimuliContext.slice(Math.floor(2*stimuliContext.length/4), Math.floor(3*stimuliContext.length/4))
stimuliContextPart[4] = stimuliContext.slice(Math.floor(3*stimuliContext.length/4))

console.log("@@@");
console.log(stimuliContextPart[1].length);
console.log(stimuliContextPart[2].length);
console.log(stimuliContextPart[3].length);
console.log(stimuliContextPart[4].length);
console.log(stimuliContext.length);

console.log(stimuliContextPart[1]);
console.log(stimuliContextPart[2]);
console.log(stimuliContextPart[3]);
console.log(stimuliContextPart[4]);


function makeStimsContext() {
     console.log("MAKE STIMS CONTEXT")


     fillers = [];
     stims = [];
	critical = [];
     
     conditionAssignment = [];
     conditionsCounts = [0, 0, 0, 0];
	if(Math.random() > 0.5) {
		cond1 = 3;
		cond2 = -1;
		cond3 = 0;
		cond4 = 2;
	} else {
		cond1 = 0;
		cond2 = 2;
		cond3 = 3;
		cond4 = -1;
	}
//     for(var i=0; i<3; i++) {
     	   conditionAssignment.push(1)
     	   conditionAssignment.push(cond1)
     	   conditionAssignment.push(cond3)
     	   conditionAssignment.push(cond2)
     	   conditionAssignment.push(cond4)
     	   conditionAssignment.push(cond1)
     	   conditionAssignment.push(cond2)
     	   conditionAssignment.push(cond3)
     	   conditionAssignment.push(cond4)
     	   conditionAssignment.push(1)
  //   }
     console.log(conditionAssignment); 
    
nouns = {}

nouns["CLAIM"] = []
nouns["ACCUSATION"] = []
nouns["FACT"] = []
nouns["HOPE"] = []
nouns["CHANCE"] = []
nouns["FEAR"] = []
nouns["PREDICTION"] = []

// CLAIM: a claim whose truth or falsity is not presupposed.
nouns["CLAIM"].push("announcement")
nouns["CLAIM"].push("assertion")
nouns["CLAIM"].push("assessment")
nouns["CLAIM"].push("assumption")
nouns["CLAIM"].push("belief")
nouns["CLAIM"].push("claim")
nouns["CLAIM"].push("conclusion")
nouns["CLAIM"].push("confirmation")
nouns["CLAIM"].push("declaration")
nouns["CLAIM"].push("feeling")
nouns["CLAIM"].push("finding")
nouns["CLAIM"].push("idea")
nouns["CLAIM"].push("indication")
nouns["CLAIM"].push("inkling")
//nouns["CLAIM"].push("insinuation") // removing this for now because the counts are really high-variance
nouns["CLAIM"].push("news")
nouns["CLAIM"].push("notion")
nouns["CLAIM"].push("opinion")
nouns["CLAIM"].push("perception")
nouns["CLAIM"].push("presumption")
nouns["CLAIM"].push("remark")
nouns["CLAIM"].push("reminder")
nouns["CLAIM"].push("revelation")
nouns["CLAIM"].push("rumor")
nouns["CLAIM"].push("speculation")
nouns["CLAIM"].push("statement")
nouns["CLAIM"].push("suggestion")
nouns["CLAIM"].push("theory")
nouns["CLAIM"].push("view")
nouns["CLAIM"].push("assurance")
nouns["CLAIM"].push("message")
nouns["CLAIM"].push("contention")
nouns["CLAIM"].push("impression")
nouns["CLAIM"].push("opinion")
nouns["CLAIM"].push("sense")
nouns["CLAIM"].push("presumption")
nouns["CLAIM"].push("revelation")
nouns["CLAIM"].push("intuition")
nouns["CLAIM"].push("conjecture")
nouns["CLAIM"].push("conviction")
nouns["CLAIM"].push("thought")
nouns["CLAIM"].push("claim")
nouns["CLAIM"].push("conclusion")
nouns["CLAIM"].push("feeling")
nouns["CLAIM"].push("finding")
nouns["CLAIM"].push("idea")
nouns["CLAIM"].push("indication")
nouns["CLAIM"].push("presumption")
nouns["CLAIM"].push("revelation")
nouns["CLAIM"].push("rumor")
nouns["CLAIM"].push("speculation")
nouns["CLAIM"].push("guess")
nouns["CLAIM"].push("story")
nouns["CLAIM"].push("report")



nouns["ACCUSATION"].push("admission")
nouns["ACCUSATION"].push("allegation")
nouns["ACCUSATION"].push("accusation")
nouns["ACCUSATION"].push("insinuation") 
nouns["ACCUSATION"].push("complaint")
nouns["ACCUSATION"].push("suspicion")
//nouns["CHANCE"].push("chance") 
//nouns["CHANCE"].push("probability")
//nouns["CHANCE"].push("likelihood")
//nouns["FEAR"].push("fear")
//nouns["FEAR"].push("concern")
//nouns["HOPE"].push("reassurance")
//nouns["HOPE"].push("hope")
//nouns["HOPE"].push("promise")
//nouns["PREDICTION"].push("prediction")
//nouns["PREDICTION"].push("expectation")
nouns["FACT"].push("truth")
nouns["FACT"].push("fact")
nouns["FACT"].push("reminder")
nouns["FACT"].push("disclosure")
nouns["FACT"].push("proof")
nouns["FACT"].push("realization")
nouns["FACT"].push("observation")
nouns["FACT"].push("understanding")
nouns["FACT"].push("proof")
nouns["FACT"].push("certainty")
nouns["FACT"].push("recognition")
nouns["FACT"].push("disclosure")

nounsByThatBiasOrder = [];




nounsByThatBiasOrder = [];



// Nouns selected according to the average of the three log-frequencies
nounsByThatBiasOrder.push("story")
nounsByThatBiasOrder.push("report")
nounsByThatBiasOrder.push("assessment")
nounsByThatBiasOrder.push("truth")
nounsByThatBiasOrder.push("declaration")
nounsByThatBiasOrder.push("complaint")
nounsByThatBiasOrder.push("admission")
nounsByThatBiasOrder.push("disclosure")
nounsByThatBiasOrder.push("confirmation")
nounsByThatBiasOrder.push("guess")
nounsByThatBiasOrder.push("remark")
nounsByThatBiasOrder.push("news")
nounsByThatBiasOrder.push("proof")
nounsByThatBiasOrder.push("message")
nounsByThatBiasOrder.push("announcement")
nounsByThatBiasOrder.push("statement")
nounsByThatBiasOrder.push("thought")
nounsByThatBiasOrder.push("allegation")
nounsByThatBiasOrder.push("indication")
nounsByThatBiasOrder.push("recognition")
nounsByThatBiasOrder.push("speculation")
nounsByThatBiasOrder.push("accusation")
nounsByThatBiasOrder.push("reminder")
nounsByThatBiasOrder.push("rumor")
nounsByThatBiasOrder.push("finding")
nounsByThatBiasOrder.push("idea")
nounsByThatBiasOrder.push("feeling")
nounsByThatBiasOrder.push("conjecture")
nounsByThatBiasOrder.push("perception")
nounsByThatBiasOrder.push("certainty")
nounsByThatBiasOrder.push("revelation")
nounsByThatBiasOrder.push("understanding")
nounsByThatBiasOrder.push("claim")
nounsByThatBiasOrder.push("view")
nounsByThatBiasOrder.push("observation")
nounsByThatBiasOrder.push("conviction")
nounsByThatBiasOrder.push("presumption")
nounsByThatBiasOrder.push("intuition")
nounsByThatBiasOrder.push("opinion")
nounsByThatBiasOrder.push("conclusion")
nounsByThatBiasOrder.push("notion")
nounsByThatBiasOrder.push("suggestion")
nounsByThatBiasOrder.push("sense")
nounsByThatBiasOrder.push("suspicion")
nounsByThatBiasOrder.push("assurance")
nounsByThatBiasOrder.push("insinuation")
nounsByThatBiasOrder.push("realization")
nounsByThatBiasOrder.push("assertion")
nounsByThatBiasOrder.push("impression")
nounsByThatBiasOrder.push("contention")
nounsByThatBiasOrder.push("assumption")
nounsByThatBiasOrder.push("belief")
nounsByThatBiasOrder.push("fact")




topNouns = [];
for(n = 0; n<nounsByThatBiasOrder.length; n++) {
	success = false;
	for(key in nouns) {
		if(nouns[key].includes(nounsByThatBiasOrder[n])) {
			success = true;
		}
	}
	if(!success) {
	   console.log("EXCLUDED", nounsByThatBiasOrder[n], success, nouns["HOPE"]);
	}
	if(success) {
		topNouns.push(nounsByThatBiasOrder[n]);
	}
}


topNouns1 = _.sample(topNouns.slice(0, 15),7);
topNouns2 = _.sample(topNouns.slice(topNouns.length-15, topNouns.length), 7);
console.log(topNouns1);
console.log(topNouns2);
console.log("SELECTION");

topNouns = topNouns1.concat(topNouns2);
console.log("LENGTH", topNouns.length, topNouns);







continuations = []

for(i=0; i<20; i++) {
	continuations.push([]);
}



continuations[0].push({s : "that the analyst who the banker trusted appeared on TV was very believable.", a : "x-x-x seemed farm mid confine joy me births infants contents joy Den thy thou copyrights." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM"})
continuations[0].push({s : "that the analyst who the banker trusted repaired the TV was very believable.", a : "x-x-x reduce else sit arguing way red graphs bridges portable sun Ye ago pair conspiring." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM"})

continuations[1].push({s : "that the consultant who the artist hired surprised the janitor shocked everyone.", a : "x-x-x caught walk sat vigorously mid sky seldom super belonging sun lignite gastric location." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations[1].push({s : "that the consultant who the artist hired detested the janitor shocked everyone.", a : "x-x-x caught soul sit hemorrhage joy us forget cruel frescoes joy harpoon indexes continue." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})

continuations[2].push({s : "that the commander who the president appointed was confirmed troubled people.", a : "x-x-x obtain ball sat introduce low hot certainly religious gas fragments severity quoted." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM"})
continuations[2].push({s : "that the commander who the president appointed was fired troubled people.", a : "x-x-x accept tell mid affecting hot add ourselves attitudes joy prose heritage marked." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM"})

continuations[3].push({s : "that the politician who the banker bribed was credible was bogus.", a : "x-x-x indeed draw sat hemorrhage fat dry danced entice bit surveyor mid strut."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations[3].push({s : "that the politician who the banker bribed was corrupt was bogus.", a : "x-x-x enough acid sat positioned ice big reflex hugely eat anguish sky frees." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})

continuations[4].push({s : "that the dancer who the audience loved made people happy was exciting.", a : "x-x-x become hair sit tasted dry sum becoming sides mail estate crime arm garrison." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM FACT"})
continuations[4].push({s : "that the dancer who the audience loved won a prize was exciting.", a : "x-x-x exists neck sat hurled non mid composed prime bed thy winds thy receptor."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM FACT"})

continuations[5].push({s : "that the politician who the farmer trusted was refuted did not bother the farmer.", a : "x-x-x caused knew mid circulated fat us adding wedding hot adverbs lot am ballet mid define."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_3_4 REGION_4_0", n : "CLAIM FACT ACCUSATION"})
continuations[5].push({s : "that the politician who the farmer trusted was elected did not bother the farmer.", a : "x-x-x tissue join sat hemorrhage fat joy suffer seasons map display bed gas canals hot belong."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_3_4 REGION_4_0", n : "CLAIM FACT ACCUSATION"})

continuations[6].push({s : "that the surgeon who the patient thanked shocked his colleagues was ridiculous.", a : "x-x-x assume pass sat notably us son suggest diocese thanked bar translated mid containers.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations[6].push({s : "that the surgeon who the patient thanked cured his colleagues was ridiculous.", a : "x-x-x looked milk sat erected us sum because scandal maxim arm newspapers non chromosome." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})

continuations[7].push({s : "that the principal who the teacher liked calmed everyone down was false.", a : "x-x-x unable hair sat conducted her bed beneath pound anthem suitable sand gas units."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations[7].push({s : "that the principal who the teacher liked had an affair was false.", a : "x-x-x ensure blue sit including mid joy discuss poems sum ad rarely eye plate."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})

continuations[8].push({s : "that the child who the medic rescued was quoted in newspapers was very interesting.", a : "x-x-x accept road sat refer lot sky bandy fallacy buy corner try illustrate us hour institution."    , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_2_3 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT"})
continuations[8].push({s : "that the child who the medic rescued wrote the newspaper article was very interesting.", a : "x-x-x please dark sat their lot us coves prelude legal bar preparing percent eat arts authorities." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_2_3 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT"})

continuations[9].push({s : "that the student who the professor hated was foolish was a malicious smear.", a : "x-x-x though lack add replied thy sea certainly brand dry texture bed ago hurriedly decor." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_4_0", n : "CLAIM ACCUSATION"})
continuations[9].push({s : "that the student who the professor hated was lazy was a malicious smear.", a : "x-x-x taught wish sat located non dry establish giant dog mare see net untouched wasps." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_4_0", n : "CLAIM ACCUSATION"})

continuations[10].push({s : "that the actor who the starlet loved made her cry was sad to hear.", a : "x-x-x issued lack mid grows hot off berates brief soil buy bus bar tip see salt."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations[10].push({s : "that the actor who the starlet loved got very sick was sad to hear.", a : "x-x-x though send sit lined few lot batsmen hours tax poet shop sum fee arm sold." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_4_0", n : "FACT CLAIM ACCUSATION"})

continuations[11].push({s : "that the senator who the diplomat opposed annoyed him was absolutely true.", a : "x-x-x slowly hope sat notably sky eye adequacy obvious adviser eat arm accordance baby."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT ACCUSATION"})
continuations[11].push({s : "that the senator who the diplomat opposed supported him was absolutely true.", a : "x-x-x walked coal sat anybody net us cohesive quarter interview dry sin inspection wall." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT ACCUSATION"})

continuations[12].push({s : "that the extremist who the agent caught was dangerous was widely acknowledged.", a : "x-x-x slowly fish sat instilled hot non curve garden mid responses sit bodies illustration." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT ACCUSATION"})
continuations[12].push({s : "that the extremist who the agent caught was arrested was widely acknowledged.", a : "x-x-x placed ball sat margarine ago bed spite sample joy diabetes joy waters illustration." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT ACCUSATION"})

continuations[13].push({s : "that the victim who the criminal assaulted remained hidden was unnerving.", a : "x-x-x enough lose sat attend big add together upgrading exchange essays ask campsites." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM FACT"})
continuations[13].push({s : "that the victim who the criminal assaulted remained crippled was unnerving.", a : "x-x-x assume head mid extend hot fat composed thrusting academic dialysis try repeaters." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM FACT"})

continuations[14].push({s : "that the sculptor who the painter admired was popular was no surprise.", a : "x-x-x occurs wish sat voltages why sea happily prophet aid request me lie universe."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "FACT CLAIM"})
continuations[14].push({s : "that the sculptor who the painter admired made sculptures was no surprise.", a : "x-x-x ensure sell sat renounce mid low shifted fellows root frameworks sex ask opinions." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "FACT CLAIM"})

continuations[15].push({s : "that the runner who the psychiatrist treated was widely known was incorrect.", a : "x-x-x seemed nine sat dismay sin bed mythological islands joy waters whole bar reproduce." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations[15].push({s : "that the runner who the psychiatrist treated won the marathon was incorrect.", a : "x-x-x placed meet sat sucked mid mid orientations channel am sun evacuate thy disregard." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})

continuations[16].push({s : "that the criminal who the officer arrested stunned everyone was disconcerting.", a : "x-x-x expect seek add remember dry hot include producer pitcher addition tax domestication." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations[16].push({s : "that the criminal who the officer arrested killed everyone was disconcerting.", a : "x-x-x slowly lose sit indicate thy map against severity unique examined ask sensitivities." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})

continuations[17].push({s : "that the preacher who the parishioners fired was idiotic was gaining traction.", a : "x-x-x caught soil sat perceive lot six transformers cargo bed trapper add chances maneuver." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "ACCUSATION CLAIM"})
continuations[17].push({s : "that the preacher who the parishioners fired was fired was gaining traction.", a : "x-x-x unless side sat minimize sea dry encapsulated nodes lot loves buy propose revising." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "ACCUSATION CLAIM"})

continuations[18].push({s : "that the violinist who the sponsors backed sounded hopeful pleased everyone.", a : "x-x-x prices help sat decorator why red inducing intake surplus divides stomach daughter." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM"})
continuations[18].push({s : "that the violinist who the sponsors backed played sonatas pleased everyone.", a : "x-x-x though jobs sat dismantle fat non casualty thence danger fronted lateral finished." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM"})

continuations[19].push({s : "that the trader who the businessman consulted hurt him was unnerving.", a : "x-x-x unable slow sat reside sit sky confidently prejudice cook mid mid polyphony."  , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations[19].push({s : "that the trader who the businessman consulted cheated him was unnerving.", a : "x-x-x trying hear sat bother mid me enumeration telegraph recycle bed boy stagnated." , r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})



for(i = 0; i<continuations.length; i++) {
	for(j =0; j<2; j++) {
                continuations[i][j].item = "Critical_"+i
                continuations[i][j].condition = "continuations"
		continuations[i][j].n = continuations[i][j].n.split(" ")
	}
}





continuationsChosen = _.shuffle(continuations);
console.log(continuationsChosen);





console.log(topNouns);

FAILED = true;
matching_attempts = 0;
while(FAILED) {
topNouns = _.shuffle(topNouns);

matching_attempts = matching_attempts+1;
	if(matching_attempts > 5) {
		CRASH();
	}
	nounsAndVerbsCopied = [...continuationsChosen]
        nounsAndVerbsAssignment = []
	FAILED = false;
//	console.log(topNouns);
        for(n = 0; n<topNouns.length; n++) {
//		console.log(n);
                relevantContinuations = [];
        	noun = topNouns[n]
//		console.log(noun);
                for(c = 0; c<nounsAndVerbsCopied.length; c++) {
//			console.log(c);
//			console.log(nounsAndVerbsCopied[c].n);

			for(d = 0; d<nounsAndVerbsCopied[c][0].n.length; d++) {
//				console.log(nounsAndVerbsCopied[c].n[d]);
//				console.log(noun, nouns[nounsAndVerbsCopied[c].n[d]]);

	                	if(nouns[nounsAndVerbsCopied[c][0].n[d]].includes(noun)) {
				//	console.log("found "+noun);
                        	   relevantContinuations.push(c);
                 	   	}
			}
                }
		console.log("CONSIDERING NOUN", noun, n, "Remaining conts.", nounsAndVerbsCopied.length, relevantContinuations);
                if(relevantContinuations.length == 0) {
                	FAILED = true;
                	break
                } else {
                       chosen = _.sample(relevantContinuations, 1);
			//console.log(chosen);
			nounsAndVerbsAssignment.push(nounsAndVerbsCopied[chosen]);
			nounsAndVerbsCopied.splice(chosen, 1);
			//console.log(nounsAndVerbsCopied.length)
                }
        }
        console.log("ATTEMPTS", matching_attempts);
}



console.log(nounsAndVerbsAssignment);
console.log(topNouns);
conditionAssignment = _.shuffle(conditionAssignment);

continuations = nounsAndVerbsAssignment;

continuationsChosen = []
for(i = 0; i<continuations.length; i++) {
	continuations[i][0].noun = topNouns[i];
	continuations[i][1].noun = topNouns[i];
	continuations[i][0].s = "The "+topNouns[i]+" "+continuations[i][0].s;
	continuations[i][1].s = "The "+topNouns[i]+" "+continuations[i][1].s;
	continuations[i][0].r = "REGION_D0 REGION_N0 "+continuations[i][0].r;
	continuations[i][1].r = "REGION_D0 REGION_N0 "+continuations[i][1].r;
    console.log(continuations[i]);
	if(conditionAssignment[i] < 2) {
		item = continuations[i][0];
		if(conditionAssignment[i] == 0) { 
    		    item["condition"] = "critical_incompatible"
		} else if(conditionAssignment[i] == 1) {
    		    item["condition"] = "critical_NoSC" 
		} else if (conditionAssignment[i] == -1) {
    		    item["condition"] = "critical_SCRC_incompatible"
		}

		distractors1 = continuations[i][0].a.split(" ");
		distractors2 = continuations[i][1].a.split(" ");
		words1 = continuations[i][0].s.split(" ")
		words2 = continuations[i][1].s.split(" ")
		distractors = [];
		regions = item.r.split(" ");
		for(j = 0; j<words2.length; j++) {
			distractors.push(distractors1[j]);
		}
		item.a = distractors.join(" ");
	} else {
		item = continuations[i][1];
		if(conditionAssignment[i] == 2) {
  		    item["condition"] = "critical_compatible"
		} else if(conditionAssignment[i] == 3) {
			item["condition"] = "critical_SCRC_compatible"
		} else {
			CRASH();
		}
		distractors1 = continuations[i][0].a.split(" ");
		distractors2 = continuations[i][1].a.split(" ");
		words1 = continuations[i][0].s.split(" ")
		words2 = continuations[i][1].s.split(" ")
		distractors = [];
		regions = item.r.split(" ");
		for(j = 0; j<words2.length; j++) {
			if(j < regions.length && (words1[j] != words2[j]) || (j > 0 && words1[j-1] != words2[j-1])) {
				distractors.push(distractors2[j]);
			} else {
				distractors.push(distractors1[j]);
			}
		}
		item.a = distractors.join(" ");

	}

	s_ = [];
	a_ = [];
	r_ = [];
        s = item.s.split(" ")
	a = item.a.split(" ")
	r = item.r.split(" ")
	condition = item["condition"]

	for(j=0; j<s.length; j++) {
		if(condition == "critical_NoSC" && r[j].startsWith("REGION_0_")) {
			continue;
		}
		if(condition == "critical_NoSC" && r[j].startsWith("REGION_2_")) {
			continue;
		}
		if(condition != "critical_SCRC_compatible" && condition != "critical_SCRC_incompatible" && r[j].startsWith("REGION_1_")) {
			continue;
		}
		s_.push(s[j]);
		a_.push(a[j]);
		r_.push(r[j]);
	}
    item.s = s_.join(" ")
    item.a = a_.join(" ")
    item.r = r_.join(" ")


    continuationsChosen.push(item)
    conditions_chosen.push(condition);
}


console.log("CONTINUATIONS CHOSEN");
console.log(continuationsChosen);
criticalChosen = continuationsChosen




fillers = []
fillers.push({s:"The divorcee has come to love her life ever since she got divorced.", a:"x-x-x nearly else bed took fell lord cup air stand base web keyboard."}) 
fillers.push({s:"The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help.", a:"x-x-x rebelling trip lot corpses audible kept inspections appeared card branch moving happen polish oh."}) 
fillers.push({s:"The showman travels to different cities every month.", a:"x-x-x citing terrain hall certainly listen write rates."}) 
fillers.push({s:"The roommate takes out the garbage every week.", a:"x-x-x attest doubt sold lose enables worst anti."}) 
fillers.push({s:"The dragon wounded the knight although he was far too crippled to protect the princess.", a:"x-x-x endorses funding plan borrow question walk tree pop key teammate stay society map indicate."}) 
fillers.push({s:"The office-worker worked through the stack of files on his desk quickly.", a:"x-x-x appreciating forget arrived lady prone wife treat fall born rain western."}) 
fillers.push({s:"The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt.", a:"x-x-x originate war sure among outsourcing cent deviance anymore mouth fun us enter laws yes produced observer plus bill weigh."}) 
fillers.push({s:"During the season, the choir holds rehearsals in the church regularly.", a:"x-x-x nice called, us haunt anger prophecies laws thus issues customers."}) 
fillers.push({s:"The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room.", a:"x-x-x criticises holy sad activated fraction upside mom files cases lot know port lord holy products port van guy how."}) 
fillers.push({s:"The milkman punctually delivers the milk at the door every day.", a:"x-x-x obstruct clerestory lesbians lose quit ass nor took weird join."}) 
fillers.push({s:"The quarterback dated the cheerleader although this hurt her reputation around school.", a:"x-x-x empties fairy sit propagation violence tell east lake represents access placed."}) 
fillers.push({s:"The citizens of France eat oysters.", a:"x-x-x allege anti Amount girl lattice."}) 
fillers.push({s:"The bully punched the kid after all the kids had to leave to go to class.", a:"x-x-x arousing rituals eat what birth felt ha ha sun lake forms link jack size feels."}) 
fillers.push({s:"After the argument, the husband ignored his wife.", a:"x-x-x plus suggests, cent without harmony seen here."}) 
fillers.push({s:"The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints.", a:"x-x-x succumbing oh ha defend feet mine ones ha shouting rescind ounces sort including ass happen infantry laws far protecting."}) 
fillers.push({s:"The librarian put the book onto the shelf.", a:"x-x-x impede east grow this wave grow bacon."}) 
fillers.push({s:"The photographer processed the film on time.", a:"x-x-x prematurely eliminate ago yes non nor."}) 
fillers.push({s:"The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider.", a:"x-x-x enclosing sad cent been hell pro say jack earn resource expert file gets ended list per decide lady anti imagine quotes."}) 
fillers.push({s:"The sportsman goes jogging in the park regularly.", a:"x-x-x incurring hear outback hope fell been processes."}) 
fillers.push({s:"The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient.", a:"x-x-x equates okay yeah bill sun maybe desperate wish wondered married link an unfortunately chronic miss yes residence inscriptions."}) 
fillers.push({s:"The private tutor explained the assignment carefully.", a:"x-x-x reproduce bumps amendment lot kilometers centuries."}) 
fillers.push({s:"The audience who was at the club booed the singer before the owner of the bar could remove him from the stage.", a:"x-x-x solidly anti mid sir why me levee glad argued larger rich lying east done yes worse allows term file rose there."}) 
fillers.push({s:"The defender is constantly scolding the keeper.", a:"x-x-x disembark sick definition dilation yeah albeit."}) 
fillers.push({s:"The hippies who the police at the concert arrested complained to the officials while the last act was going on stage.", a:"x-x-x possesses sale room anyone oh fit writers resource completion kill cup discussed worst damn yes grow sick worry sir older."}) 
fillers.push({s:"The natives on the island captured the anthropologist because she had information that could help the tribe.", a:"x-x-x emanating fat else forget managers plan misconceptions release pick away combination die gonna damn gets shake."}) 
fillers.push({s:"The trainee knew that the task which the director had set for him was impossible to finish within a week.", a:"x-x-x recursively easy jack eat earn prime note together wind word lose anti girl commission gun served degree cup thus."}) 
fillers.push({s:"The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room.", a:"x-x-x unmask hell fact forth none anti scales detectives pungent nice smoky match lake islands boys imagine view luck recommend able."}) 
fillers.push({s:"The company was sure that its new product, which its researchers had developed, would soon be sold out.", a:"x-x-x closely mind dad sir cent nor another, throw drug accompanied eyes everybody, south page ha trip whom."}) 
fillers.push({s:"The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank.", a:"x-x-x supervises oh oh necessarily bed sure size yeah hungry vigorously calculated died reinforcements gotta rose electrical kept countries dean pain told laid cat."}) 
fillers.push({s:"The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it.", a:"x-x-x conclude fat us intakes east ones miss ha today bedding mid tendency vote woods oh law however healthy rest kid wide road lake jack."}) 
fillers.push({s:"The technician at the show repaired the robot while people were taking a break for coffee.", a:"x-x-x devoting hate been guys comrades cup sells sweet stupid sale policy met today sale cannot."}) 
fillers.push({s:"The salesman feared that the printer which the customer bought was damaged.", a:"x-x-x dosing robust walk bar knocked weeks mid sciences impact map premier."}) 
fillers.push({s:"The students studied the surgeon whenever he performed an important operation.", a:"x-x-x reused summary stay advised indicate file something cent president companies."}) 
fillers.push({s:"The locksmith can crack the safe easily.", a:"x-x-x exert okay firms met took agreed."}) 
fillers.push({s:"The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet.", a:"x-x-x seeking cool sea hear ass basically plain lie jerseys reached eyes came mom sit football bell cent enters."}) 
fillers.push({s:"Yesterday the swimmer saw only a turtle at the beach.", a:"x-x-x nice hurdles ways fund web intake anti sold china."}) 
fillers.push({s:"The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain.", a:"x-x-x responding way web belonging bad girl ways soul hope databases profitable soul bullion playing hour explores ball won fun hope statement town windows."}) 
fillers.push({s:"The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper.", a:"x-x-x rejoining lack how arbitrary far came held economic contracted park realizes animals read except religions bed case displays size furthering."}) 
fillers.push({s:"During the party everybody was dancing to rock music.", a:"x-x-x buy comes otherwise few monster pay ago agree."}) 
fillers.push({s:"The fans at the concert loved the guitarist because he played with so much energy.", a:"x-x-x besting holy via citizen older seat cooperate limited keep cancer sit does mass months."}) 
fillers.push({s:"The intern comforted the patient because he was in great pain.", a:"x-x-x predate receptive wind noticed percent kid move park basis win."}) 
fillers.push({s:"The casino hired the daredevil because he was confident that everything would go according to plan.", a:"x-x-x commences sword yes universes protect does her describes add understand china six authority ways down."}) 
fillers.push({s:"The beggar is often scrounging for cigarettes.", a:"x-x-x officially mid feels concourses fan agreements."}) 
fillers.push({s:"The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate.", a:"x-x-x diversifying heat god whoever communist legalized jack den perfect keep account oh affiliates feet learn description."}) 
fillers.push({s:"The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape.", a:"x-x-x certainly luck fine aimed suitable teaming mind invent congress mom grow boy describes pick author walk poetry."}) 
fillers.push({s:"The passer-by threw the cardboard box into the trash-can with great force.", a:"x-x-x succumbs quiet draw equitable his lord wish quarterly born agree agree."}) 
fillers.push({s:"The biker who the police arrested ran a light since he was driving under the influence of alcohol.", a:"x-x-x rehabilitate risk glad except breaking pain goal exist reach till loss opinion rules nor presented find discuss."}) 
fillers.push({s:"The scientists who were in the lab studied the alien while the blood sample was run through the computer.", a:"x-x-x evict holy yes add goes bob monster son lacks wanna lie agree update wish ha reality note everyone."}) 
fillers.push({s:"The student quickly finished his homework assignments.", a:"x-x-x putting healthy southern wife airports magistrates."}) 
fillers.push({s:"The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home.", a:"x-x-x angering yeah sad perpendicular bed lot valve marketing spills best laugh spend contract me sure mom function hair."}) 
fillers.push({s:"The producer shoots a new movie every year.", a:"x-x-x shortly pierce page anti enjoy peace mom."}) 
fillers.push({s:"The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands.", a:"x-x-x memorably girl body soul girl visits memories card nuisance feels guys scientists says able move please pain ball nostalgic sir learn drivers."}) 
fillers.push({s:"Dinosaurs ate other reptiles during the stone age.", a:"x-x-x earl write exporter minute guys wants dad."}) 
fillers.push({s:"The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees.", a:"x-x-x contemplates anti map walks tenuous voted ass goal anti devoid skip weekend star mind veterinary lose dad sides want rose knew indicates."}) 
fillers.push({s:"The teacher doubted that the test that had taken him a long time to design would be easy to answer.", a:"x-x-x totalling grinder star feet them your miss miles song anti oh her ha posted enjoy door fund foot county."}) 
fillers.push({s:"The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater.", a:"x-x-x admirably trip cell justify cool lose wanting rough collapse runs thirds gold term miss rate evolved ideas bill code mean miles yeah hear their acquire."}) 

for(i=0; i<fillers.length; i++) {
	fillers[i].condition = "filler"
	fillers[i].item = "Filler_"+i
}

	practice = [];

practice.push({s:"The semester will start next week, but the students and teachers are not ready.", a:"x-x-x thrives anti wages body sold, sin sky entitled sky concrete oil him goods."})
practice.push({s:"The mother of the prisoner sent him packages that contained cookies and novels.", a:"x-x-x defraud dry arm amounted rare nor rhythmic fund authority blossom me defect."})
practice.push({s:"The reporter had dinner yesterday with the baseball player who Kevin admired.", a:"x-x-x quantify joy reduce organisms rise sum attained tended sin Troop flowing."})
practice.push({s:"The therapist set up a meeting with the upset woman and her husband yesterday.", a:"x-x-x forestall ten sit sum absence wave ran keeps exist dry sum settled remainder."})

for(i=0; i<practice.length; i++) {
	practice[i].condition = "filler"
	practice[i].item = "Practice_"+i
}




function separatedShuffle(x, y) {
	indices_x = [...Array(x.length).keys()].map(function(x){ return ["x",x]})
	indices_y = [...Array(y.length).keys()].map(function(x){ return ["y",x]})
	if(indices_x.length <= indices_y.length+5) {
		CRASH()
	}
	console.log(indices_x);
	console.log(indices_y);
	result = indices_x.concat(indices_y);
	attempts_order = 0;
	console.log("SHUFFLING");
	result = _.shuffle(result);
	for(i=0; i+1<result.length; i++) {
		if(result[i][0] == "y" && result[i+1][0] == "y") {
			candidate_positions = [];
	                for(j=0; j+2<result.length; j++) {
                           if(result[j][0] == "x" && result[j+1][0] == "x" && result[j+2][0] == "x") {
				   candidate_positions.push(j+1);
			   }
			}
			console.log(i, "CANDIDATES", candidate_positions);
			SELECTED_NEW_POSITION = _.sample(candidate_positions, 1)[0];
			X = result[i];
			Y = result[SELECTED_NEW_POSITION]
			result[SELECTED_NEW_POSITION] = X;
			result[i] = Y;
		}
	}
	for(i=0; i+1<result.length; i++) {
		if(result[i][0] == "y" && result[i+1][0] == "y") {
			console.log("THIS SHOULD NOT HAPPEN", i);
		}
	}
	result_ = []
	for(i = 0; i<result.length; i++) {
		if(result[i][0] == "x") {
			result_.push(x[result[i][1]]);
		} else {
			result_.push(y[result[i][1]]);
		}
	}
	return result_;
}

console.log("CRITICAL", criticalChosen);

fillersAndCritical = separatedShuffle(_.sample(fillers, 30), criticalChosen);

fullStimuli = _.shuffle(practice).concat(fillersAndCritical);

item_ids = [];

console.log( fullStimuli);
return fullStimuli;
     
}

