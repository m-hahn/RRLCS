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

var ships = _.shuffle(["AUTO-COLOR-few-NUM.svg", "AUTO-COLOR-many-NUM.svg"]) //, "rocket1.png", "rocket2.png", "rocket3.png", "rocket4.png", "rocket5.png", "rocket-6.jpg", "saucer-2.png", "saucer-3.png", "saucer-4.jpg", "saucer-5.jpg", "saucer-6.png"];

// randomize whether adjective means saucer or rocket

var     shipsGroupB1 = [ships[0]]; //"rocket1.png", "rocket2.png"] //, "rocket3.png", "rocket4.png", "rocket5.png", "rocket-6.jpg"];
var     shipsGroupB2 = [ships[1]]; //, "saucer-2.png"] //, "saucer-3.png", "saucer-4.jpg", "saucer-5.jpg", "saucer-6.png"];


// set the adjective set
// also, should randomize the orders in the questionnaires at the end
//var     adjectives = _.sample(["twell","lann","cref"],2) //_.sample(["broff", "kolch", "muic", "yunt", "plach", "lann", "physs", "scrib", "glab"], 2);

biglist = ["grirped","brirk","clou","fonns","spunes","spyck","fruith","squalf","phoys","jite","dwake","twad","therv","cuint","ghoice","yafs","blef","niege","trunce","preathe","joids","heaned","slalps","twawls","jaund","brame","irv","snurts","duilts","bamn","spraived","praife","juints","crooch","scorcs","fict","ceched","thomps","cref","gwigs","trafes","milbed","anns","toch","rhould","lised","olm","gelt","hafs","twell","broff", "kolch", "muic", "yunt", "plach", "lann", "physs", "scrib", "glab"]

// those with positive mean slope in 61: ["kolch","trafes","twawls","trunce","lised","snurts","twell","yafs","squalf","yunt","bamn","glab","fonns","toch","duilts","slalps","clou","jite","plach","phoys","irv","anns","rhould","spyck","dwake","ceched","brame"]



var adjectives = _.sample(biglist, 2)

var     adjectivesOrdered = _.shuffle(adjectives.concat());


// adjective1 is subjective, adjective2 is objective

var     shipsGroupA1 = [];
var     shipsGroupA2 = [];
     for(var i = 0; i<shipsGroupB1.length; i++) {
        if(i % 2 == 0) {
          shipsGroupA1.push(shipsGroupB1[i])
          shipsGroupA1.push(shipsGroupB2[i])
        } else {
          shipsGroupA2.push(shipsGroupB1[i])
          shipsGroupA2.push(shipsGroupB2[i])
        }
     }



     // in condition0:
var     shipsGroupC1 = ["rocket5", "saucer-1"] // Adj1, according to Alien1
var     shipsGroupC2 = ["rocket5", "saucer-2"] // Adj1, according to Alien2


var learning_block_1 = [];
var learning_block_2 = [];
var learning_block_3 = [];
var learning_block_4 = [];
var learning_block_5 = [];
var learning_block_6 = [];
var learning_block_7 = [];
var learning_block_8 = [];


var testing_block_1 = [];
var testing_block_2 = [];
var testing_block_3 = [];
var testing_block_4 = [];
var testing_block_5 = [];
var testing_block_6 = [];
var testing_block_7 = [];
var testing_block_8 = [];



//function allowDrop(ev) {
//    ev.preventDefault();
//}
//
//function drag(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//}
//
//function drop(ev) {
//    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
//}

console.log(adjectives);
console.log(ships);

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

function sampleExcept(from, accept) {
  
  for(var i=0; i<50; i++) {
    result = _.sample(from);
    if(accept(result)) {
      return result;
    }
  }
  console.log("Sampling failed");
  console.log(from);
  console.log(accept);
  return result;

}

var production_block_1 = []; // simple, group 1
var production_block_2 = []; // simple, group 2
var production_block_3 = []; // difficult, at most one alien adjective
var production_block_4 = []; // difficult, only alien adjectives


var production_block_click_1 = production_block_1
var production_block_click_2 = production_block_2
var production_block_click_3 = production_block_3
var production_block_click_4 = production_block_4

var production_block_1 = []; // simple, group 1
var production_block_2 = []; // simple, group 2
var production_block_3 = []; // difficult, at most one alien adjective
var production_block_4 = []; // difficult, only alien adjectives



//function selectLatinSquareCritical(critical) {
//	return critical;
//}

function processCritical(itemOrder, stimsHere, conditionAssignment, item, topNoun, remainder) {
	noun = topNoun;
	n1 = remainder[0];
	n2 = remainder[1];
	v3 = remainder[2];
	v4 = remainder[3];
	v5 = remainder[4];
        question = remainder[5];
	question = question.replace("XXXX", noun);
	console.log(question);
	answer = remainder[6];
	condition = conditionAssignment[itemOrder];
	sentence = "The "+noun+" that "+n1+" who "+n2
	if(condition == 0) {
		sentence= sentence + " " + v3 + " " + v4 + " " + v5 + "."
	} else if (condition == 2) {
		sentence= sentence + " " + v3 + " " + v5 + "."
	} else {
		crash()
	}
  stimulus = {
		      "item" : item,
		      "condition" : condition,
		      "sentence" : sentence,
		      "question" : null,
		      "answer" : null
                 };
          stimsHere.push(stimulus);
}

function makeStimsContext() {
     console.log("MAKE STIMS CONTEXT")



     function addStimulus(stimsHere, item, condition, sentence, question, answer) {
          stimulus = {
		      "item" : item,
		      "condition" : condition,
		      "sentence" : sentence,
		      "question" : question,
		      "answer" : answer
                 };
          stimsHere.push(stimulus);
     }
     fillers = [];
     stimsExplanation = [];
     stims = [];
     stimsTraining = [];
	critical = [];
     //addStimulus("The child playing in the...", "The child was playing in the...", "filler")
     //addStimulus("The page torn in half...", "The page was torn in half...", "filler")


//     addStimulus(stimsExplanation, "filler", "", "10_SC_RC") 
     
     
     	// Latin Square Logic
     conditionAssignment = [];
     conditionsCounts = [0, 0, 0, 0];
     for(var i=0; i<5; i++) {
	if(Math.random() > 0.5) {
     	   conditionAssignment.push(2)
     	   conditionAssignment.push(0)
	} else {
     	   conditionAssignment.push(0)
     	   conditionAssignment.push(2)
	}
     }
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

//nounsByThatBiasOrder.push("decision")
//nounsByThatBiasOrder.push("insistence")
//nounsByThatBiasOrder.push("inkling") // high uncertainty

//nounsByThatBiasOrder.push("remark")
//nounsByThatBiasOrder.push("admission")
//nounsByThatBiasOrder.push("truth")
//nounsByThatBiasOrder.push("declaration")
//// nounsByThatBiasOrder.push("chance") // OTHER
//nounsByThatBiasOrder.push("assessment")
//nounsByThatBiasOrder.push("news")
////nounsByThatBiasOrder.push("disclosure")
//// nounsByThatBiasOrder.push("promise") // OTHER
//nounsByThatBiasOrder.push("confirmation")
//nounsByThatBiasOrder.push("announcement")
//// nounsByThatBiasOrder.push("concern") // OTHER
////nounsByThatBiasOrder.push("finding")
//// nounsByThatBiasOrder.push("myth") // OTHER
//// nounsByThatBiasOrder.push("prediction") // OTHER
////nounsByThatBiasOrder.push("allegation")
//// nounsByThatBiasOrder.push("hope") // OTHER
////nounsByThatBiasOrder.push("accusation")
////nounsByThatBiasOrder.push("conclusion")
////nounsByThatBiasOrder.push("opinion")
//nounsByThatBiasOrder.push("statement")
//nounsByThatBiasOrder.push("complaint")
//nounsByThatBiasOrder.push("message")
//
//
//nounsByThatBiasOrder.push("feeling")
//nounsByThatBiasOrder.push("expectation")
//nounsByThatBiasOrder.push("theory")
//nounsByThatBiasOrder.push("indication")
//nounsByThatBiasOrder.push("fear")
//nounsByThatBiasOrder.push("proof")
//nounsByThatBiasOrder.push("idea")
//nounsByThatBiasOrder.push("rumor")
//nounsByThatBiasOrder.push("view")
//nounsByThatBiasOrder.push("reminder") // high uncertainty
//nounsByThatBiasOrder.push("speculation")
//nounsByThatBiasOrder.push("presumption")
//nounsByThatBiasOrder.push("suspicion")
//nounsByThatBiasOrder.push("likelihood")
//nounsByThatBiasOrder.push("certainty") // high uncertainty
//nounsByThatBiasOrder.push("revelation")
//nounsByThatBiasOrder.push("claim")
//
// nounsByThatBiasOrder.push("reassurance")
// nounsByThatBiasOrder.push("probability")


nounsByThatBiasOrder = [];



// Nouns selected according to the average of the three log-frequencies
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


topNouns1 = _.sample(topNouns.slice(0, 10), 5);
topNouns2 = _.sample(topNouns.slice(topNouns.length-10, topNouns.length), 5);
console.log(topNouns1);
console.log(topNouns2);
console.log("SELECTION");

topNouns = topNouns1.concat(topNouns2);
console.log("LENGTH", topNouns.length, topNouns);

continuations = []




continuations.push({s : "that the analyst who the banker trusted appeared on TV was very believable.", a : "x-x-x berates cold dad staring bus eye laurel forests favorite holy Lord gone link pharmacist.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM"})
continuations.push({s : "that the consultant who the artist hired surprised the janitor shocked everyone.", a : "x-x-x compiles damn dad facilitate oh easy regret solar promotion yeah deviate buffalo favorite.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations.push({s : "that the commander who the president appointed was confirmed troubled people.", a : "x-x-x commemmorates ha miss ourselves sir bus according technique sea happiness arthritis window.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM"})
continuations.push({s : "that the politician who the banker bribed was credible was bogus.", a : "x-x-x specializes sit dad accomplish sort mom violet taboos jack explains wait gloss.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations.push({s : "that the dancer who the audience loved made people happy was exciting.", a : "x-x-x overrode pick walk admire deep army estimate youth link county yours data shoulder.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM FACT"})
continuations.push({s : "that the politician who the farmer trusted was refuted did not bother the farmer.", a : "x-x-x realizes feel okay downloaded anti us enable freight hear pruning baby sale column code filmed.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_3_4 REGION_4_0", n : "CLAIM FACT ACCUSATION"})
continuations.push({s : "that the surgeon who the patient thanked shocked his colleagues was ridiculous.", a : "x-x-x protects big guys inspire pop half periods martyrs voltage west applicable lord friendship.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations.push({s : "that the principal who the teacher liked calmed everyone down was false.", a : "x-x-x agrees eat miss hopefully dad fat minutes grass alleys computer aid heat kings.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations.push({s : "that the child who the medic rescued was quoted in newspapers was very interesting.", a : "x-x-x forgot mind jack those nice hour gorge diaries tour banana mind confronted ass god application.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_2_3 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT"})
continuations.push({s : "that the student who the professor hated was foolish was a malicious smear.", a : "x-x-x normalizes miss walk tonight my wild yesterday ultra walk rangers sea eat aerospace jerky.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_4_0", n : "CLAIM ACCUSATION"})
continuations.push({s : "that the actor who the starlet loved made her cry was sad to hear.", a : "x-x-x prosecutes oh dad multi west map refines china heat east pope gain base jack laws.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_3_2 REGION_3_3 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations.push({s : "that the senator who the diplomat opposed annoyed him was absolutely true.", a : "x-x-x unlocks cup walk forever low girl engraved failure kissing bed mine difference van.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT ACCUSATION"})
continuations.push({s : "that the extremist who the agent caught was dangerous was widely acknowledged.", a : "x-x-x reappears slow walk analyzing sick sure sucks sister road technique i survey interference.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "CLAIM FACT ACCUSATION"})
continuations.push({s : "that the victims who the criminal assaulted remained hidden was unnerving.", a : "x-x-x dissolves feet dad pleased cool yeah remember railroads managing recall tour whiteness.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM FACT"})
continuations.push({s : "that the sculptor who the painter admired was popular was no surprise.", a : "x-x-x instructs oh ask dictates ways hell predict whereby shut airport sort step bathroom.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "FACT CLAIM"})
continuations.push({s : "that the runner who the psychiatrist treated was widely known was incorrect.", a : "x-x-x violates nice pick expand hall how constructing moments fan photos coach hear detention.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_2_2 REGION_3_0 REGION_3_1 REGION_4_0", n : "CLAIM"})
continuations.push({s : "that the criminal who the officer arrested stunned everyone was disconcerting.", a : "x-x-x endorses sit yeah sortied sad mom however occasion budgets republic mind thermodynamic.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})
continuations.push({s : "that the preacher who the parishioners fired was idiotic was gaining traction.", a : "x-x-x subscribes guys cent shutting easy big biographical steel page syringe mid cooling bedrooms.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_3_2 REGION_4_0", n : "ACCUSATION CLAIM"})
continuations.push({s : "that the violinist who the sponsors backed sounded hopeful pleased everyone.", a : "x-x-x awoke okay dad favorably port rise suppress eagles volumes reactor routine approach.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM"})
continuations.push({s : "that the trader who the businessman consulted hurt him was unnerving.", a : "x-x-x reads pick walk safari holy son differently irritated hair cool map tortoises.", r : "REGION_0_0 REGION_0_1 REGION_0_2 REGION_1_0 REGION_1_1 REGION_1_2 REGION_1_3 REGION_2_0 REGION_2_1 REGION_3_0 REGION_3_1 REGION_4_0", n : "FACT CLAIM ACCUSATION"})


for(n = 0; n<continuations.length; n++) {
	continuations[n].n = continuations[n].n.split(" ");
}

continuations = _.sample(continuations, continuations.length);



//topNouns1 = _.sample(topNouns.slice(0, 10), 7);
//topNouns2 = _.sample(topNouns.slice(10, 20), 7);
//topNouns3 = _.sample(topNouns.slice(topNouns.length-20, topNouns.length-10), 7);
//topNouns4 = _.sample(topNouns.slice(topNouns.length-10, topNouns.length-0), 7);
//
//topNouns = topNouns1.concat(topNouns2).concat(topNouns3).concat(topNouns4);
//



//topNouns1 = topNouns.slice(0, 14);
//topNouns4 = topNouns.slice(topNouns.length-14, topNouns.length-0);

console.log("CRITICAL");

console.log(topNouns);

FAILED = true;
matching_attempts = 0;
while(FAILED) {
topNouns = _.shuffle(topNouns);

matching_attempts = matching_attempts+1;
	if(matching_attempts > 10) {
		CRASH();
	}
	nounsAndVerbsCopied = [...continuations]
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

			for(d = 0; d<nounsAndVerbsCopied[c].n.length; d++) {
//				console.log(nounsAndVerbsCopied[c].n[d]);
//				console.log(noun, nouns[nounsAndVerbsCopied[c].n[d]]);

	                	if(nouns[nounsAndVerbsCopied[c].n[d]].includes(noun)) {
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

conditionAssignment = _.shuffle(conditionAssignment);

criticalChosen = []
for(i = 0; i<topNouns.length; i++) {
	criticalChosen.push({});
	criticalChosen[i].noun = topNouns[i];
	s = nounsAndVerbsAssignment[i].s.split(" ");
	a = nounsAndVerbsAssignment[i].a.split(" ");
	r = nounsAndVerbsAssignment[i].r.split(" ");
	console.log("--------");
        console.log(s);
        console.log(a);
        console.log(r);
	s_ = [];
	a_ = [a[0], a[1]];
	r_ = [];
	condition = conditionAssignment[i];
	for(j=0; j<s.length; j++) {
		if(condition == 0 && r[j].startsWith("REGION_0_")) {
			continue;
		}
		if(condition == 0 && r[j].startsWith("REGION_2_")) {
			continue;
		}
		if(r[j].startsWith("REGION_1_")) {
			continue;
		}
			s_.push(s[j]);
			a_.push(a[j+2]);
			r_.push(r[j]);
	}
	console.log(s_);
	console.log(a_);
	console.log(r_);
	criticalChosen[i].s = "The "+topNouns[i]+" "+s_.join(" ");
	criticalChosen[i].a = a_.join(" ");
	criticalChosen[i].n = nounsAndVerbsAssignment[i].n
       	criticalChosen[i].r = "REGION_D0 REGION_N0 "+r_.join(" ");
	criticalChosen[i].condition = "condition_"+condition;
	
 criticalChosen[i].item = "Critical_"+i
}

console.log(criticalChosen);


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

     fillersAndCritical = separatedShuffle(_.sample(fillers, 30), criticalChosen);
//     fillersAndCritical = criticalChosen;




     fullStimuli = _.shuffle(practice).concat(fillersAndCritical);


item_ids = [];
//for(i = 0; i<fullStimuli.length; i++) {
//	console.log(i, fullStimuli[i].item);
//}



     console.log( fullStimuli);
     return fullStimuli;
     
}

