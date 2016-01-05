function Murray(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getMurray = {
  init: function(myMurray){
    this.myMurray = myMurray;
  },

  horizontal: function(){
    return this.myMurray.filter(function(myMurray){
      return myMurray.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myMurray.filter(function(myMurray){
      return myMurray.ratio === "vertical";
    });
  },

  square: function (){
    return this.myMurray.filter(function(myMurray){
      return myMurray.ratio === "square";
    });
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myMurray = [
new Murray("horizontal", "https://www.fillmurray.com/g/600/350.jpg"),
new Murray("horizontal", "https://www.fillmurray.com/g/600/300.jpg"),
new Murray("horizontal", "https://www.fillmurray.com/g/900/450.jpg"),
new Murray("horizontal", "https://www.fillmurray.com/g/800/365.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/350/400.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/600/850.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/300/200.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/600/800.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/475/300.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/900/800.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/600/550.jpg"),
new Murray("vertical", "https://www.fillmurray.com/g/675/550.jpg"),
new Murray("square", "https://www.fillmurray.com/g/675/675.jpg"),
new Murray("square", "https://www.fillmurray.com/g/500/500.jpg"),
new Murray("square", "https://www.fillmurray.com/g/450/450.jpg")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}

(function (document) {

  getMurray.init(myMurray);
  var images = document.getElementsByTagName('img'), length = images.length

  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getMurray[ratio]());
    var img = getMurray[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
