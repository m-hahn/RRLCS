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


addStimulus(stimsTraining, "filler", "Annabelle war generell gegen", "filler")
addStimulus(stimsTraining, "filler", "Der Sohn des Gärtners erhielt ein Stipendium, deshalb", "filler")
addStimulus(stimsTraining, "filler", "Als Frank aufwachte, erinnerte er sich", "filler")



addStimulus(stims, "RC_RC_an", "Der Anwalt, den der Richter, der", "2_RC_RC_an")
addStimulus(stims, "RC_RC_an", "Der Reporter, den der Professor, der", "1_RC_RC_an")
addStimulus(stims, "RC_RC_an", "Der Kellner, den der Kunde, der", "3_RC_RC_an")
addStimulus(stims, "RC_RC_inan", "Die Ballade, die der Sänger, der", "2_RC_RC_inan")
addStimulus(stims, "RC_RC_inan", "Das Manuskript, das der Schriftsteller, der", "1_RC_RC_inan")
addStimulus(stims, "RC_RC_inan", "Der Stift, den der Zahnarzt, der", "6_RC_RC_inan")





nounsAndVerbs = []
nounsAndVerbs.push(["der Schulleiter",       "den der Lehrer",        "den der Bäcker",       "der",              "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.push(["der Bildhauer",        "den die Anwältin",        "die die Richterin",      "die",      "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.push(["der Marketingspezialist",  "den die Künstlerin",         "die die Malerin",         "die",         "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.push(["der Marathonläufer",         "den der Psychiater",       "den die Patientin",       "der",         "was actually doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.push(["das Kind",           "das der Sanitäter",          "den das Opfer", "der",   "was completely unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.push(["der Kriminelle",        "den der Polizist",        "den der Spion",       "der",           "was not in fact guilty",             "was entirely bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.push(["der Student",         "den der Professor",      "den der Kollege",              "der",       "was dropping the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.push(["der Mafioso",         "den der Journalist",          "den die Informatikerin",        "der",       "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.push(["der Schauspieler", 	         "den der Star",        "den der Feuerwehrmann",         "der",           "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.push(["der Pfarrer",        "den das Gemeindemitglied",   "die der Gläubige",        "das",             "stole money from the church",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.push(["der Geigenspieler",      "den die Sponsoren",       "die der Tierarzt",          "die",          "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.push(["der Abgeordnete",        "den die Diplomatin",       "den die Botschafterin",       "die",            "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs.push(["der Kommandant",        "den der Präsident",       "den der Minister", "der",  "was pushing for war",         "troubled people", "Did the XXXX trouble people?", "Y"])
nounsAndVerbs.push(["das Opfer",        "das der Verbrecher",       "den der Gefangene",  "der", "were going to survive",         "calmed everyone down", "Did the XXXX calm everyone down?", "Y"])
nounsAndVerbs.push(["der Politiker",        "den der Banker",       "den der Investor", "der",  "was laundering money",         "came as a shock to his supporters", "Did the XXXX come as a shock?", "Y"])
nounsAndVerbs.push(["der Chirurg",        "den der Patient",       "den der Zahnarzt",  "der", "had a fake degree",         "was not a surprise", "Was the XXXX unsurprising?", "Y"])
nounsAndVerbs.push(["der Extremist",        "den der Agent",       "den der Polizist",        "der",           "was going to get an award",         "was disconcerting", "Was the XXXX disconcerting?", "Y"])
nounsAndVerbs.push(["der Büroangestellte",        "den der Kunde",       "den der Gast", "der",  "was a super hero",         "seemed absurd", "Did the XXXX seem absurd?", "Y"])
nounsAndVerbs.push(["der Händler",        "den der Unternehmer",       "den der Verkäufer",  "der", "acted on insider information",         "was confirmed", "Was the XXXX confirmed?", "Y"])
nounsAndVerbs.push(["der Chef",        "den der Angestellte",       "den der Praktikant",  "der", "wanted to retire",         "was entirely correct", "Was the XXXX correct?", "Y"])
nounsAndVerbs.push(["der Taxifahrer", "den der Tourist", "den der Kellner", "was lying", "der", "seemed hard to believe", "", "Y"])
nounsAndVerbs.push(["der Buchhändler", "den der Dieb", "den der Kriminelle", "der", "got a heart attack", "shocked his family", "", "Y"])
nounsAndVerbs.push(["der Nachbar", "den der Mann", "den der Handwerker", "der", "killed her dog", "was a lie", "", "Y"])
nounsAndVerbs.push(["der Wissenschaftler", "den der Bürgermeister", "den der Gemeinderat", "der", "had faked data", "was only a malicious smear", "", "Y"])
nounsAndVerbs.push(["der Junge", "den der Clown", "den der Schulleiter", "der", "plagiarized his homework",  "devastated his parents", "", "Y"])
nounsAndVerbs.push(["der Betrüger", "den die Frau", "die der Metzger", "die", "was finally caught", "calmed people down", "", "Y"])
nounsAndVerbs.push(["der Unternehmer", "den der Wohltäter", "den der Millionär", "der", "wasted everything on a yacht", "came as a disappointment", "", "Y"])
nounsAndVerbs.push(["der Lebensretter", "den der Schwimmer", "den der Tourist",  "der", "saved the drowning children", "impressed the whole city", "", "Y"])


nounsAndVerbs = _.shuffle(nounsAndVerbs)

topNouns = []

topNouns1 = [];
topNouns2 = [];

topNouns1.push('ie Klage')
topNouns1.push('er Zweifel')
topNouns1.push('er Bericht')
topNouns1.push('ie Kritik')
//topNouns.push('er Punkt')
//topNouns.push('ie Sicherheit')
topNouns1.push('ie Anordnung')
topNouns1.push('ie Entscheidung')
topNouns1.push('as Zeichen')
//topNouns.push('ie Schätzung')
topNouns1.push('ie Aufforderung')
topNouns1.push('ie Entdeckung')
topNouns1.push('er Beleg')
//topNouns.push('ie Idee')
//topNouns.push('ie Möglichkeit')
//topNouns.push('er Vorwurf')
//topNouns.push('ie Erfahrung')
//topNouns.push('ie Erklärung')
//topNouns.push('ie Bestätigung')
//topNouns.push('ie Spekulation')
//topNouns.push('ie Information')
//topNouns.push('ie Ankündigung')
//topNouns.push('er Glaube')
//topNouns.push('ie Andeutung')
//topNouns.push('er Gedanke')
//topNouns.push('ie Aussage')
//topNouns.push('Das Gefühl')
//topNouns.push('er Eindruck')
//topNouns.push('er Beweis')
//topNouns.push('er Verdacht')
//topNouns.push('Das Fazit')
//topNouns.push('ie Hoffnung')
//topNouns.push('ie Nachricht')
//topNouns.push('ie Behauptung')
//topNouns.push('Das Gerücht')
//topNouns.push('ie Mitteilung')
//topNouns.push('ie Wahrscheinlichkeit')
//topNouns.push('er Hinweis')
topNouns2.push('ie Mutmaßung')
topNouns2.push('ie Erkenntnis')
topNouns2.push('ie Feststellung')
topNouns2.push('ie Annahme')
topNouns2.push('ie Vermutung')
topNouns2.push('ie Befürchtung')
topNouns2.push('ie Ansicht')
topNouns2.push('ie Auffassung')
topNouns2.push('ie Überzeugung')
//topNouns.push('er Schluss')
topNouns2.push('ie Tatsache')





matrix = []
matrix.push("Lisa hat gesagt, dass ")
matrix.push("Klaus hat erzählt, dass ")
matrix.push("Ich habe gehört, dass ")
matrix.push("Hans hat behauptet, dass ")
matrix.push("Luigi hat gedacht, dass ")
matrix.push("Ibrahim hat gemeint, dass ")
matrix.push("Die Leute glauben, dass ")
matrix.push("Ich denke nicht, dass ")
matrix.push("Niemand denkt wirklich, dass ")
matrix.push("Vorher erfuhr Angela, dass ")
matrix.push("Peter sagte mir, dass ")
matrix.push("Gestern sagte Norbert, dass ")

matrix = _.shuffle(matrix);


topNouns1 = _.sample(topNouns1, 6);
topNouns2 = _.sample(topNouns2, 6);
topNouns = topNouns1.concat(topNouns2);

	console.log(topNouns);
console.log("TOP NOUNS");
	critical = [];

nounsAndVerbs = _.shuffle(nounsAndVerbs)

	for(i = 0; i < 12; i++) {
		addStimulus(critical, "SC_RC", matrix[i]+"d"+topNouns[i]+", dass "+nounsAndVerbs[i][0]+", "+nounsAndVerbs[i][1], "EMBEDDED_"+i)
	}
	

addStimulus(stims, "filler", "Karl gab gegenüber Larissa zu, dass er", "filler_12")
addStimulus(stims, "filler", "Alle 20 Minuten passiert in Deutschland", "filler_14")
addStimulus(stims, "filler", "Vor langer Zeit", "filler_16")
addStimulus(stims, "filler", "Wenn ich jemals noch einen", "filler_3")
addStimulus(stims, "filler", "Wenn du nicht", "filler_6")
addStimulus(stims, "filler", "Spiele und Picknicks im Freien", "filler_5")
addStimulus(stims, "filler", "Sie trommelte mit den Fingern auf den Tisch als sie", "filler_29")
addStimulus(stims, "filler", "Die Piloten trafen sich in der Bibliothek, um", "filler_24")
addStimulus(stims, "filler", "Der Chor machte im Bus vieln Lärm, nachdem", "filler_34")
addStimulus(stims, "filler", "Die Pferde liefen den Hügel herunter zum Stall, bevor", "filler_27")
addStimulus(stims, "filler", "Der Holzfäller schwitzte unter", "filler_35")
addStimulus(stims, "filler", "Der alte Mann rief seine Schwester an, um", "filler_40")
addStimulus(stims, "obj_ext_RC", "Der Fußballer, den", "5_obj_ext_RC")
addStimulus(stims, "obj_ext_RC", "Der Jurist, den", "4_obj_ext_RC")
addStimulus(stims, "obj_ext_RC", "Der Tierarzt, den", "1_obj_ext_RC")
addStimulus(stims, "sub_ext_RC", "Der Jockey, der", "5_sub_ext_RC")
addStimulus(stims, "sub_ext_RC", "Der Förster, der", "4_sub_ext_RC")
addStimulus(stims, "sub_ext_RC", "Der Wähler, der", "2_sub_ext_RC")




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
     console.log( fullStimuli);
     console.log( fullStimuli.length);
     return fullStimuli;
     
}

