window.onload = function () {
  var $ = function (e) {
    return document.querySelector(e);
  }

  var setSubColor = function (c) {
    $('#human-head').style.fill = c;
    $('#human-body').style.stroke = c;
  }

  var setSubColorR = function (c) {
    $('#human-headr').style.fill = c;
    $('#human-bodyr').style.stroke = c;
  }


  // Function To Set Color
  var setColor = function (e, c) {
    e.style.backgroundColor = c;
  }

  // Getting DOM objects
  var redLamp = $("#red");
  var yelLamp = $("#yellow");
  var greLamp = $("#green");
  var timerNum = $("#timer-num");

  //two trafic
  var rLamp = $('#r');
  var yLamp = $('#y');
  var glamp = $('#g');
  var glampR = $('#green-raight');
  var glampl = $('#green-left');
  var rnext = $('#greenn-raight');
  // Lsmp Colors

  //three trafic
  var bridgeYellow = $('#yelloww');
  var bridgeRed = $('#redd');
  var bridgeGren =$('#greenn');


  var green = "#00EE00";
  var yellow = "#DDDD00";
  var red = "#EE0000";
  var gDim = "#113311";
  var yDim = "#222211";
  var rDim = "#331111";

  var gOn = new isOn();
  var yOn = new isOn();
  var rOn = new isOn();

  function check(n) {
    n = parseInt(n);
    while (isNaN(n)) {
      n = parseInt(prompt("enter a valid number!"));
    }
    return Math.floor(n);
  }

  // Set Timer

  var redTimer = check(22); // Time For Red Light
  var yelTimer = check(3);// Time For Yellow Light
  var greTimer = check(35);// Time For Green Light

  var totalTime = greTimer + yelTimer + redTimer;
  var timeCount = greTimer;


  if (greTimer && yelTimer && redTimer) {
    var i = 1;
    var intr = setInterval(function () {
      if (i <= greTimer) {
        if (rOn.getOn()) {
          timeCount = greTimer;

        }

        yOn.setOn(false);
        rOn.setOn(false);
        gOn.setOn(true);

        timerNum.innerHTML = timeCount--;
        // Green Light Turn On

        setColor(yelLamp, yDim);
        setColor(redLamp, rDim);
        setColor(greLamp, green);

        setColor(rLamp, red);
        setColor(glamp, gDim);
        setColor(yLamp, yDim);
        setColor(glampR, gDim);
        setColor(glampl, green);
        setColor(rnext, green);
        setColor(bridgeRed,rDim);
        setColor(bridgeYellow,yDim);
        setColor(bridgeGren, gDim);
        setColor(rnext, green);

        if (greTimer) {
          setColor(bridgeGren, gDim);
          setColor(rnext, green);
          setColor(bridgeRed ,red);
          if (timeCount <= 23) {
            if (timeCount == 23 || timeCount ==21 || timeCount <= 19) {
              setColor(rnext, gDim);
              setColor(glampl, gDim);

              if(timeCount <= 19){
                setColor(rLamp,rDim);
                setColor(yLamp,yDim);
                setColor(glamp, green);
              }
            }
            if(19 < timeCount <= 22){
              setColor(rLamp,rDim);
              setColor(yLamp,yellow);
            }
            if(timeCount <= 19){
              setColor(yLamp, yDim);
            }
            setColor(glampR, green);

            setColor(rLamp,rDim);
          }
        }

        setSubColor("red");
        setSubColorR("red");

      } else if (i > greTimer && i <= greTimer + yelTimer) {
        if (gOn.getOn()) {
          timeCount = yelTimer;
        }

        gOn.setOn(false);
        rOn.setOn(false);
        yOn.setOn(true);

        timerNum.innerHTML = timeCount--;

        // Yellow Light Turn On

        setColor(greLamp, gDim);
        setColor(redLamp, rDim);
        setColor(yelLamp, yellow);
        setColor(bridgeYellow, yellow);
        setColor(rLamp, rDim);
        setColor(glamp, gDim);
        setColor(yLamp, yellow);
        setColor(bridgeRed,rDim);
        setColor(glampR,gDim);
        setSubColor("red");
        setSubColorR("red");
      } else {
        if (yOn.getOn()) {
          timeCount = redTimer;
        }

        gOn.setOn(false);
        yOn.setOn(false);
        rOn.setOn(true);

        timerNum.innerHTML = timeCount--;

        if (timeCount == redTimer - 1) {
          setSubColor("green");
          setSubColorR("green");
          setColor(yelLamp, yDim);
          setColor(greLamp, gDim);
          setColor(redLamp, red);
          setColor(bridgeYellow, yDim);
          if (redTimer) {
            setColor(bridgeGren, green);
            setColor(glampR, green);
            setColor(rnext, green);

          }
          setColor(rLamp, red);
          setColor(glamp, gDim);
          setColor(yLamp, yDim);
          setColor(bridgeYellow, yDim);
        }
        if (timeCount == 1) {
          setSubColor("red");
          setSubColorR("red");
          setColor(yelLamp, yellow);
          setColor(bridgeYellow, yellow);
          setColor(greLamp, gDim);
          setColor(redLamp, rDim);
          setColor(bridgeGren, gDim);
          setColor(rnext,gDim);
          setColor(glampR, gDim);
          setColor(rLamp, rDim);
          setColor(glamp, gDim);
          setColor(yLamp, yellow);
        }

      }
      i++;
      // If Done, Repeat

      if (i - 1 >= totalTime)
        i = 0;
    }, 1000);
  } else {
    alert("error, don't input 0")
  }
  // Update Every 1 seconds

}

// Helper
var isOn = function () {
  this.on = false;
  this.setOn = function (b) {
    this.on = b;
  }
  this.getOn = function () {
    return this.on;
  }
}
