import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerForm: function() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        name: this.get('name'),
        reply: this.get('reply'),
        question: this.get('question')
      };
      
      this.sendAction('saveAnswer', params);
      this.set('addNewAnswer', false);
    }
  }
});
