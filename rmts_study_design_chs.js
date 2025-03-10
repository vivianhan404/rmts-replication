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
      `<button class="jspsych-btn"><img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img></button>`,
    response_allowed_while_playing: SKIP_ALLOWED,
    // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
  };
}

// TODO fix formatting here
function makeChoiceTrial(image_name) {
    const name_base = image_name.substring(0, image_name.indexOf("."));
  return {
    // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
  };
}

// ===== SANDBOX ===========================================

// const test_image = "Movie4_Inclusion_1_test_crop.png";
// const left_button = "Movie4_Inclusion_1_test_left.png";
// const right_button = "Movie4_Inclusion_1_test_right.png";
// const button = [left_button, right_button];
// const trial = {
//     type: jsPsychImageButtonResponse,
//     stimulus: `${BASE_DIR}/img/${test_image}`,
//     stimulus_width: 1024,
//     stimulus_height: 267,
//     choices: ["0", "1"],
//     button_html: (choice, choice_index) =>
//       `<button class="jspsych-btn" style="margin: 10px 80px;"><img src="${BASE_DIR}/img/${button[choice_index]}"  width="397" height="172"></img></button>`,
//     margin_horizontal: "500px",
//     prompt:
//       "PARENTS: please click the button your child points to if they are unable to click themselves",
//     response_allowed_while_playing: SKIP_ALLOWED,
//     // extensions: [{ type: chsRecord.TrialRecordExtension }],  // TODO turn on
//   };

const video_name = "Movie9_A_EasyMonotonic_1_video.mp4";
const button = "Movie9_A_EasyMonotonic_1_left.mp4"
const trial = {
    type: jsPsychVideoButtonResponse,
    stimulus: [`${BASE_DIR}/mp4/${video_name}`],
    width: 1024,
    height: 576,
    choices: ["NEXT"],
    button_html: (choice, choice_index) =>
      `<button class="jspsych-btn"><video><source src="${BASE_DIR}/mp4/${button}" type="video/mp4"></video></button>`,
    response_allowed_while_playing: SKIP_ALLOWED,
  };

timeline.push(trial);

//  ===== SETUP =============================================

// const videoConfig = {
//   type: chsRecord.VideoConfigPlugin,
// };
// timeline.push(videoConfig);

// // TODO fill this out
// const videoConsent = {
//   type: chsRecord.VideoConsentPlugin,
//   PIName: "Laura Schulz",
//   institution: "Massachussets Institute of Technology",
//   PIContact: "Laura Schulz (contact: nhcoates@mit.edu)",
//   payment:
//     "After you finish the study, we will email you a $5 Amazon.com gift card within approximately a week from completing the study. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
//   procedures:
//     "",
//   purpose:
//     "",
//   research_rights_statement:
//     "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)",
// };
// timeline.push(videoConsent);

// const instructions = [
//   {
//     type: jsPsychHtmlButtonResponse,
//     stimulus:
//       "This study requires your browser to be in Full Screen. Please put your browser in Full Screen mode now.",
//     choices: ["Next"],
//     button_html: (choice, choice_index) =>
//       `<button class="jspsych-btn"><img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img></button>`,
//   },
//   {
//     type: jsPsychHtmlButtonResponse,
//     stimulus:
//       "<font size = '4'>During this study your child will see 8 matching tasks.  <br><br>For each task, your child will be asked to pick the best match. They can point and you can click their answer, or they can click for themselves.  <br><br>Please do not add any additional explanations to the task, and try not to influence your child's answer.  <br><br>There is no right answer, we're just interested in how children of this age think!<br><br><br></font>",
//     choices: ["Next"],
//     button_html: (choice, choice_index) =>
//       `<button class="jspsych-btn"><img src="${BASE_DIR}/img/purplearrow.png" alt="NEXT"></img></button>`,
//   },
// ];
// timeline = timeline.concat(instructions);

// const startRec = {
//   type: chsRecord.StartRecordPlugin,
// };
// timeline.push(startRec);

// // ===== STIMULI ===========================================

// const intro = [
//     makeVideoTrial("nicole_intro.mp4"),
//     makeVideoTrial("Movie1_Introduction.mp4"),
//     makeVideoTrial("Movie2_Instructions.mp4"),
// ];
// timeline = timeline.concat(intro);

// // TODO?
// // const warmup = [];
// // timeline = timeline.concat(warmup);

// const inclusiontrial1 = [
//   makeVideoTrial("Movie3_Inclusion1_video.mp4"),
//   makeChoiceTrial("Movie4_Inclusion1_test.png"),
//   makeVideoTrial("Movie5_LetsTryAnother.mp4"),
// ];
// timeline = timeline.concat(inclusiontrial1);

// const inclusiontrial2 = [
//   makeVideoTrial("Movie6_Inclusion2_video.mp4"),
//   makeChoiceTrial("Movie7_Inclusion2_test.png"),
//   makeVideoTrial("Movie8_LetsStart.mp4"),
// ];
// timeline = timeline.concat(inclusiontrial2);

// // ===== CONDITION A =======================================
// const trial1a = [
//     makeVideoTrial("Movie9_A_EasyMonotonic_1_video.mp4"),
//     makeChoiceTrial("Movie10_A_EasyMonotonic_1_test.png"),
// ];

// const trial2a = [
//     makeVideoTrial("Movie12_A_EasySymmetric_1_video.mp4"),
//     makeChoiceTrial("Movie13_A_EasySymmetric_1_test.png"),
// ];

// const trial3a = [
//     makeVideoTrial("Movie15_A_HardMonotonic_1_video.mp4"),
//     makeChoiceTrial("Movie16_A_HardMonotonic_1_test.png"),
// ];

// const trial4a = [
//     makeVideoTrial("Movie18_A_HardSymmetric_1_video.mp4"),
//     makeChoiceTrial("Movie19_A_HardSymmetric_1_test.png"),
// ];

// const trial5a = [
//     makeVideoTrial("Movie21_A_EasyMonotonic_2_video.mp4"),
//     makeChoiceTrial("Movie22_A_EasyMonotonic_2_test.png"),
// ];

// const trial6a = [
//     makeVideoTrial("Movie24_A_EasySymmetric_2_video.mp4"),
//     makeChoiceTrial("Movie25_A_EasySymmetric_2_test.png"),
// ];

// const trial7a = [
//     makeVideoTrial("Movie27_A_HardMonotonic_2_video.mp4"),
//     makeChoiceTrial("Movie28_A_HardMonotonic_2_test.png"),
// ];

// const trial8a = [
//     makeVideoTrial("Movie30_A_HardSymmetric_2_video.mp4"),
//     makeChoiceTrial("Movie31_A_HardSymmetric_2_test.png"),
// ];

// const trialsA = [trial1a, trial2a, trial3a, trial4a, trial5a, trial6a, trial7a, trial8a];

// // ===== CONDITION B =======================================

// const trial1b = [
//     makeVideoTrial("Movie9_B_EasyMonotonic_1_video.mp4"),
//     makeChoiceTrial("Movie10_B_EasyMonotonic_1_test.png"),
// ];

// const trial2b = [
//     makeVideoTrial("Movie12_B_EasySymmetric_1_video.mp4"),
//     makeChoiceTrial("Movie13_B_EasySymmetric_1_test.png"),
// ];

// const trial3b = [
//     makeVideoTrial("Movie15_B_HardMonotonic_1_video.mp4"),
//     makeChoiceTrial("Movie16_B_HardMonotonic_1_test.png"),
// ];

// const trial4b = [
//     makeVideoTrial("Movie18_B_HardSymmetric_1_video.mp4"),
//     makeChoiceTrial("Movie19_B_HardSymmetric_1_test.png"),
// ];

// const trial5b = [
//     makeVideoTrial("Movie21_B_EasyMonotonic_2_video.mp4"),
//     makeChoiceTrial("Movie22_B_EasyMonotonic_2_test.png"),
// ];

// const trial6b = [
//     makeVideoTrial("Movie24_B_EasySymmetric_2_video.mp4"),
//     makeChoiceTrial("Movie25_B_EasySymmetric_2_test.png"),
// ];

// const trial7b = [
//     makeVideoTrial("Movie27_B_HardMonotonic_2_video.mp4"),
//     makeChoiceTrial("Movie28_B_HardMonotonic_2_test.png"),
// ];

// const trial8b = [
//     makeVideoTrial("Movie30_B_HardSymmetric_2_video.mp4"),
//     makeChoiceTrial("Movie31_B_HardSymmetric_2_test.png"),
// ];

// const trialsB = [trial1b, trial2b, trial3b, trial4b, trial5b, trial6b, trial7b, trial8b];

// // ===== COMBINE STIMULI ===================================

// const more = [
//   makeVideoTrial("Movie11_7more.mp4"),
//   makeVideoTrial("Movie14_6more.mp4"),
//   makeVideoTrial("Movie17_5more.mp4"),
//   makeVideoTrial("Movie20_4more.mp4"),
//   makeVideoTrial("Movie23_3more.mp4"),
//   makeVideoTrial("Movie26_2more.mp4"),
//   makeVideoTrial("Movie29_1more.mp4"),
//   makeVideoTrial("Movie32_AllDone.mp4"),
// ];

// let condA = [];
// let condB = [];
// for (let i = 0; i < 6; i++) {
//   condA = condA.concat(trialsA[i]);
//   condB = condB.concat(trialsB[i]);
//   condA.push(more[i]);
//   condB.push(more[i]);
// }

// TODO assign to a condition

// ===== WRAP UP ===============================================================================

// const exitSurvey = { type: chsSurvey.ExitSurveyPlugin };
// timeline.push(exitSurvey);

// const site = '<a href="https://eccl.mit.edu">https://www.eccl.mit.edu</a>';
// const debrief_string =
//   "We showed your child a sample box with three shapes. Children were asked to pick which of two other boxes of shapes was the best match for the first box. One box was a distractor with an irrelevant relationship among the shapes; the other box (the matching box) had a relationship among the shapes similar to the relationship in the first box (e.g. the three shapes progressively got bigger or smaller, or the relationship was symmetric with two large shapes flanking a small shape or vice versa). <br><br>Across trials, children saw both 'easy' matches (the relationships between the sample and the match were identical) and 'hard' matches (the relationship in the match was the inverse of the relationship in the sample-- for instance if the shapes in the sample box had gone from smallest on the left to largest on the right, the shapes in the box went from largest on the left to smallest on the right). Previous, in-person research had suggested that although young children could succeed on easy matches, they struggled with hard matches. Here we aimed to replicate the result in an online study </br></br><br> This is the first study in a planned series of studies on children's understanding of relational matches. We think that three-year-olds may struggle with this kind of task because children are looking not only at the relationship between the shapes in the boxes but also at the relationship among the boxes themselves. In the current set up, there is a matching box and a distractor box: thus, one of the boxes has no relationship at all with the others. We believe that young children will have an easier time recognizing relational matches in a context where every box has a match (i.e., there are no distractors). That is, we believe that if we show children two sample boxes (each with a different relationship among the shapes) and two kinds of matching boxes (each matching to one of the relationships), children will be more likely to recognize the contrasting relationships and succeed at the task. However, we needed to replicate the failure first before going on to test the conditions that might lead children to succeed.</br></br> <br><b>Why is this important?</b></br></br><br> This study is important for three reasons. First, replicating children's failure to infer abstract, non-identical relationships will show both that the original finding is robust and that we can replicate in-person laboratory experiments online. Second, this will allow us to build on the initial study, potentially showing that even young children can in fact infer abstract, non-identical, higher-order relationships when they are not faced with irrelevant distractors. This would suggest the importance of how we teach and present information to young children. Showing children one matching pair and one distractor may make it difficult for children to know what kind of relationship they should attend to; by contrast, showing children two different matching relationships may serve to highlight the contrast and allow children to more readily detect the alignment between the samples and the matches. Overall, children may do better in 'errorless' contexts where 'everything has an answer' than in contexts where one answer is right and one is wrong.</br></br> <br>If you want to learn more about studies similar to this one, please visit our lab website at " +
//   site +
//   "\nThe experiment is complete. Please close this window.";
// const debrief = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: debrief_string,
//   // width: 1024,
//   // height: 576,
//   choices: ["End"],
// };
// timeline.push(debrief);

// const stop = {
//   type: chsRecord.StopRecordPlugin,
// };
// timeline.push(stop);

console.log(timeline); // for debug purposes
jsPsych.run(timeline);