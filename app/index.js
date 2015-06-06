var inC = 0;

var DIGIT_BITMAP = [
  [1, 1, 1, 0, 1, 1, 1],     // 0
  [0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1],     // 2
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0],     // 4
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],     // 6
  [1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],     // 8
  [1, 1, 1, 1, 0, 1, 1]
];

function $q(selector, context) {
  return (context || document).querySelector(selector);
}

function setDigit(context, which, value) {
  var $digit = $q(".digit" + which, context);
  for (var bar = 0; bar <= 6; bar++) {
    var $bar = $q(".bar" + bar, $digit);
    if (DIGIT_BITMAP[value][bar] === 0) {
      addClass($bar, "off");
    } else {
      removeClass($bar, "off");
    }
  }
}

function addClass(element, klass) {
  if (!hasClass(element, klass)) {
    element.className = (element.className || '') + " " + klass;
  }
}

function removeClass(element, klass) {
  if (hasClass(element, klass)) {
    // Pad out w/ delimiters to isolate classname.
    element.className = (" " + (element.className || '') + " ").
        replace(" " + klass + " ", "").
        replace(/^\s+/, '').
        replace(/\s+$/, '');
  }
}

function hasClass(element, klass) {
  var classes = (element.className || '').split(/\s/);

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] === klass) {
      return true;
    }
  }

  return false;
}

function update(context) {
  var d = new Date(),
      hh = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
      hours = [],
      minutes =[];
      
  if (hh > 12) {
    hh -= 12;
    addClass($q(".am", context), "off");
    removeClass($q(".pm", context), "off");
  } else {
    removeClass($q(".am", context), "off");
    addClass($q(".pm", context), "off");
  }

  inC++;
  
  setDigit(context, 1, inC);
  setDigit(context, 2, inC);
  setDigit(context, 3, inC);
  setDigit(context, 4, inC);
  setDigit(context, 5, inC);
  setDigit(context, 6, inC);

  $q(".separator", context).className = (ss % 2) === 0 ? 'separator' : 'separator off';

  $q(".date", context).innerHTML = d.toString().replace(/2013.*$/, '').replace(/ 0/, ' ');
}

function updateAll() {
  update($q(".clock1"));
  update($q(".clock2"));
}   

/* var $clocks = $q(".clocks"),
    $stopMoving = $q("#stop-moving"); */

/* window.onmousemove = function () {
    if ($stopMoving.checked) {return;}
    
    var x_pct_from_center = (window.event.clientX - (window.innerWidth / 2)) / window.innerWidth,
      x_degrees = 50.0 * x_pct_from_center,
      y_pct_from_below_center = (window.event.clientY - (3 * window.innerHeight / 4)) / window.innerHeight,
      y_degrees = 30.0 * y_pct_from_below_center,
      style = "transform: rotateY("+x_degrees+"deg) rotateX("+y_degrees+"deg);";
  $clocks.setAttribute("style", style + "-webkit-" + style);
}

*/

setInterval(updateAll, 1000);
updateAll();
