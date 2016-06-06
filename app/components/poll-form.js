import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions:{
    createOption(title){
      var poll=this.get("poll");
      var store=this.get("store");
      if(title && poll){
        var option= store.createRecord("option",{title:title,poll:poll});
        poll.get("options").pushObject(option);
      }
    },
    savePoll(){
      var that=this;
      var store=this.get("store");
      var poll=this.get("poll");
      if(poll && poll.get("topic")){
        poll.save().then(function(){
          poll.reload().then(function(){
            poll.get("options").forEach(function(o){
              o.set("poll",poll);
              o.save().then(function(){
              });

            });
            that.sendAction("redirect");
          });
        });
      }
    }
  }
});
