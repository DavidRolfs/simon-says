$(document).ready(function(){
  var newSimon = new Simon();
  newSimon.AddColorToAnswerArray();
  $("#form").click(function(){
    var userColor = $(".userColor").val();
    newSimon.AddColorToUserArray(userColor);
    newSimon.CheckColor();
  })
})
