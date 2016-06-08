import DS from 'ember-data';

export default DS.Model.extend({
  voteamount:DS.attr('number'),
  title: DS.attr('string'),
  poll: DS.belongsTo('poll')
});
