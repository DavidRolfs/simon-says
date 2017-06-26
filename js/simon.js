function Simon() {
  var sourceArray = ["red", "blue", "yellow", "green"];
  var answerArray = [];
  var userArray = [];
};

Simon.prototype.AddColorToAnswerArray = function () {
  var colorNumber = Math.Random() * 4;
  console.log(colorNumber);
  answerArray.push(sourceArray[colorNumber]);
};

Simon.prototype.CheckColor = function() {
  for (var i = 0; i < answerArray.length; i++) {
    if (answerArray[i] == userArray[i] && i == answerArray.length - 1) {
      console.log("Correct Answer, adding Color");
      this.AddColorToAnswerArray();
    } else if (answerArray[i] == userArray[i]) {
      console.log("Correct Answer");
    } else {
      console.log("Incorrect. Game Restart.");
      answerArray = [];
      userArray = [];
      return;
    };
  };
};

Simon.prototype.AddColorToUserArray = function(userColor) {
  userArray.push(userColor);
};
