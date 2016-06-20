import Ember from 'ember';

export default Ember.Component.extend({
  userSortingascByName:['name:asc','forename:asc'],
  sortedUsers:Ember.computed.sort('users','userSortingascByName'),
  actions:{
    look(user){
      this.set("selected",user);
      this.sendAction("transition",user);
    }
  }
});
