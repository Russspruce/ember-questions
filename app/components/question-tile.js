import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(question, params) {
        this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Got this message?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
}
});
