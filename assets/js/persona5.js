//declare all the items to be controlled
  var socketLeft = document.getElementsByClassName("hover-left");
  var socketRight = document.getElementsByClassName("hover-right");
  var leftPupil = document.getElementById("eye-l");
  var rightPupil = document.getElementById("eye-r");

  var hLeft = socketLeft[0]; //nodelist, so must get [0]
  var hRight = socketRight[0];

  function hoverLeft() {
    leftPupil.classList.add("lookingleft-l");
    rightPupil.classList.add("lookingleft-r");
    console.log("left");
    setTimeout ("resetLookLeft()", 4000 );
  }
  function hoverRight() {
    leftPupil.classList.add("lookingright-l");
    rightPupil.classList.add("lookingright-r");
    console.log("right");
    setTimeout ("resetLookRight()", 4000 );
  }
  //RESET FUNCTIONS
  function resetLookLeft() {
    leftPupil.classList.remove("lookingleft-l");
    rightPupil.classList.remove("lookingleft-r");
    console.log("lookingLeft class removed");
  }
  function resetLookRight() {
    leftPupil.classList.remove("lookingright-l");
    rightPupil.classList.remove("lookingright-r");
    console.log("lookingRight class removed");
  }

  hLeft.addEventListener("mouseover", hoverLeft, false);
  hRight.addEventListener("mouseover", hoverRight, false);

//TODO mask edit
//bg circle timing
//JS direction detecton improvement