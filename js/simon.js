function Simon() {
  this.sourceArray = ["red", "blue", "yellow", "green"];
  this.answerArray = [];
  this.userArray = [];
  this.timer = null;
}

Simon.prototype.AddColorToAnswerArray = function () {
  var colorNumber = Math.floor(Math.random() * 4);
  this.answerArray.push(this.sourceArray[colorNumber]);
  console.log(this.answerArray);
};

Simon.prototype.CheckColor = function() {
  for (var i = 0; i < this.answerArray.length; i++) {
    if (this.answerArray[i] == this.userArray[i] && i == this.answerArray.length - 1) {
      console.log("Correct Answer, adding Color");
      this.AddColorToAnswerArray();
      this.userArray = [];
      return;
    } else if (this.answerArray[i] == this.userArray[i]) {
      console.log("Correct Answer");
    } else {
      console.log("Incorrect. Game Restart.");
      this.answerArray = [];
      this.userArray = [];
      this.AddColorToAnswerArray();
      return;
    }
  }
};

Simon.prototype.AddColorToUserArray = function(userColor) {
  this.userArray.push(userColor);
  var ourObj = this;
  clearTimeout(this.timer);
  this.timer = setTimeout(function() { ourObj.CheckColor(); }, 1000 * 2);

};

exports.simonModule = Simon;
