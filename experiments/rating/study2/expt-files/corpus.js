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
     for(var i=0; i<14; i++) {
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
nounsAndVerbs.push(["the principal",       "the teacher",        "criticized",                     "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.push(["the sculptor",        "the painter",        "admired",            "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.push(["the marketer",  "the artist",         "hired",                  "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.push(["the runner",         "the psychiatrist",       "treated",                "was doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.push(["the child",           "the medic",          "rescued",    "was unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.push(["the criminal",        "the officer",        "arrested",                  "was not guilty",             "was entirely bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.push(["the student",         "the professor",      "hated",                     "dropped the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.push(["the mobster",         "the media",          "portrayed",               "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.push(["the actor", 	         "the starlet",        "loved",                    "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.push(["the preacher",        "the parishioners",   "fired",                     "stole money",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.push(["the violinist",      "the sponsors",       "backed",                    "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.push(["the senator",        "the diplomat",       "opposed",                   "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs.push(["the commander",        "the president",       "appointed",   "was pushing for war",         "troubled people", "Did the XXXX trouble people?", "Y"])
nounsAndVerbs.push(["the victims",        "the criminal",       "assaulted",   "were going to survive",         "calmed everyone down", "Did the XXXX calm everyone down?", "Y"])
nounsAndVerbs.push(["the politician",        "the banker",       "supported",   "was laundering money",         "came as a shock to his supporters", "Did the XXXX come as a shock?", "Y"])
nounsAndVerbs.push(["the surgeon",        "the patient",       "annoyed",   "had a fake degree",         "was not a surprise", "Was the XXXX unsurprising?", "Y"])
nounsAndVerbs.push(["the extremist",        "the agent",       "tracked",                   "was going to get an award",         "was disconcerting", "Was the XXXX disconcerting?", "Y"])
nounsAndVerbs.push(["the clerk",        "the customer",       "called",   "was a super hero",         "seemed absurd", "Did the XXXX seem absurd?", "Y"])
nounsAndVerbs.push(["the trader",        "the businessman",       "consulted",   "acted on insider information",         "was confirmed", "Was the XXXX confirmed?", "Y"])
nounsAndVerbs.push(["the CEO",        "the employee",       "impressed",   "wanted to retire",         "was entirely correct", "Was the XXXX correct?", "Y"])
nounsAndVerbs.push(["the driver", "the tourist", "asked", "was lying", "seemed hard to believe", "", "Y"])
nounsAndVerbs.push(["the bookseller", "the thief", "robbed", "got a heart attack", "shocked his family", "", "Y"])
nounsAndVerbs.push(["the neighbor", "the woman", "distrusted", "killed her dog", "was a lie", "", "Y"])
nounsAndVerbs.push(["the scientist", "the mayor", "trusted", "had faked data", "was only a malicious smear", "", "Y"])
nounsAndVerbs.push(["the student", "the bully", "intimidated", "plagiarized his homework",  "devastated his parents", "", "Y"])
nounsAndVerbs.push(["the trickster", "the woman", "recognized", "was finally caught", "calmed people down", "", "Y"])
nounsAndVerbs.push(["the entrepreneur", "the philanthropist", "funded", "wasted the money", "came as a disappointment", "", "Y"])
nounsAndVerbs.push(["the lifesaver", "the swimmer", "called", "saved the children", "impressed the whole city", "", "Y"])


nounsAndVerbs = _.shuffle(nounsAndVerbs)

// can also make this a more balanced set
// but make sure it's the same number as the nouns+verbs
topNouns = []

topNouns.push("report")
topNouns.push("story")
topNouns.push("admission")
topNouns.push("declaration")
topNouns.push("disclosure")
topNouns.push("confirmation")
topNouns.push("remark")
topNouns.push("news")
topNouns.push("allegation")
topNouns.push("information")
topNouns.push("evidence")
topNouns.push("proof")
topNouns.push("finding")
topNouns.push("indication")



topNouns.push("claim")
topNouns.push("conclusion")
topNouns.push("suggestion")
topNouns.push("speculation")
topNouns.push("suspicion")
topNouns.push("revelation")
topNouns.push("presumption")
topNouns.push("assurance")
topNouns.push("realization")
topNouns.push("assertion")
topNouns.push("assumption")
topNouns.push("inkling")
topNouns.push("belief")
topNouns.push("fact")





	criticalStims = []

for(var w=0; w<28; w++) {
   processCritical(w , critical, conditionAssignment, w, topNouns[w], nounsAndVerbs[w])
}

     
     addStimulus(fillers, "filler", "filler", "Since when it storms, the grass gets wet, the landscaper can't cut the grass, the garden will be overgrown.", "Will the garden be cut?", "N")
     addStimulus(fillers, "filler", "filler", "The lecturer spoke to the man in the classroom wearing a blue suit which had good seating and blackboards.", "Was the man wearing a blue suit?", "Y") // Extraposition
     addStimulus(fillers, "filler", "filler", "The librarian delivered the books with many photographs to the building which depicted horses.", "Did the librarian deliver the books?", "Y") // Extraposition
     addStimulus(fillers, "filler", "filler", "The astronaut flew the spaceship with two tanks to the moon which were filled with fuel.", "Did the spaceship have three tanks?", "N") // Extraposition
     addStimulus(fillers, "filler", "filler", "The delivery man left the package with two labels on the porch which were printed with an address.", "Was the package left in the mailbox?", "N") // Extraposition
     addStimulus(fillers, "filler", "filler", "Jonathan will buy the red sports car as soon as he returns from his vacation in the Caribbean.", "Was Jonathan vacationing in the Caribbean?", "Y")
     addStimulus(fillers, "filler", "filler", "The soccer team easily defeated their opponents with an impressive show of speed, cleverness and tenacity.", "Did the soccer team defeat their opponents?", "Y")
     addStimulus(fillers, "filler", "filler", "When my father lived in Australia, he would often go surfing along the coastal waters of Melbourne.", "Did my father surf?", "Y")
     addStimulus(fillers, "filler", "filler", "The police officer will guard the crosswalk as the children pass by on the way to elementary school.", "Will the police officer guard the crosswalk?", "Y")
     addStimulus(fillers, "filler", "filler", "The board of directors announced that the business acquisition strategy was proceeding as planned.", "Did the board of directors make an announcement?", "Y")
     addStimulus(fillers, "filler", "filler", "In 1945, Germany and Japan surrendered to the Allied forces, ending one of the bloodiest conflicts in history.", "Did Japan surrender to Germany?", "N")
     addStimulus(fillers, "filler", "filler", "Harvard University recently purchased a large tract of land to be used as a new boathouse for the rowing team.", "Did Stanford University purchase land?", "N")
     addStimulus(fillers, "filler", "filler", "Maple trees are classified as deciduous, whereas Norwegian pines are considered to be evergreen.", "Are maple and Norwegian pine trees classified similarly?", "N")
     addStimulus(fillers, "filler", "filler", "The two children walked slowly in front of their mother as they gradually approached the playground.", "Did the children run in front of their mother?", "N")
     addStimulus(fillers, "filler", "filler", "The city of San Francisco is considered an expensive place to live, as rental rates routinely approach thousands of dollars.", "Is San Francisco considered an inexpensive place to live?", "N")
     addStimulus(fillers, "filler", "filler", "The team decided that the strategy that the visitors from Arkansas that were known to be troublemakers had used to win the tournament was a form of cheating.", "Were the visitors from Arkansas known to be troublemakers?", "Y")
     addStimulus(fillers, "filler", "filler", "The man that drove the car that had the paint job that was peeling ran into a pedestrian.", "Did the man run into a pedestrian?", "Y")
     addStimulus(fillers, "filler", "filler", "When the boat reached the shore Philip tried to start the engine and escape from the soldiers.", "Did Philip try to escape from the soldiers?", "Y")
     addStimulus(fillers, "filler", "filler", "Because if when the baby is crying, the mother gets upset, the father will help, the grandmother can rest easily.", "Will the father help?", "Y")
     addStimulus(fillers, "filler", "filler", "The professor said that the student that the committee that was visiting picked would present at the conference.", null, null)
     addStimulus(fillers, "filler", "filler", "The student petitioned the instructor about the college who was writing a thesis on Philosophy.", null, null)
     addStimulus(fillers, "filler", "filler", "The parent called the teacher about the class who was giving bad grades to foreign students.", "Were foreign students given good grades?", "N")
     addStimulus(fillers, "filler", "filler", "The neighbor approached the owner about the dog who was building a doghouse over the property line.", null, null)
     addStimulus(fillers, "filler", "filler", "The policeman questioned the driver about the bus who was directing tourists to the restricted ruins.", null, null)
     addStimulus(fillers, "filler", "filler", "The chairman consulted the executive about the company who was playing golf at the country club.", null, null)
     addStimulus(fillers, "filler", "filler", "The republican challenged the president about the nation who was elected by the left-wing opposition.", null, null)
     addStimulus(fillers, "filler", "filler", "The reporter approached the victim about the attack who was injured by the suicide bomber.", null, null)
     addStimulus(fillers, "filler", "filler", "The principal questioned the member about the clique who was mouthing off to teachers.", null, null)
     addStimulus(fillers, "filler", "filler", "The homeowner consulted the architect about the house who was worried about being behind schedule.", null, null)
     addStimulus(fillers, "filler", "filler", "The sportscaster interviewed the captain about the team who was leading his team to the championship.", null, null)
     addStimulus(fillers, "filler", "filler", "The colonel cautioned the commander about the platoon who was ordering the troops to continue fighting.", null, null)
     addStimulus(fillers, "filler", "filler", "The critic complimented the director about the play who was asked to write the screenplay.", null, null)
     addStimulus(fillers, "filler", "filler", "The salesman called the buyer about the rifle who was looking for antiques from the war.", null, null)
     addStimulus(fillers, "filler", "filler", "The activist petitioned the sponsor about the bill who was speaking out against immigration.", null, null)
     addStimulus(fillers, "filler", "filler", "The officer cautioned the driver about the explorer who was talking on the phone while driving.", null, null)
     addStimulus(fillers, "filler", "filler", "The scientist challenged the inventor about the drug who was claiming to have found a cure for cancer.", null, null)
     addStimulus(fillers, "filler", "filler", "The host complimented the author about the book who was being interviewed on all the talk shows.", null, null)


     addStimulus(fillers, "filler", "filler", "Ron gave the letter to Nancy to the postman.", null, null) // (Gibson 1991)
     addStimulus(fillers, "filler", "filler", "The cook placed the cake in the oven onto the table.", null, null) // (Gibson 1991)

     // Obviously bad/weird
     addStimulus(fillers, "filler", "filler", "Pat and Kim walks together in the park every Thursday afternoon.", null, null)
     addStimulus(fillers, "filler", "filler", "The child ate a bowl of international trade for breakfast.", null, null)
     addStimulus(fillers, "filler", "filler", "The book read the little girl.", null, null)
     addStimulus(fillers, "filler", "filler", "The cook baked a cake Lucy.", null, null)
     addStimulus(fillers, "filler", "filler", "Onto the cat jumped a table as Mary entered the room.", "Did Mary enter the room?", "Y")
     addStimulus(fillers, "filler", "filler", "The guest ate with a giant spoon the broccoli.", "Did the guest use a fork?", "N")


     // from Vasishth et al 2010
     addStimulus(fillers, "filler", "filler", "The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands.", null, null)
     addStimulus(fillers, "filler", "filler", "The company was sure that its new product, which its researchers had developed, would soon be sold out.", null, null)
     addStimulus(fillers, "filler", "filler", "The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate.", null, null)
     addStimulus(fillers, "filler", "filler", "The hippies who the police at the concert arrested complained to the officials while the last act was going on stage.", null, null)
     addStimulus(fillers, "filler", "filler", "The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape.", null, null)


     addStimulus(fillers, "filler", "filler", "The dog walked to the park was chasing the squirrel.", "Was the dog chasing the squirrel?", "Y") //(Gibson 1991)
     addStimulus(fillers, "filler", "filler", "John gave the boy the dog bit a dollar.", "Did the boy bite John?", "N") // (Gibson 1991)
     addStimulus(fillers, "filler", "filler", "The coach smiled at the player tossed a frisbee.", "Was the coach smiling?", "Y") 
     addStimulus(fillers, "filler", "filler", "Because he always jogs a mile seems a short distance to him.", null, null)


     addStimulus(fillers, "filler", "filler", "Because if Steven checks the mail, he doesn't wear his robe, Steven's neighbors complain.", "Does Steven complain?", "N") //(Gibson 1991)

     addStimulus(fillers, "filler", "filler", "Yesterday, a patient complained who had missed his noon appointment so the doctor agreed to see him early tomorrow.", null, null)
     addStimulus(fillers, "filler", "filler", "This morning, a manager stayed who is rarely in the office so the employees were very well behaved.", null, null)
     addStimulus(fillers, "filler", "filler", "The reporter interviewed the actors about the movie.", "Did the reporter interview the actors?", "Y")
     addStimulus(fillers, "filler", "filler", "The student petitioned the professors regarding the course.", null, null)
     addStimulus(fillers, "filler", "filler", "The agent approached the publicists about the photo-shoot.", null, null)
     addStimulus(fillers, "filler", "filler", "The socialite praised the hostesses for the party which was held yesterday in a luxurious ballroom.", "Was the party held in a ballroom?", "Y")
     addStimulus(fillers, "filler", "filler", "The publisher complimented the editors on the magazine.", null, null)
     addStimulus(fillers, "filler", "filler", "The counselor consoled the students about the competition.", null, null)
addStimulus(fillers, "filler", "filler", "The locksmith can crack the safe easily.", null, null)
addStimulus(fillers, "filler", "filler", "Dinosaurs ate other reptiles during the stone age.", null, null)
addStimulus(fillers, "filler", "filler", "The private tutor explained the assignment carefully.", null, null)
addStimulus(fillers, "filler", "filler", "The showman travels to different cities every month.", "Does the showman stay in the same city throughout the year?", "N")
addStimulus(fillers, "filler", "filler", "The photographer processed the film on time.", "Did the photographer process the film?", "Y")
addStimulus(fillers, "filler", "filler", "The office-worker worked through the stack of files on his desk quickly, which had been piling up for weeks.", null, null)
addStimulus(fillers, "filler", "filler", "The teacher doubted that the test that had taken him a long time to design would be easy to answer, but the students proved him wrong.", "Was the test easy to answer?", "Y")
addStimulus(fillers, "filler", "filler", "The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient.", "Was the new plan convenient?", "N")
addStimulus(fillers, "filler", "filler", "The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider.", "Did the dog scare the spider?", "N")
addStimulus(fillers, "filler", "filler", "The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room.", null, null)
addStimulus(fillers, "filler", "filler", "The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints.", null, null)
addStimulus(fillers, "filler", "filler", "The driver who the police arrested ran a light because he was under the influence of alcohol.", "Did the police let the driver go?", "N")
addStimulus(fillers, "filler", "filler", "The casino hired the daredevil because he was confident that everything would go according to plan.", "Did the casino hire the daredevil?", "Y")
addStimulus(fillers, "filler", "filler", "The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it.", null, null)
addStimulus(fillers, "filler", "filler", "The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt.", "Did the fireman consider the arsonist innocent?", "N")
addStimulus(fillers, "filler", "filler", "The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper.", null, null)
addStimulus(fillers, "filler", "filler", "The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees.", "Was there a new dress code?", "Y")
addStimulus(fillers, "filler", "filler", "The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater.", null, null)
addStimulus(fillers, "filler", "filler", "The trainee knew that the task which the director had set for him was impossible to finish within a week.", "Was it possible to finish the task within a week?", "N")
addStimulus(fillers, "filler", "filler", "The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room.", null, null)
addStimulus(fillers, "filler", "filler", "The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain.", "Did someone question the coroner?", "Y")
addStimulus(fillers, "filler", "filler", "The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home.", "Did the demonstrators support the environmentalist?", "Y")
addStimulus(fillers, "filler", "filler", "The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank.", "Was there a potential leak in the tank?", "Y")
addStimulus(fillers, "filler", "filler", "The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help.", "Did the philosopher baffle the mathematician?", "N")


     practice = [];
     addStimulus(practice, "filler", "filler", "The principal criticized the instructors of the program.", null, null)
     addStimulus(practice, "filler", "filler", "The socialite praised the hostess about the party who was preparing a fresh batch of punch.", null, null)
     addStimulus(practice, "filler", "filler", "The florist sent the flowers on the table to the boy that were very expensive.", "Did the boy send flowers?", "N")

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

     fillersAndCritical = separatedShuffle(fillers, critical);

     fullStimuli = _.shuffle(practice).concat(fillersAndCritical);
console.log(fillers.length, critical.length);
console.log(fillersAndCritical.length);
     console.log( fullStimuli);
     return fullStimuli;
     
}

