

 function theBeatlesPlay (musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
      allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
 return allMusicians; 
 }

function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = ["foo", "bar"];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });

function iLoveTheBeatles (num) {
  var love = [];
  
  do {
    love.push("I love the Beatles!"); 
    num++;
  } while (num < 15);
  return love; 
}






