import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    saveAnswer1() {
      var params = {
        name: this.get('name'),
        reply: this.get('reply')
      };
      this.sendAction('saveAnswer2', params);
    }
  }
});
