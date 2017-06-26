var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function(){
  var newSimon = new Simon();
  newSimon.AddColorToAnswerArray();

  for (var i = 0; i < newSimon.answerArray.length; i++) {
    $("#output").text(newSimon.answerArray[i]);
    setInterval(function(){ $("#output").text(newSimon.answerArray[i]); }, 1000 * 1);
  }
  $(".button").click(function(event){
    event.preventDefault();
    var userColor = $(this)[0].classList[1];
    console.log($(this)[0].classList[1]);
    newSimon.AddColorToUserArray(userColor);

  });
});
