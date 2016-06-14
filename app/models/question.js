import DS from 'ember-data';
export default DS.Model.extend({
  asker: DS.attr(),
  request: DS.attr(),
  info: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
