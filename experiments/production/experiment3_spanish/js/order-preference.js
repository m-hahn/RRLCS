



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











  slides.multi_slider_context = slide({
    name : "multi_slider_context",
    present : stimuliContext,
    present_handle : function(stim) {
      console.log(stim);
      $(".err").hide();
      //$(".err2").hide();
      this.init_sliders();
      exp.sliderPost = null;
      this.stim = stim; //FRED: allows you to access stim in helpers

      $(".first-sentence").html(stim.sent1);

      $(".second-sentence").html(stim.sent2);
      console.log("DONE PRESENTING");
      document.getElementById("completion").value = "";

    },

    button : function() {
    	//console.log(exp.sliderPost);
      textBox = document.getElementById("completion").value;
      console.log(textBox);
      if (textBox != "") {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }
    },

    init_sliders : function() {
      utils.make_slider("#slider0_ctxt", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
    log_responses : function() {
        //console.log(this.stim.condition);
	dataForThisTrial = {
          "completion" : document.getElementById("completion").value,
          "sentence1" : this.stim.sent1,
          "item" : this.stim.item,
          "condition" : this.stim.condition,
          "slide_number" : exp.phase
        };
        exp.data_trials.push(dataForThisTrial);
// upload to server (redacted)
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
          "system" : exp.system,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000,
	  "ProlificURL" : window.location.href
      };

	    // TURK
//      setTimeout(function() {turk.submit(exp.data);}, 1000);


	    //      PROLIFIC
	    //      REDACTED

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

exp.startT = Date.now();
  exp.go(); //show first slide
}
