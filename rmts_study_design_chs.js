const SKIP_ALLOWED = true; // TODO change back (here for debug purposes)
const BASE_DIR =
  "https://raw.githubusercontent.com/vivianhan404/rmts-replication/master";
const jsPsych = initJsPsych();
// const jsPsych = initJsPsych({
//   // TODO turn this on
//   extensions: [{ type: chsRecord.TrialRecordExtension }],
// });

let timeline = [];

// ===== HELPER FUNCTIONS ==================================

function makeVideoTrial(video_name) {
  return {
    type: jsPsychVideoButtonResponse,
    stimulus: [`${BASE_DIR}/mp4/${video_name}`],
    width: 1024,
    height: 576,
    choices: ["NEXT"],
    button_html: (choice, choice_index) =>
      `<button class="jspsych-btn">
        <img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img>
      </button>`,
    response_allowed_while_playing: SKIP_ALLOWED,
    // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
  };
}

function makeChoiceTrial(top_video, left_button, right_button) {
  const button_name = [left_button, right_button];
  return {
    type: jsPsychVideoButtonResponse,
    stimulus: [`${BASE_DIR}/mp4/${top_video}`],
    width: 1024,
    height: 250,
    choices: ["0", "1"],
    button_html: (choice, choice_index) =>
      `<button class="jspsych-btn" style="background: gold">
        <video width="453" height="240" autoplay>
          <source src="${BASE_DIR}/mp4/${button_name[choice_index]}" type="video/mp4">
        </video>
      </button>`,
    prompt:
      "PARENTS: please click the button your child points to if they are unable to click themselves",
    response_allowed_while_playing: SKIP_ALLOWED,
    // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
  };
}

//  ===== SETUP =============================================

const videoConfig = {
  type: chsRecord.VideoConfigPlugin,
};
timeline.push(videoConfig);

const videoConsent = {
  type: chsRecord.VideoConsentPlugin,
  PIName: "Laura Schulz",
  institution: "Massachussetts Institute of Technology",
  PIContact: "Laura Schulz (contact: nhcoates@mit.edu)",
  payment:
    "You can only participate in this study once for compensation. After you finish the study, we will email you a $5 Amazon gift card from Amazon.com (via a code that can be entered online) within ten days to thank you for your time. To be eligible for the gift card, (1) your child must be in the age range for this study, (2) English is (one of) your child's first language(s), (3) need to submit a valid consent statement in which we can see you AND your child in the frame, (4) must not have participated in similar matching tasks (you will get a warning message if this is the case!). Please make sure you are with your child throughout, especially if they cannot click the buttons (they can point and you can click their answer).",
  procedures:
    "In this study, you and your child will see eight matching tasks that involve boxes with shapes. Each time, you and your child will listen to the instructions, and pick which box matches best with the target box. Throughout the experiment, you or your child will click to make responses (if your child cannot click, they can point to the answer and you can click the answer they choose).",
  purpose:
    "This study aims to explore how very young children, age 4 to 5-years-old, come to understand relational mappings. This is worth exploring because many studies suggest that young children are more sensitive to surface level properties, but in a matching game context, can they be sensitive to higher-order properties too?",
  research_rights_statement:
    "You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)",
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

// const startRec = {
//   type: chsRecord.StartRecordPlugin,
// };
// timeline.push(startRec);

// // ===== STIMULI ===========================================

const intro = [
    makeVideoTrial("nicole_intro.mp4"),
    makeVideoTrial("Movie1_Introduction.mp4"),
    makeVideoTrial("Movie2_Instructions.mp4"),
];
timeline = timeline.concat(intro);

const inclusiontrials = [
  makeChoiceTrial(
    "Movie3_Inclusion1_top.mp4", 
    "Movie3_Inclusion1_left.mp4", 
    "Movie3_Inclusion1_right.mp4"
  ),
  makeVideoTrial("Movie4_LetsTryAnother.mp4"),
  makeChoiceTrial(
    "Movie5_Inclusion2_top.mp4", 
    "Movie5_Inclusion2_left.mp4", 
    "Movie5_Inclusion2_right.mp4"
  ),
  makeVideoTrial("Movie6_LetsStart.mp4"),
];
timeline = timeline.concat(inclusiontrials);

// // ===== CONDITION A =======================================
const trialsA = [
  makeChoiceTrial(
    "Movie7_A_EasyMonotonic_1_top.mp4",
    "Movie7_A_EasyMonotonic_1_left.mp4",
    "Movie7_A_EasyMonotonic_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie9_A_EasySymmetric_1_top.mp4",
      "Movie9_A_EasySymmetric_1_left.mp4",
      "Movie9_A_EasySymmetric_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie11_A_HardMonotonic_1_top.mp4",
      "Movie11_A_HardMonotonic_1_left.mp4",
      "Movie11_A_HardMonotonic_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie13_A_HardSymmetric_1_top.mp4",
      "Movie13_A_HardSymmetric_1_left.mp4",
      "Movie13_A_HardSymmetric_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie15_A_EasyMonotonic_2_top.mp4",
      "Movie15_A_EasyMonotonic_2_left.mp4",
      "Movie15_A_EasyMonotonic_2_right.mp4"
  ),
  makeChoiceTrial(
      "Movie17_A_EasySymmetric_2_top.mp4",
      "Movie17_A_EasySymmetric_2_left.mp4",
      "Movie17_A_EasySymmetric_2_right.mp4"
  ),
  makeChoiceTrial(
      "Movie19_A_HardMonotonic_2_top.mp4",
      "Movie19_A_HardMonotonic_2_left.mp4",
      "Movie19_A_HardMonotonic_2_right.mp4"
  ),
  makeChoiceTrial(
      "Movie21_A_HardSymmetric_2_top.mp4",
      "Movie21_A_HardSymmetric_2_left.mp4",
      "Movie21_A_HardSymmetric_2_right.mp4"
  )
];

const trialsB = [
  makeChoiceTrial(
    "Movie7_B_EasyMonotonic_1_top.mp4",
    "Movie7_B_EasyMonotonic_1_left.mp4",
    "Movie7_B_EasyMonotonic_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie9_B_EasySymmetric_1_top.mp4",
      "Movie9_B_EasySymmetric_1_left.mp4",
      "Movie9_B_EasySymmetric_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie11_B_HardMonotonic_1_top.mp4",
      "Movie11_B_HardMonotonic_1_left.mp4",
      "Movie11_B_HardMonotonic_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie13_B_HardSymmetric_1_top.mp4",
      "Movie13_B_HardSymmetric_1_left.mp4",
      "Movie13_B_HardSymmetric_1_right.mp4"
  ),
  makeChoiceTrial(
      "Movie15_B_EasyMonotonic_2_top.mp4",
      "Movie15_B_EasyMonotonic_2_left.mp4",
      "Movie15_B_EasyMonotonic_2_right.mp4"
  ),
  makeChoiceTrial(
      "Movie17_B_EasySymmetric_2_top.mp4",
      "Movie17_B_EasySymmetric_2_left.mp4",
      "Movie17_B_EasySymmetric_2_right.mp4"
  ),
  makeChoiceTrial(
      "Movie19_B_HardMonotonic_2_top.mp4",
      "Movie19_B_HardMonotonic_2_left.mp4",
      "Movie19_B_HardMonotonic_2_right.mp4"
  ),
  makeChoiceTrial(
      "Movie21_B_HardSymmetric_2_top.mp4",
      "Movie21_B_HardSymmetric_2_left.mp4",
      "Movie21_B_HardSymmetric_2_right.mp4"
  )
];

const more = [
  makeVideoTrial("Movie8_7more.mp4"),
  makeVideoTrial("Movie10_6more.mp4"),
  makeVideoTrial("Movie12_5more.mp4"),
  makeVideoTrial("Movie14_4more.mp4"),
  makeVideoTrial("Movie16_3more.mp4"),
  makeVideoTrial("Movie18_2more.mp4"),
  makeVideoTrial("Movie20_1more.mp4"),
  makeVideoTrial("Movie22_AllDone.mp4")
];

// ===== COMBINE STIMULI ===================================

let condA = [];
let condB = [];
for (let i = 0; i < 8; i++) {
  condA = condA.concat(trialsA[i]);
  condB = condB.concat(trialsB[i]);
  condA.push(more[i]);
  condB.push(more[i]);
}

const all_conditions = {'A': condA, 'B': condB};
const condition_assignment = jsPsych.randomization.sampleWithoutReplacement(['A', 'B'], 1)[0];
jsPsych.data.addProperties({'condition': condition_assignment});
const selected_condition_trials = all_conditions[condition_assignment];
timeline = timeline.concat(selected_condition_trials.flat());
console.log(condition_assignment);  // TODO its here for debug purposes

// ===== WRAP UP ===============================================================================

// const exitSurvey = { type: chsSurvey.ExitSurveyPlugin };
// timeline.push(exitSurvey);

const site = '<a href="https://eccl.mit.edu">https://www.eccl.mit.edu</a>';
const debrief_string = `We showed your child a sample box with three shapes. Children were asked to pick which of two other boxes of shapes was the best match for the first box. One box was a distractor with an irrelevant relationship among the shapes; the other box (the matching box) had a relationship among the shapes similar to the relationship in the first box (e.g. the three shapes progressively got bigger or smaller, or the relationship was symmetric with two large shapes flanking a small shape or vice versa). <br><br>
Across trials, children saw both 'easy' matches (the relationships between the sample and the match were identical) and 'hard' matches (the relationship in the match was the inverse of the relationship in the sample-- for instance if the shapes in the sample box had gone from smallest on the left to largest on the right, the shapes in the box went from largest on the left to smallest on the right). Previous, in-person research had suggested that although young children could succeed on easy matches, they struggled with hard matches. Here we aimed to replicate the result in an online study.<br><br>
This is the first study in a planned series of studies on children's understanding of relational matches. We think that three-year-olds may struggle with this kind of task because children are looking not only at the relationship between the shapes in the boxes but also at the relationship among the boxes themselves. In the current set up, there is a matching box and a distractor box: thus, one of the boxes has no relationship at all with the others. We believe that young children will have an easier time recognizing relational matches in a context where every box has a match (i.e., there are no distractors). That is, we believe that if we show children two sample boxes (each with a different relationship among the shapes) and two kinds of matching boxes (each matching to one of the relationships), children will be more likely to recognize the contrasting relationships and succeed at the task. However, we needed to replicate the failure first before going on to test the conditions that might lead children to succeed.<br><br>
<b>Why is this important?</b><br>
This study is important for three reasons. First, replicating children's failure to infer abstract, non-identical relationships will show both that the original finding is robust and that we can replicate in-person laboratory experiments online. Second, this will allow us to build on the initial study, potentially showing that even young children can in fact infer abstract, non-identical, higher-order relationships when they are not faced with irrelevant distractors. This would suggest the importance of how we teach and present information to young children. Showing children one matching pair and one distractor may make it difficult for children to know what kind of relationship they should attend to; by contrast, showing children two different matching relationships may serve to highlight the contrast and allow children to more readily detect the alignment between the samples and the matches. Overall, children may do better in 'errorless' contexts where 'everything has an answer' than in contexts where one answer is right and one is wrong.<br><br>
If you want to learn more about studies similar to this one, please visit our lab website at ${site}<br>
<b><center>The experiment is complete. Thank you for participating! You will receive an email from Lookit with your payment information. Please close this window.</center></b>`;
const debrief = {
  type: jsPsychHtmlButtonResponse,
  stimulus: debrief_string,
  width: 1024,
  height: 576,
  choices: ["End"],
};
timeline.push(debrief);

// const stop = {
//   type: chsRecord.StopRecordPlugin,
// };
// timeline.push(stop);

console.log(timeline); // for debug purposes
jsPsych.run(timeline);