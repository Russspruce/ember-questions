import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerForm: function() {
      this.set('addNewAnswer', true);
    },

    saveAnswer1() {
      var params = {
        name: this.get('name'),
        reply: this.get('reply')
      };
      this.sendAction('saveAnswer2', params);
      this.set('addNewAnswer', false);
    }
  }
});
