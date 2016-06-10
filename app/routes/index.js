import Ember from 'ember';

var questions = [{
  id: 1,
  asker: "Michael Jones",
  question: "Best way to get the Overkill achievement?",
  info: "I keep struggling to get it, any ideas?"
}, {
  id: 2,
  asker: "Gavin Free",
  question: "Do rocks float in lava?",
  info: "Just a random thought in my head."
}, {
  id: 3,
  asker: "Jeremy Dooley ",
  question: "Can sour balls burn a hole in your mouth?",
  info: "I ate a few too many, now I keep tasting blood and my cheek burns."

}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
