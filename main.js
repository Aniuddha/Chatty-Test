const script = document.querySelector('script[data-botid]');
const botid = script.getAttribute('data-botid');
const userid = script.getAttribute('data-userid');

const BASE_URL = "https://api.binaryconsultancy.com/docsbot"
const ask_Question_API = BASE_URL + "/chatbot/ask_question"



let WidgetData = null;
let flag = true

fetch(BASE_URL + "/widget?bot_id=" + botid)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    WidgetData = data.widget
    performAdditionalWork();
  })
  .catch(err => console.log(err));



const performAdditionalWork = () => {

  //Widget Icons

  //DoubleChatIcon
  var IoIosChatbubbles = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  IoIosChatbubbles.setAttribute("viewBox", "0 0 512 512");
  IoIosChatbubbles.setAttribute("fill", WidgetData['widget-color']);
  IoIosChatbubbles.setAttribute("height", "1.5em");
  IoIosChatbubbles.setAttribute("width", "1.5em");
  // Create the first path element
  var IoIosChatbubblesElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  IoIosChatbubblesElement1.setAttribute("d", "M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z");
  // Create the second path element
  var IoIosChatbubblesElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  IoIosChatbubblesElement2.setAttribute("d", "M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z");
  // Append the path elements to the SVG element
  IoIosChatbubbles.appendChild(IoIosChatbubblesElement1);
  IoIosChatbubbles.appendChild(IoIosChatbubblesElement2);

  //SingleChatIcon
  var BsFillChatFill = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BsFillChatFill.setAttribute("fill", WidgetData['widget-color']);
  BsFillChatFill.setAttribute("viewBox", "0 0 16 16");
  BsFillChatFill.setAttribute("height", "1.5em");
  BsFillChatFill.setAttribute("width", "1.5em");

  // Create the path element
  var BsFillChatFillElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BsFillChatFillElement.setAttribute("d", "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z");

  // Append the path element to the SVG element
  BsFillChatFill.appendChild(BsFillChatFillElement);


  //BotIcon
  var FaRobot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  FaRobot.setAttribute("viewBox", "0 0 24 24");
  FaRobot.setAttribute("fill", WidgetData['widget-color']);
  FaRobot.setAttribute("height", "1.5em");
  FaRobot.setAttribute("width", "1.5em");

  // Create the path element
  var FaRobotElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  FaRobotElement.setAttribute("d", "M21 10.975V8a2 2 0 00-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 00-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 00-2 2v2.998l-.072.005A.999.999 0 002 12v2a1 1 0 001 1v5a2 2 0 002 2h14a2 2 0 002-2v-5a1 1 0 001-1v-1.938a1.004 1.004 0 00-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z");

  // Append the path element to the SVG element
  FaRobot.appendChild(FaRobotElement);


  //SupoortIcon
  var BiSupport = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BiSupport.setAttribute("viewBox", "0 0 24 24");
  BiSupport.setAttribute("fill", WidgetData['widget-color']);
  BiSupport.setAttribute("height", "1.5em");
  BiSupport.setAttribute("width", "1.5em");

  // Create the path element
  var BiSupportElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BiSupportElement.setAttribute("d", "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 001-1v-5.143a1 1 0 00-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 00-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z");

  // Append the path element to the SVG element
  BiSupport.appendChild(BiSupportElement);


  //QuestionICON
  var BsQuestionLg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BsQuestionLg.setAttribute("fill", WidgetData['widget-color']);
  BsQuestionLg.setAttribute("viewBox", "0 0 16 16");
  BsQuestionLg.setAttribute("height", "1.5em");
  BsQuestionLg.setAttribute("width", "1.5em");

  // Create the path element
  var BsQuestionLgElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BsQuestionLgElement.setAttribute("fill-rule", "evenodd");
  BsQuestionLgElement.setAttribute("d", "M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 01-.5.5h-.77a.5.5 0 01-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777zM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14z");

  // Append the path element to the SVG element
  BsQuestionLg.appendChild(BsQuestionLgElement);


  //BookMakrIcon
  var BiBookBookmark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BiBookBookmark.setAttribute("viewBox", "0 0 24 24");
  BiBookBookmark.setAttribute("fill", WidgetData['widget-color']);
  BiBookBookmark.setAttribute("height", "1.5em");
  BiBookBookmark.setAttribute("width", "1.5em");
  // Create the path element
  var BiBookBookmarkElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BiBookBookmarkElement.setAttribute("d", "M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 00-2-2zm0 9l-2-1-2 1V4h4v7z");

  // Append the path element to the SVG element
  BiBookBookmark.appendChild(BiBookBookmarkElement);


  //AvatarIcon

  //DoubleChatIcon
  var IoIosChatbubblesAvatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  IoIosChatbubblesAvatar.setAttribute("viewBox", "0 0 512 512");
  IoIosChatbubblesAvatar.setAttribute("fill", WidgetData['widget-color']);
  IoIosChatbubblesAvatar.setAttribute("height", "1em");
  IoIosChatbubblesAvatar.setAttribute("width", "1em");
  // Create the first path element
  var IoIosChatbubblesElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  IoIosChatbubblesElement1.setAttribute("d", "M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z");
  // Create the second path element
  var IoIosChatbubblesElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  IoIosChatbubblesElement2.setAttribute("d", "M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z");
  // Append the path elements to the SVG element
  IoIosChatbubblesAvatar.appendChild(IoIosChatbubblesElement1);
  IoIosChatbubblesAvatar.appendChild(IoIosChatbubblesElement2);

  //SingleChatIcon
  var BsFillChatFillAvatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BsFillChatFillAvatar.setAttribute("fill", WidgetData['widget-color']);
  BsFillChatFillAvatar.setAttribute("viewBox", "0 0 16 16");
  BsFillChatFillAvatar.setAttribute("height", "1em");
  BsFillChatFillAvatar.setAttribute("width", "1em");

  // Create the path element
  var BsFillChatFillElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BsFillChatFillElement.setAttribute("d", "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z");

  // Append the path element to the SVG element
  BsFillChatFillAvatar.appendChild(BsFillChatFillElement);


  //BotIcon
  var FaRobotAvatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  FaRobotAvatar.setAttribute("viewBox", "0 0 24 24");
  FaRobotAvatar.setAttribute("fill", WidgetData['widget-color']);
  FaRobotAvatar.setAttribute("height", "1em");
  FaRobotAvatar.setAttribute("width", "1em");

  // Create the path element
  var FaRobotElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  FaRobotElement.setAttribute("d", "M21 10.975V8a2 2 0 00-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 00-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 00-2 2v2.998l-.072.005A.999.999 0 002 12v2a1 1 0 001 1v5a2 2 0 002 2h14a2 2 0 002-2v-5a1 1 0 001-1v-1.938a1.004 1.004 0 00-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z");

  // Append the path element to the SVG element
  FaRobotAvatar.appendChild(FaRobotElement);


  //SupoortIcon
  var BiSupportAvatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BiSupportAvatar.setAttribute("viewBox", "0 0 24 24");
  BiSupportAvatar.setAttribute("fill", WidgetData['widget-color']);
  BiSupportAvatar.setAttribute("height", "1em");
  BiSupportAvatar.setAttribute("width", "1em");

  // Create the path element
  var BiSupportElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BiSupportElement.setAttribute("d", "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 001-1v-5.143a1 1 0 00-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 00-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z");

  // Append the path element to the SVG element
  BiSupportAvatar.appendChild(BiSupportElement);


  //QuestionICON
  var BsQuestionLgAvatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BsQuestionLgAvatar.setAttribute("fill", WidgetData['widget-color']);
  BsQuestionLgAvatar.setAttribute("viewBox", "0 0 16 16");
  BsQuestionLgAvatar.setAttribute("height", "1em");
  BsQuestionLgAvatar.setAttribute("width", "1em");

  // Create the path element
  var BsQuestionLgElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BsQuestionLgElement.setAttribute("fill-rule", "evenodd");
  BsQuestionLgElement.setAttribute("d", "M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 01-.5.5h-.77a.5.5 0 01-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777zM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14z");

  // Append the path element to the SVG element
  BsQuestionLgAvatar.appendChild(BsQuestionLgElement);


  //BookMakrIcon
  var BiBookBookmarkAvatar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  BiBookBookmarkAvatar.setAttribute("viewBox", "0 0 24 24");
  BiBookBookmarkAvatar.setAttribute("fill", WidgetData['widget-color']);
  BiBookBookmarkAvatar.setAttribute("height", "1em");
  BiBookBookmarkAvatar.setAttribute("width", "1em");
  // Create the path element
  var BiBookBookmarkElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  BiBookBookmarkElement.setAttribute("d", "M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 00-2-2zm0 9l-2-1-2 1V4h4v7z");

  // Append the path element to the SVG element
  BiBookBookmarkAvatar.appendChild(BiBookBookmarkElement);






  let FirstQuestions = null
  fetch(BASE_URL + '/chatbot/questions?bot_id=' + botid)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      FirstQuestions = data
      for (var i = 0; i < data.quesions.length; i++) {
        var question = data.quesions[i].question;

        // Create a <p> element for the question
        var questionElement = document.createElement('p');
        var truncatedQuestion = question.length > 56 ? question.substring(0, 42) + '...' : question;
        questionElement.innerText = truncatedQuestion;


        // Check if the question is true and apply the specified style

        questionElement.setAttribute('style', ' cursor: pointer;margin: 2px;   font-size: 13px;        padding: 6.37666px 9.565px; background: #FFFFFF; border: 1.07379px solid #408CFD; border-radius: 165.633px; color: #408CFD');

        // Append the question element to the chat message div
        chatMessages.appendChild(questionElement);
      }
    })
    .catch(err => console.log(err));


  const generateSessionId = () => {
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string of length 6
    const timestamp = Date.now().toString(36); // Convert the current timestamp to a base-36 string
    return randomString + timestamp;
  };

  const session_Id = generateSessionId();
  localStorage.setItem('sessionId', session_Id);

  const dataChatName = "Chatbot"
  const chatRole = "question_answering"



  console.log(script.dataset)
  const chatbot_data = script.dataset


  //Processing of the user data to render accordingly
  const alignmentStyle = 'right'
  if (chatbot_data.button_Alignment === 'left') {
    alignmentStyle = 'left: 20px';
  } else if (chatbot_data.button_Alignment === 'right') {
    alignmentStyle = 'right: 20px';
  }






  const iconList = {
    'BsFillChatFill': "M11.632 2.37A9.917 9.917 0 0 0 2 12.001c0 2.783.905 5.343 2.43 7.427l-.748 4.093 4.17-1.653A9.917 9.917 0 0 0 12 22.002c5.484 0 9.929-4.447 9.929-9.932S17.484 2.369 11.632 2.37z",
    'IoIosChatbubbles': "M12 2c-5.523 0-10 3.13-10 7v2c0 1.246.4 2.408 1.091 3.374C3.603 15.983 7.84 18 12 18c5.523 0 10-3.582 10-8s-4.477-8-10-8z",
    'FaRobot': "M10.02 3.003a1 1 0 0 0-1.714 0L6.41 4.65a.996.996 0 0 0 .363 1.646A5.99 5.99 0 0 1 9 9.007V11H7a1 1 0 1 0 0 2h2v1.992A5.99 5.99 0 0 1 6.411 19.35a.996.996 0 0 0-.363 1.646l2.903 1.648a1 1 0 0 0 1.431-.823A7.97 7.97 0 0 0 11 21.993v-2.004a5.96 5.96 0 0 1-1.986-1.567 5.963 5.963 0 0 1-1.578 1.567v2.004A7.972 7.972 0 0 0 13 19.338a7.972 7.972 0 0 0 3.563-.84 1 1 0 0 0 .37-1.643l-2.902-1.648a1 1 0 0 0-1.431.823A5.99 5.99 0 0 1 15 13.989V12h2a1 1 0 1 0 0-2h-2V9.007A5.99 5.99 0 0 1 13.589 4.65a.996.996 0 0 0-.363-1.646L10.02 3.003zm1.96 7.99a3.963 3.963 0 0 0-.576.049A1.99 1.99 0 0 1 11 11H9a3.963 3.963 0 0 0 .576-.049A1.99 1.99 0 0 1 11 9.993h2a3.963 3.963 0 0 0-.576.049A1.99 1.99 0 0 1 13 12h2a3.963 3.963 0 0 0-.576-.049A1.99 1.99 0 0 1 15 14.007h-2a3.963 3.963 0 0 0 .576.049 1.99 1.99 0 0 1-.002 3.974A3.963 3.963 0 0 0 15 19.993h2a1.99 1.99 0 0 1-1.576-3.974zM12 13.989a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 13.989z",
    'BiSupport': "M13.482 4.918A6.947 6.947 0 0 0 8.897 3.14L9.233 1H6.388L6.724 3.14a6.947 6.947 0 0 0-4.585 1.777l-2.172-.629L1.28 7.426l2.172.629a6.947 6.947 0 0 0 1.777 4.585L3.14 14.767v2.845l2.14-.337a6.947 6.947 0 0 0 4.585 1.777l.63 2.172 2.843-.45-.629-2.172a6.947 6.947 0 0 0 1.777-4.585L14.767 16.86h2.845l-.337-2.14a6.947 6.947 0 0 0 1.777-4.585l2.172-.629-.45-2.843-2.172.63a6.947 6.947 0 0 0-4.585-1.777L16.86 3.133v-2.845l-2.14.337zM12 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",
    'BsQuestionLg': "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-11a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4zm-1-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
    'BiBookBookmark': "M16 2h-8c-1.103 0-2 .897-2 2v18l6-3 6 3V4c0-1.103-.897-2-2-2zm-1 17.421l-4-2.001-4 2V4h8v15.421zM8 5a.999.999 0 0 1-.707-1.707l2-2A.999.999 0 0 1 10 2h4c1.103 0 2 .897 2 2v14l-6-3-6 3V5z"
  };




  // ask question api


  const reactScript = document.createElement('script');
  reactScript.src = 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js';

  const reactDOMScript = document.createElement('script');
  reactDOMScript.src = 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js';

  const reactBootstrap = document.createElement("script");
  reactBootstrap.src = "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js";


  // Append the script elements to the document body
  document.body.appendChild(reactScript);
  document.body.appendChild(reactDOMScript);
  document.body.appendChild(reactBootstrap);




  const avatarContainer = document.createElement('div');
  avatarContainer.setAttribute('id', 'avatarContainer');
  if(WidgetData['bot-avatar'] != 'None'){
    avatarContainer.appendChild(eval(WidgetData['bot-avatar'] + 'Avatar'))
  }
  

  // Create the HTML elements
  const root = document.createElement('div');
  root.setAttribute('id', 'root');

  const button = document.createElement('div');
  button.setAttribute('id', 'chatButton');
  button.appendChild(eval(WidgetData['widget-icon']))

  const chatBox = document.createElement('div');
  chatBox.setAttribute('id', 'chatBox');
  chatBox.style.display = 'none';

  const chatHeader = document.createElement('div');
  chatHeader.setAttribute('id', 'chatHeader');

  const chatHeaderContainer = document.createElement('div');
  chatHeaderContainer.setAttribute('id', 'chatHeaderContainer');

  const heading = document.createElement('p');
  heading.setAttribute('id', 'heading');
  heading.innerText = WidgetData['heading'];
  chatHeaderContainer.appendChild(heading);

  // Subheading
  const subheading = document.createElement('p');
  heading.setAttribute('id', 'subheading');
  subheading.innerText = WidgetData['subheading'];
  chatHeaderContainer.appendChild(subheading);

  const chatMessages = document.createElement('div');
  chatMessages.setAttribute('id', 'chatMessages');

  // const firstQuestion =document.createElement('div');
  // firstQuestion.setAttribute('id', 'firstQuestion');
if(WidgetData['bot-avatar'] != 'None'){
  chatHeader.appendChild(avatarContainer)
}

  chatHeader.appendChild(chatHeaderContainer)



  const chatInputContainer = document.createElement('div');
  chatInputContainer.setAttribute('id', 'chatInputContainer');

  const chatInput = document.createElement('div');
  chatInput.setAttribute('id', 'chatInput');


  const chatInputBox = document.createElement('input');
  chatInputBox.setAttribute('type', 'text');
  chatInputBox.setAttribute('placeholder', 'Type your message here');

  const chatSendButton = document.createElement('div');
  chatSendButton.innerHTML = `
  <svg width="17" height="17" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1032 3.93278L4.36385 1.06312C0.508577 -0.867868 -1.07376 0.714469 0.857227 4.56974L1.44055 5.73638C1.60817 6.07832 1.60817 6.47391 1.44055 6.81585L0.857227 7.97579C-1.07376 11.8311 0.501872 13.4134 4.36385 11.4824L10.1032 8.61275C12.6778 7.32542 12.6778 5.22011 10.1032 3.93278ZM7.93751 6.77562H4.31691C4.04202 6.77562 3.81405 6.54766 3.81405 6.27276C3.81405 5.99787 4.04202 5.7699 4.31691 5.7699H7.93751C8.21241 5.7699 8.44038 5.99787 8.44038 6.27276C8.44038 6.54766 8.21241 6.77562 7.93751 6.77562Z" fill="#D2D2D2"/>
  </svg>`;
  const sendPathElement = chatSendButton.querySelector('path');

  chatSendButton.addEventListener('mouseover', function () {
    sendPathElement.style.fill = 'gray'; // Replace #FF0000 with the desired hover color
  });

  // Reset the color on mouseout
  chatSendButton.addEventListener('mouseout', function () {
    sendPathElement.style.fill = '#D2D2D2'; // Replace #D2D2D2 with the original color
  });


  const typingLoader1 = document.createElement("div");
  typingLoader1.classList.add("typing-loader");

  const typingLoader2 = document.createElement("div");
  typingLoader2.classList.add("typing-loader");

  const typingLoader3 = document.createElement("div");
  typingLoader3.classList.add("typing-loader");
  // Add the typing loader to a container element
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("typing-loader-container");
  loaderContainer.appendChild(typingLoader1);
  loaderContainer.appendChild(typingLoader2);
  loaderContainer.appendChild(typingLoader3);




  const powerderBydiv = document.createElement("div");
  powerderBydiv.setAttribute('id', 'powerderBydiv');
  powerderBydiv.setAttribute('style', ' gap:2px; border-top: 1px solid lightgray;  display: flex;justify-content: center;font-size:12px; padding:10px 5px');
  const poweredByText = document.createElement('span');
  poweredByText.textContent = 'Powered by ';

  const boldText = document.createElement('b');
  boldText.textContent = 'Happychat';

  powerderBydiv.appendChild(poweredByText);
  powerderBydiv.appendChild(boldText);



  // Add the elements to the DOM
  document.body.appendChild(root);
  root.appendChild(button);
  root.appendChild(chatBox);
  chatBox.appendChild(chatHeader);
  chatBox.appendChild(chatMessages);
  chatBox.appendChild(chatInputContainer);
  chatInputContainer.appendChild(loaderContainer);
  chatInputContainer.appendChild(chatInput)
  chatInputContainer.appendChild(powerderBydiv)
  chatInput.appendChild(chatInputBox);
  chatInput.appendChild(chatSendButton);


  const styles = `
  .typing-loader {
    display: none;
    margin-right: 10px;
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    background-color: #4a4a4a;
    animation: typing-loader-animation 0.8s infinite;
    margin-top: 4px;
  }
  .typing-loader:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-loader:nth-child(3) {
    animation-delay: 0.4s;
  }
  .typing-loader-container {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  @keyframes typing-loader-animation {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

  // Create a style element and add the CSS styles to it
  const style = document.createElement("style");
  style.innerHTML = styles;

  // Add the style element to the head of the document
  loaderContainer.appendChild(style);





  // Add styles to the chat elements
  button.setAttribute('style', 'position: fixed; bottom: 20px; align-items: center; background: ' + WidgetData['button-color'] + '; border: none; border-radius: 50%; box-shadow: 0 1px 6px 0 rgba(0,0,0,.06), 0 2px 32px 0 rgba(0,0,0,.16); cursor: pointer; display: flex; height: 3rem; justify-content: center; ' + WidgetData['widget-alignment'] + ':20px; width: 3rem; z-index: 2147483000;');


  chatBox.setAttribute('style', 'filter: drop-shadow(0px 0px 6.60504px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2.20168px 4.40336px rgba(0, 0, 0, 0.1)); border-radius:15px; z-index: 2147483000;position: fixed;display:none; bottom: 75px; ' + WidgetData['widget-alignment'] + ':20px; width: 300px; background-color: #fff; border: 1px solid #ccc;');
  avatarContainer.setAttribute('style', 'background: #a0aec0;width: 2.5rem;height:  2.5rem;border-radius: 100%;display: flex;justify-content: center;align-items: center;')
  chatHeader.setAttribute('style', 'gap: 12px; display:flex; flex-direction:row;  border-radius: 15px 15px 0px 0px;font-size: 22px;font-weight: bold; display:flex;justify-content: flex-start;background:#408CFD;padding: 15px;');
  heading.setAttribute('style', 'font-weight: bold;line-height: 1.2;color: white;font-size: 16px;margin:0')
  subheading.setAttribute('style', 'line-height: 1.2;color: white;font-size: 12px;font-weight: 400;margin:0')
  chatMessages.setAttribute('style', 'padding: 10px;overflow: auto;font-size;display: flex;flex-direction: column; height: 300px; background:#E7EBF1');
  ;
  //firstQuestion.setAttribute('style','padding: 6.37666px 9.565px;background: #FFFFFF;border: 1.07379px solid #408CFD;border-radius: 165.633px;color:#408CFD')
  chatInputBox.setAttribute('style', '    margin-left: 10px;width: 100%;min-width: 0px;outline: 2px solid transparent;outline-offset: 2px;appearance: none;border: none;border-color: inherit;background: inherit; padding: 5px; ');

  chatInput.setAttribute('style', 'display: flex;width:100%;padding: 10px 0px;');

  chatSendButton.setAttribute('style', 'padding: 6px;border-radius: 5px;display: flex;align-self: center;margin-right: 10px;');


  // Add event listener to the button to display the chat box
  button.addEventListener('click', function () {
    if (chatBox.style.display == 'block') {
      chatBox.style.display = 'none'
    } else {
      chatBox.style.display = 'block'
    }
  });


  chatMessages.addEventListener('click', function (event) {
    var target = event.target;

    // Check if the clicked element is a <p> tag
    if (target.tagName.toLowerCase() === 'p') {
      // Create an <input> element
      var similarQuestion = null;
      for (var i = 0; i < FirstQuestions.quesions.length; i++) {
        var question = FirstQuestions.quesions[i].question;
      
        // Compare the modified text with each question
        if (question.toLowerCase().includes(target.innerText.slice(0, -3).toLowerCase())) {
          similarQuestion = question;
          chatInputBox.value = similarQuestion
          break; // Found a similar question, exit the loop
        }
      }
    }
  });



  function messageCall() {
    while (chatMessages.hasChildNodes() && flag) {
      chatMessages.removeChild(chatMessages.firstChild);
    }
    flag = false

    const message = chatInputBox.value;
    // Make sure message is not empty
    if (!message.trim()) {
      console.log("no text ")
      return;
    }
    const userMessage = document.createElement('div');
    userMessage.setAttribute('style', 'border-radius: 14px 14px 0 14px;padding: 8px;font-size: 14px;color: ' + WidgetData['user-text-color'] + ';margin-bottom:7.52px;display: flex;align-self:flex-end; max-width: 240px;background: ' + WidgetData['user-background-color'] + '');
    userMessage.innerText = message;
    userMessage.classList.add('user-message');
    chatMessages.appendChild(userMessage);

    //display loader
    typingLoader1.style.display = "inline-block";
    typingLoader2.style.display = "inline-block";
    typingLoader3.style.display = "inline-block";

    fetch(ask_Question_API, {
      method: 'POST',
      body: JSON.stringify({ user_id: userid, bot_id: botid, role: chatRole, query: message, session_id: session_Id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        //hide loader
        typingLoader1.style.display = "none";
        typingLoader2.style.display = "none";
        typingLoader3.style.display = "none";

        const botMessage = document.createElement('div');
        botMessage.setAttribute('style', 'font-size: 14px;color: ' + WidgetData['bot-text-color'] + ';margin-bottom:7.52px;display: flex;align-self:flex-start;padding: 8px;max-width: 240px;background:  ' + WidgetData['bot-background-color'] + ';    border-radius: 14px 14px 14px 0px;');
        botMessage.innerText = data.message;
        botMessage.classList.add('bot-message');
        chatMessages.appendChild(botMessage);
      })
      .catch(error => {
        // Handle error

        //hide loader
        typingLoader1.style.display = "none";
        typingLoader2.style.display = "none";
        typingLoader3.style.display = "none";
      });

    // Clear the input box
    chatInputBox.value = '';
  }

  chatSendButton.addEventListener('click', () => {
    messageCall()

  });

  chatInputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      messageCall()
      // Make sure message is not empty
    }
  });



};
