import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        asker: this.get('asker'),
        question: this.get('question'),
        info: this.get('info')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
