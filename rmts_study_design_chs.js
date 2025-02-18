const SKIP_ALLOWED = true; // TODO change back (here for debug purposes)
const BASE_DIR =
  "https://raw.githubusercontent.com/vivianhan404/rmts-replication/master";
const jsPsych = initJsPsych();
// const jsPsych = initJsPsych({
//   // TODO turn this on
//   extensions: [{ type: chsRecord.TrialRecordExtension }],
// });

let timeline = [];

// ===== HELPER FUNCTIONS ===============================================================================

function makeVideoTrial(video_name) {
  return {
    type: jsPsychVideoButtonResponse,
    stimulus: [`${BASE_DIR}/mp4/${video_name}`],
    width: 1024,
    height: 576,
    choices: ["NEXT"],
    button_html: (choice, choice_index) =>
      `<button class="jspsych-btn"><img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img></button>`,
    response_allowed_while_playing: SKIP_ALLOWED,
    // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
  };
}

// TODO fix formatting here
function makeChoiceTrial(video_name, left_button, right_button) {
  return {
    type: jsPsychVideoButtonResponse,
    stimulus: [`${BASE_DIR}/mp4/${video_name}`],
    width: 1024,
    height: 576,
    choices: ["0", "1"],
    button_html: (choice, choice_index) =>
      choice_index === 0
        ? `<button class="jspsych-btn" style="z-index: 10; margin-top: -550px; margin-right: 200px"><img src="${BASE_DIR}/img/${left_button}"  width="267" height="400"></img></button>`
        : `<button class="jspsych-btn" style="z-index: 10; margin-top: -550px; margin-left:  200px"><img src="${BASE_DIR}/img/${right_button}" width="267" height="400"></img></button>`,
    prompt:
      "PARENTS: please click the button your child points to if they are unable to click themselves",
    response_allowed_while_playing: SKIP_ALLOWED,
    // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
  };
}

// ===== SANDBOX =============================================================================

// ===== SETUP ===============================================================================

const videoConfig = {
  type: chsRecord.VideoConfigPlugin,
};
timeline.push(videoConfig);

// TODO fill this out
const videoConsent = {
  type: chsRecord.VideoConsentPlugin,
  PIName: "Laura Schulz",
  institution: "Massachussets Institute of Technology",
  PIContact: "Laura Schulz (contact: nhcoates@mit.edu)",
  payment:
    "After you finish the study, we will email you a $5 Amazon.com gift card within approximately a week from completing the study. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
  procedures:
    "",
  purpose:
    "",
  research_rights_statement:
    "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)",
};
timeline.push(videoConsent);

const instructions = [
  {
    type: jsPsychHtmlButtonResponse,
    stimulus:
      "This study requires your browser to be in Full Screen. Please put your browser in Full Screen mode now.",
    choices: ["Next"],
    button_html: (choice, choice_index) =>
      `<button class="jspsych-btn"><img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img></button>`,
  },
  {
    type: jsPsychHtmlButtonResponse,
    stimulus:
      "<font size = '4'>During this study your child will see 8 matching tasks.  <br><br>For each task, your child will be asked to pick the best match. They can point and you can click their answer, or they can click for themselves.  <br><br>Please do not add any additional explanations to the task, and try not to influence your child's answer.  <br><br>There is no right answer, we're just interested in how children of this age think!<br><br><br></font>",
    choices: ["Next"],
    button_html: (choice, choice_index) =>
      `<button class="jspsych-btn"><img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img></button>`,
  },
];
timeline = timeline.concat(instructions);

const startRec = {
  type: chsRecord.StartRecordPlugin,
};
timeline.push(startRec);

// ===== STIMULI ===========================================

const intro = [
    makeVideoTrial("nicole_intro.mp4"),
    makeVideoTrial("Movie1_Introduction.mp4"),
    makeVideoTrial("Movie2_Instructions.mp4"),
];
timeline = timeline.concat(intro);

// TODO?
// const warmup = [];
// timeline = timeline.concat(warmup);

const inclusiontrial1 = [
  makeVideoTrial("Movie3_Inclusion1_video.mp4"),
  // TODO movie 4
  makeVideoTrial("Movie5_LetsTryAnother.mp4"),
];
timeline = timeline.concat(inclusiontrial1);

const inclusiontrial2 = [
  makeVideoTrial("Movie6_Inclusion2_video.mp4"),
  // TODO movie 7
  makeVideoTrial("Movie8_LetsStart.mp4"),
];
timeline = timeline.concat(inclusiontrial2);

const more = [
  makeVideoTrial("Movie11_7more.mp4"),
  makeVideoTrial("Movie14_6more.mp4"),
  makeVideoTrial("Movie17_5more.mp4"),
  makeVideoTrial("Movie20_4more.mp4"),
  makeVideoTrial("Movie23_3more.mp4"),
  makeVideoTrial("Movie26_2more.mp4"),
  makeVideoTrial("Movie29_1more.mp4"),
  makeVideoTrial("Movie32_AllDone.mp4"),
];

// permute the trials, then add in the "great" transitions
// const trials = jsPsych.randomization.shuffle([
// ]);
// for (let i = 0; i < 6; i++) {
//   timeline = timeline.concat(trials[i]);
//   timeline.push(more[i]);
// }

// ===== WRAP UP ===============================================================================

const exitSurvey = { type: chsSurvey.ExitSurveyPlugin };
timeline.push(exitSurvey);

const site = '<a href="https://eccl.mit.edu">https://www.eccl.mit.edu</a>';
const debrief_string =
  "The goal of this study is to understand what visual features children use in combination with their background knowledge to identify the underlying structure of causes and effects. During the game you and your child played, we asked children about their intuitions about multiple different features: we asked whether they thought gardens that grew from different seeds might depend on the number of each type of seed in proportion to the number of other types of seeds, whether features of the seed like spots or shape might determine the shape or size of the flowers that they grew from, or whether the variety of seeds might have been sampled from one or multiple different populations of seeds." +
  "\nNone of the features have been tested before on children of this age, so we are interested in what your child's intuitions tell them about how these different stories are linked, rather than whether or not they chose what you might have considered to be the correct answer. By understanding which features are useful and intuitive to children, we can understand more about how they can use these rich features to draw connections between objects as a way to make sense of their world." +
  "\nThank you so much for participating! You will be emailed a $5 Amazon gift card within a week of participation, assuming you meet all eligibility requirements." +
  "\nIf you want to learn more about studies similar to this one, please visit our lab website at " +
  site +
  "\nThe experiment is complete. Please close this window.";
const debrief = {
  type: jsPsychHtmlButtonResponse,
  stimulus: debrief_string,
  // width: 1024,
  // height: 576,
  choices: ["End"],
};
timeline.push(debrief);

const stop = {
  type: chsRecord.StopRecordPlugin,
};
timeline.push(stop);

console.log(timeline); // for debug purposes
jsPsych.run(timeline);