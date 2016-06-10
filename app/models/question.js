import Model from 'ember-data';
export default DS.Model.extend({
  asker: DS.attr(),
  question: DS.attr(),
  info: DS.attr()
});
