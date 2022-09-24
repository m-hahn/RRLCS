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






var stimuliContext =  makeStimsContext();




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
		      "question" : question,
		      "answer" : answer
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
     for(var i=0; i<6; i++) {
	if(Math.random() > 0.5) {
     	   conditionAssignment.push(2)
     	   conditionAssignment.push(0)
	} else {
     	   conditionAssignment.push(0)
     	   conditionAssignment.push(2)
	}
     }
     console.log(conditionAssignment); 
    

nounsAndVerbs = []
nounsAndVerbs.push(["the school principal",       "the teacher",        "had an affair with",                     "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.push(["the famous sculptor",        "the painter",        "admired more than anyone",            "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.push(["the marketing whiz",  "the artist",         "had hired",                  "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.push(["the marathon runner",         "the psychiatrist",       "treated for his illness",                "was actually doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.push(["the frightened child",           "the medic",          "rescued from the flood",    "was completely unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.push(["the alleged criminal",        "the officer",        "arrested after the murder",                  "was not in fact guilty",             "was bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.push(["the college student",         "the professor",      "accused of cheating",                     "was dropping the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.push(["the suspected mobster",         "the media",          "portrayed in detail",               "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.push(["the leading man", 	         "the starlet",        "fell in love with",                    "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.push(["the old preacher",        "the parishioners",   "fired yesterday",                     "stole money from the church",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.push(["the young violinist",      "the sponsors",       "backed financially",                    "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.push(["the conservative senator",        "the diplomat",       "opposed in the election",                   "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs = _.shuffle(nounsAndVerbs)

// can also make this a more balanced set
// but make sure it's the same number as the nouns+verbs
topNouns = []
topNouns.push("report")      
topNouns.push("story")       
topNouns.push("disclosure")
topNouns.push("confirmation")    // was: myth
topNouns.push("information")
topNouns.push("evidence") 
topNouns.push("reminder")    
topNouns.push("rumor")      
topNouns.push("thought")
topNouns.push("suggestion")
topNouns.push( "revelation")      // was: fact
topNouns.push( "belief")  



criticalStims = []

// Prepare Critical Items


processCritical(0 , critical, conditionAssignment, 3, topNouns[0], nounsAndVerbs[0])
processCritical(1 , critical, conditionAssignment, 8, topNouns[1], nounsAndVerbs[1])
processCritical(2 , critical, conditionAssignment, 1, topNouns[2], nounsAndVerbs[2])
processCritical(3 , critical, conditionAssignment, 4, topNouns[3], nounsAndVerbs[3])
processCritical(4 , critical, conditionAssignment, 7, topNouns[4], nounsAndVerbs[4])
processCritical(5 , critical, conditionAssignment, 6, topNouns[5], nounsAndVerbs[5])
processCritical(6 , critical, conditionAssignment, 0, topNouns[6], nounsAndVerbs[6])
processCritical(7 , critical, conditionAssignment, 2, topNouns[7], nounsAndVerbs[7])
processCritical(8 , critical, conditionAssignment, 5, topNouns[8], nounsAndVerbs[8])
processCritical(9 , critical, conditionAssignment, 9, topNouns[9], nounsAndVerbs[9])
processCritical(10 , critical, conditionAssignment, 10, topNouns[10], nounsAndVerbs[10])
processCritical(11 , critical, conditionAssignment, 11, topNouns[11], nounsAndVerbs[11])


     
///////////////////
// Fillers     
     addStimulus(fillers, "filler", "filler", "Since when it storms, the grass gets wet, the landscaper can't cut the grass, the garden will be overgrown.", "Will the garden be cut?", "N")
     addStimulus(fillers, "filler", "filler", "The astronaut flew the spaceship with three tanks to the moon which were filled with fuel.", "Did the spaceship have two tanks?", "N")
     addStimulus(fillers, "filler", "filler", "The delivery man left the package with two labels on the porch which were printed with an address.", "Was the package left in the mailbox?", "N")
     addStimulus(fillers, "filler", "filler", "In 1945, Germany and Japan surrendered to the Allied forces, ending one of the bloodiest conflicts in history.", "Did Japan surrender to Germany?", "N")
     addStimulus(fillers, "filler", "filler", "Harvard University recently purchased a large tract of land to be used as a new boathouse for the rowing team.", "Did Stanford University purchase land?", "N")
     addStimulus(fillers, "filler", "filler", "Maple trees are classified as deciduous, whereas Norwegian pines are considered to be evergreen.", "Are maple and Norwegian pine trees classified similarly?", "N")
     addStimulus(fillers, "filler", "filler", "The two children walked slowly in front of their mother as they gradually approached the playground.", "Did the children run in front of their mother?", "N")
     addStimulus(fillers, "filler", "filler", "The city of San Francisco is considered an expensive place to live, as rental rates routinely approach thousands of dollars.", "Is San Francisco considered an inexpensive place to live?", "N")
     addStimulus(fillers, "filler", "filler", "The professor said that the student that the committee that was visiting picked would present at the conference.", "Will the professor present?", "N")
     addStimulus(fillers, "filler", "filler", "The parent called the teacher about the class who was giving bad grades to foreign students.", "Did the teacher call the parent?", "N")
     addStimulus(fillers, "filler", "filler", "The policeman questioned the driver about the bus who was directing tourists to the restricted ruins.", "Did the policeman question the tourist?", "N")
     addStimulus(fillers, "filler", "filler", "The republican challenged the president about the nation who was elected by the left-wing opposition.", "Did the president challenge the republican?", "N")
     addStimulus(fillers, "filler", "filler", "The principal questioned the member about the clique who was mouthing off to teachers.", "Was the clique mouthing off the principal?", "N")
     addStimulus(fillers, "filler", "filler", "The colonel cautioned the commander about the platoon who was ordering the troops to continue fighting.", "Did the colonel encourage the troops to fight?", "N")
     addStimulus(fillers, "filler", "filler", "The critic complimented the director about the play who was asked to write the screenplay.", "Did the critic criticize the actor?", "N")
     addStimulus(fillers, "filler", "filler", "The salesman called the buyer about the rifle who was looking for antiques from the war.", "Did the salesman call the seller?", "N")
     addStimulus(fillers, "filler", "filler", "The activist petitioned the sponsor about the bill who was speaking out against immigration.", "Was someone speaking out against tax cuts?", "N")
     addStimulus(fillers, "filler", "filler", "The officer cautioned the driver about the explorer who was talking on the phone while driving.", "Did the officer caution the explorer?", "N")
     addStimulus(fillers, "filler", "filler", "The scientist challenged the inventor about the drug who was claiming to have found a cure for cancer.", "Had the scientist found a cure for cancer?", "N")
     addStimulus(fillers, "filler", "filler", "The host complimented the author about the book who was being interviewed on all the talk shows.", "Was the editor asked about the book?", "N")
     addStimulus(fillers, "filler", "filler", "Yesterday, a patient complained who had missed his noon appointment so the doctor agreed to see him early tomorrow.", "Did the patient miss his appointment today?", "N")
     addStimulus(fillers, "filler", "filler", "This morning, a manager stayed who is rarely in the office so the employees were very well behaved.", "Is the manager usually in the office?", "N")
     addStimulus(fillers, "filler", "filler", "The student petitioned the professors regarding the course.", "Did the student petition regarding the exam?", "N")
     addStimulus(fillers, "filler", "filler", "The publisher complimented the editors on the magazine.", "Did the publishers compliment the authors?", "N")
     addStimulus(fillers, "filler", "filler", "The counselor consoled the students about the competition.", "Did the counselor console the professors?", "N")
     addStimulus(fillers, "filler", "filler", "The student petitioned the instructor about the college who was writing a thesis on Philosophy.", "Did the instructor petition about the college?", "N")

     addStimulus(fillers, "filler", "filler", "The homeowner consulted the architect about the house who was worried about being behind schedule.", "Was the architect consulted by the homeowner?", "Y")
     addStimulus(fillers, "filler", "filler", "The sportscaster interviewed the captain about the team who was leading his team to the championship.", "Was the captain interviewed by the sportscaster?", "Y")
     addStimulus(fillers, "filler", "filler", "The neighbor approached the owner about the dog who was building a doghouse over the property line.", "Was a doghouse being built?", "Y")
     addStimulus(fillers, "filler", "filler", "The chairman consulted the executive about the company who was playing golf at the country club.", "Was someone playing golf at the country club?", "Y")
     addStimulus(fillers, "filler", "filler", "The reporter approached the victim about the attack who was injured by the suicide bomber.", "Was someone injured by a bomber?", "Y")
     addStimulus(fillers, "filler", "filler", "The agent approached the publicists about the photo-shoot.", "Did the agent approach the publicists?", "Y")
     addStimulus(fillers, "filler", "filler", "The socialite praised the hostesses for the party which was held yesterday in a luxurious ballroom.", "Was the party held in a ballroom?", "Y")
     addStimulus(fillers, "filler", "filler", "The reporter interviewed the actors about the movie.", "Did the reporter interview the actors?", "Y")
      addStimulus(fillers, "filler", "filler", "Jonathan will buy the red sports car from the dealer as soon as he returns from his vacation in the Caribbean.", "Was Jonathan vacationing in the Caribbean?", "Y")
     addStimulus(fillers, "filler", "filler", "When my father lived in Australia, he would often go surfing along the coastal waters of Melbourne.", "Did my father surf?", "Y")
      addStimulus(fillers, "filler", "filler", "The soccer team easily defeated their opponents with an impressive show of speed, cleverness and tenacity.", "Did the soccer team defeat their opponents?", "Y")
      addStimulus(fillers, "filler", "filler", "The police officer will guard the crosswalk as the children pass by on the way to elementary school.", "Will the police officer guard the crosswalk?", "Y")
     addStimulus(fillers, "filler", "filler", "The board of directors announced that the business acquisition strategy was proceeding as planned.", "Did the board of directors make an announcement?", "Y")
 	addStimulus(fillers, "filler", "filler", "The lecturer spoke to the man in the classroom wearing a blue suit which had good seating and blackboards.", "Was the man wearing a blue suit?", "Y")
     addStimulus(fillers, "filler", "filler", "The librarian delivered the books with many photographs to the building which depicted horses.", "Did the librarian deliver the books?", "Y")

     addStimulus(fillers, "filler", "filler", "The team decided that the strategy that the visitors from Arkansas that were known to be troublemakers had used to win the tournament was a form of cheating.", "Were the visitors from Arkansas known to be troublemakers?", "Y")
     addStimulus(fillers, "filler", "filler", "The man that drove the car that had the paint job that was peeling ran into a pedestrian.", "Did the man run into a pedestrian?", "Y")
     addStimulus(fillers, "filler", "filler", "When the boat on the shore Philip reached try to start the engine and escape from the soldiers he did.", "Did Philip try to escape from the soldiers?", "Y")
     addStimulus(fillers, "filler", "filler", "Because if when the baby is crying, the mother gets upset, the father will help, the grandmother can rest easily.", "Will the father help?", "Y")


     practice = [];
     addStimulus(practice, "filler", "filler", "The principal criticized the instructors for the program.", "Did the principal criticize the instructors?", "Y")
     addStimulus(practice, "filler", "filler", "The socialite praised the hostess about the party who was preparing a fresh batch of punch.", "Was the hostess preparing a cake?", "N")
     addStimulus(practice, "filler", "filler", "The florist sent the flowers on the table to the boy that were very expensive.", "Did the boy send flowers?", "N")


     fullStimuli = _.shuffle(practice).concat(_.shuffle(fillers.concat(critical)));
     console.log( fullStimuli);
     return fullStimuli;
     
}

