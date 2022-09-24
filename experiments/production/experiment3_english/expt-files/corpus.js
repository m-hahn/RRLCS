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

var stimuliContext =  makeStimsContext();




function makeStimsContext() {
     console.log("MAKE STIMS CONTEXT")



     function addStimulus(stimsHere, condition, sent1, item) {
          stimulus = {
		      "sent1" : sent1,
		      "item" : item,
		      "condition" : condition
                 };
          stimsHere.push(stimulus);

     }

     stims = [];
     stimsTraining = [];
     //addStimulus("The child playing in the...", "The child was playing in the...", "filler")
     //addStimulus("The page torn in half...", "The page was torn in half...", "filler")


addStimulus(stimsTraining, "filler", "Annabelle was generally against", "filler")
addStimulus(stimsTraining, "filler", "The gardener's son won a scholarship, so he", "filler")
addStimulus(stimsTraining, "filler", "When Frank woke up, he remembered", "filler")



addStimulus(stims, "RC_RC_an", "The lawyer who the juror who", "2_RC_RC_an")
addStimulus(stims, "RC_RC_an", "The reporter who the professor who", "1_RC_RC_an")
addStimulus(stims, "RC_RC_an", "The waiter who the customer who", "3_RC_RC_an")
addStimulus(stims, "RC_RC_inan", "The ballad which the singer who", "2_RC_RC_inan")
addStimulus(stims, "RC_RC_inan", "The manuscript which the writer who", "1_RC_RC_inan")
addStimulus(stims, "RC_RC_inan", "The pen which the orthodontist who", "6_RC_RC_inan")





nounsAndVerbs = []
nounsAndVerbs.push(["the school principal",       "the teacher",        "had an affair with",                     "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.push(["the famous sculptor",        "the painter",        "admired more than anyone",            "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.push(["the marketing whiz",  "the artist",         "had hired",                  "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.push(["the marathon runner",         "the psychiatrist",       "treated for his illness",                "was actually doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.push(["the frightened child",           "the medic",          "rescued from the flood",    "was completely unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.push(["the alleged criminal",        "the officer",        "arrested after the murder",                  "was not in fact guilty",             "was entirely bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.push(["the college student",         "the professor",      "accused of cheating",                     "was dropping the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.push(["the suspected mobster",         "the media",          "portrayed in detail",               "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.push(["the leading man", 	         "the starlet",        "fell in love with",                    "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.push(["the old preacher",        "the parishioners",   "fired yesterday",                     "stole money from the church",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.push(["the young violinist",      "the sponsors",       "backed financially",                    "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.push(["the conservative senator",        "the diplomat",       "opposed in the election",                   "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs.push(["the military commander",        "the president",       "appointed last month",   "was pushing for war",         "troubled people", "Did the XXXX trouble people?", "Y"])
nounsAndVerbs.push(["the injured victims",        "the criminal",       "had assaulted",   "were going to survive",         "calmed everyone down", "Did the XXXX calm everyone down?", "Y"])
nounsAndVerbs.push(["the savvy politician",        "the banker",       "gave thousands of dollars",   "was laundering money",         "came as a shock to his supporters", "Did the XXXX come as a shock?", "Y"])
nounsAndVerbs.push(["the famous surgeon",        "the patient",       "accused of malpractice",   "had a fake degree",         "was not a surprise", "Was the XXXX unsurprising?", "Y"])
nounsAndVerbs.push(["the violent extremist",        "the agent",       "had just tracked down",                   "was going to get an award",         "was disconcerting", "Was the XXXX disconcerting?", "Y"])
nounsAndVerbs.push(["the office clerk",        "the customer",       "called on the phone",   "was a super hero",         "seemed absurd", "Did the XXXX seem absurd?", "Y"])
nounsAndVerbs.push(["the shady trader",        "the businessman",       "consulted for advice",   "acted on insider information",         "was confirmed", "Was the XXXX confirmed?", "Y"])
nounsAndVerbs.push(["the successful CEO",        "the employee",       "impressed with his enthusiam",   "wanted to retire",         "was entirely correct", "Was the XXXX correct?", "Y"])
nounsAndVerbs.push(["the taxi driver", "the tourist", "asked for directions", "was lying", "seemed hard to believe", "", "Y"])
nounsAndVerbs.push(["the angry bookseller", "the thief", "stole ten books from", "got a heart attack", "shocked his family", "", "Y"])
nounsAndVerbs.push(["the odd neighbor", "the woman", "shouted at yesterday", "killed her dog", "was a lie", "", "Y"])
nounsAndVerbs.push(["the mad scientist", "the mayor", "trusted with everything", "had faked data", "was only a malicious smear", "", "Y"])
nounsAndVerbs.push(["the ambitious student", "the bully", "beat up every day", "plagiarized his homework",  "devastated his parents", "", "Y"])
nounsAndVerbs.push(["the cunning trickster", "the woman", "recognized in the store", "was finally caught", "calmed people down", "", "Y"])
nounsAndVerbs.push(["the aspiring entrepreneur", "the philanthropist", "lent millions", "wasted everything on a yacht", "came as a disappointment", "", "Y"])
nounsAndVerbs.push(["the courageous lifesaver", "the swimmer", "called in desparation", "saved the drowning children", "impressed the whole city", "", "Y"])


nounsAndVerbs = _.shuffle(nounsAndVerbs)

topNouns = []

topNouns.push("report") 
topNouns.push("story") 
topNouns.push("admission")
topNouns.push("declaration")
topNouns.push("disclosure") 
topNouns.push("confirmation")
//topNouns.push("remark")
//topNouns.push("news")
//topNouns.push("allegation")
//topNouns.push("information") //Y
//topNouns.push("evidence") //Y
//topNouns.push("proof")
//topNouns.push("finding")
//topNouns.push("indication")



//topNouns.push("claim")
//topNouns.push("conclusion")
//topNouns.push("suggestion") //Y
//topNouns.push("speculation")
//topNouns.push("suspicion")
//topNouns.push("revelation")
//topNouns.push("presumption")
//topNouns.push("assurance")
topNouns.push("realization")
topNouns.push("assertion")
topNouns.push("assumption")
topNouns.push("inkling")
topNouns.push("belief") 
topNouns.push("fact") 

	critical = [];

nounsAndVerbs = _.shuffle(nounsAndVerbs)

	for(i = 0; i < 12; i++) {
		addStimulus(critical, "SC_RC", "The "+topNouns[i]+" that "+nounsAndVerbs[i][0]+" who "+nounsAndVerbs[i][1], "CRITICAL_"+i)
	}
	

addStimulus(stims, "filler", "Carl admitted to Larissa the he had", "filler_12")
addStimulus(stims, "filler", "Every 20 minutes in the US a", "filler_14")
addStimulus(stims, "filler", "Four score and seven", "filler_16")
addStimulus(stims, "filler", "If I ever get another", "filler_3")
addStimulus(stims, "filler", "If you don't", "filler_6")
addStimulus(stims, "filler", "Outdoor games and picnics", "filler_5")
addStimulus(stims, "filler", "She drummed her fingers against the table as she", "filler_29")
addStimulus(stims, "filler", "The aviators gathered together at the library to", "filler_24")
addStimulus(stims, "filler", "The choir made a lot of noise in the back of the bus after", "filler_34")
addStimulus(stims, "filler", "The horses ran down the hill to the barn before", "filler_27")
addStimulus(stims, "filler", "The lumberjack sweated under the", "filler_35")
addStimulus(stims, "filler", "The old man phoned his younger sister to", "filler_40")
addStimulus(stims, "obj_ext_RC", "The bowler who the", "5_obj_ext_RC")
addStimulus(stims, "obj_ext_RC", "The paralegal who the", "4_obj_ext_RC")
addStimulus(stims, "obj_ext_RC", "The veterinarian who the", "1_obj_ext_RC")
addStimulus(stims, "sub_ext_RC", "The jockey who", "5_sub_ext_RC")
addStimulus(stims, "sub_ext_RC", "The ranger who", "4_sub_ext_RC")
addStimulus(stims, "sub_ext_RC", "The voter who", "2_sub_ext_RC")




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


     fillersAndCritical = separatedShuffle(stims, critical);


     fullStimuli = _.shuffle(stimsTraining).concat(fillersAndCritical);
     console.log( fullStimuli.length);
     return fullStimuli;
     
}

