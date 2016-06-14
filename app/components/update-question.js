import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      debugger;
      this.set('updateQuestionForm', true);
    },
    saveAnswer(answer, params) {
      this.sendAction('saveAnswer2', answer, params);
    },
    update(question) {
      var params = {
        asker: this.get('asker'),
        request: this.get('request'),
        info: this.get('info'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
