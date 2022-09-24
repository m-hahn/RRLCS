



function make_slides(f) {
  var   slides = {};

  slides.consent = slide({
     name : "consent",
     start: function() {
      exp.startT = Date.now();
      $("#consent_2").hide();
      exp.consent_position = 0;      
     },
    button : function() {
        exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });



  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    start: function() {
      $(".instruction_condition").html("Between subject intruction manipulation: "+ exp.instruction);
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.instructions2 = slide({
    name : "instructions2",
    start: function() {
      $(".instruction_condition").html("Between subject intruction manipulation: "+ exp.instruction);
         $(".err").hide();
    }, 
    button : function() {
     var radio_button_list = document.getElementsByName('rating2');
     console.log(radio_button_list);
     var radio_button;
     var count;
	   rating = ""
     for(count = 0; count<radio_button_list.length; count++) {
	     if(radio_button_list[count].checked) {
		     rating = count+1;
	     }
     };
     if(rating == 1) { 
         exp.go(); //use exp.go() if and only if there is no "present" data.
     } else {
         $(".err").show();

     }
    }
  });



  slides.instructions3 = slide({
    name : "instructions3",
    start: function() { 
	    $(".err").hide();
    }, 
    button : function() {
       var radio_button_list = document.getElementsByName('rating3');
       console.log(radio_button_list);
       var radio_button;
       var count;
         rating = ""
       for(count = 0; count<radio_button_list.length; count++) {
           if(radio_button_list[count].checked) {
                   rating = count+1;
           }
       };
       if(rating == 2) { 
           exp.go(); //use exp.go() if and only if there is no "present" data.
       } else {
           $(".err").show();
    
       }
    }
  });

  slides.instructions4 = slide({
    name : "instructions4",
    start: function() { 
    	    $(".err").hide();
    }, 
    button : function() {
       var radio_button_list = document.getElementsByName('rating4');
       console.log(radio_button_list);
       var radio_button;
       var count;
         rating = ""
       for(count = 0; count<radio_button_list.length; count++) {
           if(radio_button_list[count].checked) {
                   rating = count+1;
           }
       };
       if(rating == 4 | rating == 5) { 
           exp.go(); //use exp.go() if and only if there is no "present" data.
       } else {
           $(".err").show();
    
       }
    }
  });





  slides.multi_slider_context = slide({
    name : "multi_slider_context",
    present : stimuliContext,
    present_handle : function(stim) {
      console.log(stim);
      $(".err").hide();
      $(".wrong").hide();

      //$(".err2").hide();
      this.init_sliders();
      exp.sliderPost = null;
      this.stim = stim; //FRED: allows you to access stim in helpers

      $(".first-sentence").html(stim.sentence);

      $(".question").html(stim.question);


      console.log("DONE PRESENTING");
//      document.getElementById("completion").value = "";

     var radio_button_list = document.getElementsByName('response');
     var radio_button;
     var count;
     for(count = 0; count<radio_button_list.length; count++) {
       radio_button_list[count].checked = false;
     };    
     var radio_button_list = document.getElementsByName('rating');
     console.log(radio_button_list);
     var radio_button;
     var count;
     for(count = 0; count<radio_button_list.length; count++) {
       radio_button_list[count].checked = false;
     };
   


     document.getElementById("sentence_div").style.display = "block"; 
     document.getElementById("question_div").style.display = "none"; 
   


    },

    button : function() {
      $(".err").hide();
       if(document.getElementById("sentence_div").style.display == "none" & document.getElementById("question_div").style.display == "none") {
            this.log_responses();
           _stream.apply(this); //use exp.go() if and only if there is no "present" data.
	   action = "NONE"
        } else if(this.stim.question != null & document.getElementById("sentence_div").style.display == "block") {
           action = "moveToQuestion"
       } else  if(this.stim.question != null & document.getElementById("sentence_div").style.display == "none") {
           action = "end_fromQ"
       } else if(this.stim.question == null) {
           action = "end_fromS"
       }
        if(action == "moveToQuestion" | action == "end_fromS") {

		hasValue = false;
     var radio_button_list = document.getElementsByName('rating');
     console.log(radio_button_list);
     var radio_button;
     var count;
     for(count = 0; count<radio_button_list.length; count++) {
       if(radio_button_list[count].checked) {
	       hasValue= true;
       }
     };
 


                if(!hasValue) {
                   $(".err").show();
        } else {
            if(action == "end_fromS") {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
        }
            else {
               document.getElementById("sentence_div").style.display = "none"; 
               document.getElementById("question_div").style.display = "block"; 
            }}
        } else if(action == "end_fromQ") {
		hasValue = false;
     var radio_button_list = document.getElementsByName('response');
     console.log(radio_button_list);
     var radio_button;
     var count;
     response = null;
     for(count = 0; count<radio_button_list.length; count++) {
       if(radio_button_list[count].checked) {
	       hasValue= true;
	       response = radio_button_list[count].value;
       }
     };
                 if(!hasValue) {
                   $(".err").show();
		 } else if(response != this.stim.answer) {
                   $(".wrong").show();
                   document.getElementById("question_div").style.display = "none"; 
        } else {
            this.log_responses();
            _stream.apply(this); //use exp.go() if and only if there is no "present" data.
        }

        }
    },

    init_sliders : function() {
      utils.make_slider("#slider0_ctxt", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
    log_responses : function() {
        //console.log(this.stim.condition);
	   if(this.stim.question != null) {
             answer = document.querySelector('input[name="response"]:checked').value;
		   correct_answer = this.stim.answer;
	   } else {
             answer = "NA";
		   correct_answer = "NA";
	   }
        exp.data_trials.push({
          "sentence" : this.stim.sentence,
          "item" : this.stim.item,
          "condition" : this.stim.condition,
          "correct_answer" : correct_answer,
          "given_answer" : answer,
          "rating" : document.querySelector('input[name="rating"]:checked').value,
          "slide_number" : exp.phase
        });
    },
  });




  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
//        colorblind : $("#colorblind").val(),
        comments : $("#comments").val(),
        suggested_pay : $("#suggested_pay").val(),
        condition : exp.condition,
        adjective1 : adjectives[0],
        adjective2 : adjectives[1],
        context_first : exp.context_first,
        tutorial : exp.tutorial,
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          //"condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000,
	  "experiment": "forgetting-rating-49",
	  "ProlificURL" : window.location.href
      };

	    // TURK
//      setTimeout(function() {turk.submit(exp.data);}, 1000);


	    //      PROLIFIC
// UPLOAD Prolific
    }
  });

  return slides;
}

/// init ///
function init() {
repeatWorker = false;

  exp.current_score_click = 0;
  exp.total_quiz_trials_click = 0;

  exp.current_score = 0;
  exp.total_quiz_trials = 0;
  exp.hasDoneTutorialRevision = false;
  exp.shouldDoTutorialRevision = false;
  exp.hasEnteredInterativeQuiz = false;

  exp.trials = [];
  exp.catch_trials = [];
  exp.instruction = _.sample(["instruction1","instruction2"]);
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
   exp.structure=[];
exp.structure.push('i0')
exp.structure.push('consent')
exp.structure.push( 'instructions1')
exp.structure.push( 'instructions2')
exp.structure.push( 'instructions3')
exp.structure.push( 'instructions4')

   exp.structure.push( 'multi_slider_context')

exp.structure.push( 'subj_info')
exp.structure.push( 'thanks');


  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

      exp.order_questionnaires = _.sample([[0,1],[1,0]])


  exp.go(); //show first slide
}
