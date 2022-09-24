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


addStimulus(stimsTraining, "filler", "Annabelle estaba generalmente en contra de", "filler")
addStimulus(stimsTraining, "filler", "El hijo del jardinero recibió una beca, por lo", "filler")
addStimulus(stimsTraining, "filler", "Cuando Frank despertó, se acordó", "filler")



addStimulus(stims, "RC_de_an", "El abogado que el juez de", "2_de_RC_an")
addStimulus(stims, "RC_de_an", "El reportero que el profesor de", "1_de_RC_an")
addStimulus(stims, "RC_de_an", "El camarero que el cliente del", "3_de_RC_an")
addStimulus(stims, "RC_de_inan", "La balada que el cantante de", "2_de_RC_inan")
addStimulus(stims, "RC_de_inan", "El manuscrito que el escritor de", "1_de_RC_inan")
addStimulus(stims, "RC_de_inan", "La pluma que el ortodoncista del", "6_de_RC_inan")





nounsAndVerbs = []
nounsAndVerbs.push(["el director",       "el profesor",        "had an affair with",                     "had been fired",                     "was quoted in the newspaper", "Was the XXXX quoted in the newspaper?", "Y"])
nounsAndVerbs.push(["el escultor",        "el pintor",        "admired more than anyone",            "wasn't talented",                    "was completely untrue", "Was the XXXX untrue?", "Y"])
nounsAndVerbs.push(["el vendedor",  "el artista",         "had hired",                  "was a fraud",                        "shocked everyone", "Did the XXXX shock everyone?", "Y"])
nounsAndVerbs.push(["el corredor",         "el psiquiatra",       "treated for his illness",                "was actually doping",            "was ridiculous", "Was the XXXX ridiculous?", "Y"])
nounsAndVerbs.push(["el niño",           "el médico",          "rescued from the flood",    "was completely unharmed",            "relieved everyone", "Did the XXXX relieve everyone?", "Y"])
nounsAndVerbs.push(["el criminal",        "el oficial",        "arrested after the murder",                  "was not in fact guilty",             "was entirely bogus", "Was the XXXX bogus?", "Y"])
nounsAndVerbs.push(["el estudiante",         "el profesor",      "accused of cheating",                     "was dropping the class",             "made the professor happy", "Did the XXXX make the professor happy?", "Y"])
nounsAndVerbs.push(["el mafioso",         "el periodista",          "portrayed in detail",               "was on the run",                     "turned out to be true", "Did the XXXX turn out to be true?", "Y"])
nounsAndVerbs.push(["el actor", 	         "la estrella",        "fell in love with",                    "would miss the show",                "almost made her cry", "Did the XXXX almost make her cry?", "Y"])
nounsAndVerbs.push(["el predicador",        "los feligreses",   "fired yesterday",                     "stole money from the church",        "proved to be true", "Did the XXXX prove to be true?", "Y"])
nounsAndVerbs.push(["el violinista",      "los patrocinadores",       "backed financially",                    "abused drugs",                       "is likely true", "Was the XXXX likely true?", "Y"])
nounsAndVerbs.push(["el senador",        "el diplomático",       "opposed in the election",                   "won in the run-off",                   "really made him angry", "Did the XXXX make him angry?", "Y"])
nounsAndVerbs.push(["el comandante",        "el presidente",       "appointed last month",   "was pushing for war",         "troubled people", "Did the XXXX trouble people?", "Y"])
nounsAndVerbs.push(["la víctima",        "el criminal",       "had assaulted",   "were going to survive",         "calmed everyone down", "Did the XXXX calm everyone down?", "Y"])
nounsAndVerbs.push(["el político",        "el banquero",       "gave thousands of dollars",   "was laundering money",         "came as a shock to his supporters", "Did the XXXX come as a shock?", "Y"])
nounsAndVerbs.push(["el cirujano",        "el paciente",       "accused of malpractice",   "had a fake degree",         "was not a surprise", "Was the XXXX unsurprising?", "Y"])
nounsAndVerbs.push(["el extremista",        "el agente",       "had just tracked down",                   "was going to get an award",         "was disconcerting", "Was the XXXX disconcerting?", "Y"])
nounsAndVerbs.push(["el empleado",        "el cliente",       "called on the phone",   "was a super hero",         "seemed absurd", "Did the XXXX seem absurd?", "Y"])
nounsAndVerbs.push(["el empresario",        "el comerciante",       "consulted for advice",   "acted on insider information",         "was confirmed", "Was the XXXX confirmed?", "Y"])
nounsAndVerbs.push(["el CEO",        "el empleado",       "impressed with his enthusiam",   "wanted to retire",         "was entirely correct", "Was the XXXX correct?", "Y"])
nounsAndVerbs.push(["el taxista", "el turista", "asked for directions", "was lying", "seemed hard to believe", "", "Y"])
nounsAndVerbs.push(["el librero", "el ladrón", "stole ten books from", "got a heart attack", "shocked his family", "", "Y"])
nounsAndVerbs.push(["el vecino", "la mujer", "shouted at yesterday", "killed her dog", "was a lie", "", "Y"])
nounsAndVerbs.push(["el científico", "el alcalde", "trusted with everything", "had faked data", "was only a malicious smear", "", "Y"])
//nounsAndVerbs.push(["el alumno", "the bully", "beat up every day", "plagiarized his homework",  "devastated his parents", "", "Y"])
nounsAndVerbs.push(["el embaucador", "la mujer", "recognized in the store", "was finally caught", "calmed people down", "", "Y"])
//nounsAndVerbs.push(["el jefe", "the philanthropist", "lent millions", "wasted everything on a yacht", "came as a disappointment", "", "Y"])
nounsAndVerbs.push(["el salvavidas", "el nadador", "called in desparation", "saved the drowning children", "impressed the whole city", "", "Y"])


nounsAndVerbs = _.shuffle(nounsAndVerbs)

topNouns = []

topNouns1 = []
topNouns2 = []

topNouns1.push('La historia')
topNouns1.push('El reporte')
topNouns1.push('La ficción')
topNouns1.push('La realidad')
topNouns1.push('El sueño')
topNouns1.push('La señal')
topNouns1.push('La información')
topNouns1.push('El reconocimiento')
topNouns1.push('La prueba')
//topNouns1.push('La impresion') // this is just a frequent typo in the corpus??!!
topNouns.push('El pensamiento')
//topNouns.push('El conocimiento')
//topNouns.push('El sentimiento')
//topNouns.push('La percepción')
//topNouns.push('La acusación')
//topNouns.push('El anuncio')
//topNouns.push('La demostración')
//topNouns.push('La confirmación')
//topNouns.push('La evidencia')
//topNouns.push('La noticia')
//topNouns.push('La posibilidad')
topNouns2.push('La impresión')
topNouns2.push('La sospecha')
topNouns2.push('La hipótesis')
topNouns2.push('La creencia')
topNouns2.push('La certeza')
topNouns2.push('La conclusión')
topNouns2.push('El rumor')
topNouns2.push('La convicción')
topNouns2.push('El convencimiento')
topNouns2.push('El hecho')







topNouns1 = _.sample(topNouns1, 6);
topNouns2 = _.sample(topNouns2, 6);
topNouns = topNouns1.concat(topNouns2);

	console.log(topNouns);

	critical = [];

nounsAndVerbs = _.shuffle(nounsAndVerbs)

	for(i = 0; i < 12; i++) {
		addStimulus(critical, "SC_RC", topNouns[i]+" de que "+nounsAndVerbs[i][0]+" que ", "MEDIUM_"+i)
	}
	

addStimulus(stims, "filler", "Carl admitió a Larissa que", "filler_12")
addStimulus(stims, "filler", "Cada 20 minutos, en España, un", "filler_14")
addStimulus(stims, "filler", "Hace mucho tiempo", "filler_16")
addStimulus(stims, "filler", "Si alguna vez consigo otro", "filler_3")
addStimulus(stims, "filler", "Si no lo haces", "filler_6")
addStimulus(stims, "filler", "Juegos al aire libre y picnics", "filler_5")
addStimulus(stims, "filler", "Ella golpeó los dedos contra la mesa como ella", "filler_29")
addStimulus(stims, "filler", "Los aviadores se reunieron en la biblioteca para", "filler_24")
addStimulus(stims, "filler", "El coro hizo mucho ruido en la parte trasera del autobús después de", "filler_34")
addStimulus(stims, "filler", "Los caballos corrieron por la colina hasta el granero antes de", "filler_27")
addStimulus(stims, "filler", "El leñador sudó bajo el", "filler_35")
addStimulus(stims, "filler", "El anciano llamó a su hermana menor a", "filler_40")
addStimulus(stims, "obj_ext_RC", "El jugador de bolos que el", "5_obj_ext_RC")
addStimulus(stims, "obj_ext_RC", "El asistente legal que el", "4_obj_ext_RC")
addStimulus(stims, "obj_ext_RC", "El veterinario que el", "1_obj_ext_RC")
addStimulus(stims, "sub_ext_RC", "El jinete que", "5_sub_ext_RC")
addStimulus(stims, "sub_ext_RC", "El guardabosques que", "4_sub_ext_RC")
addStimulus(stims, "sub_ext_RC", "El votante que", "2_sub_ext_RC")




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

