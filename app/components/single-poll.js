import Ember from 'ember';

export default Ember.Component.extend({

  filter: '' ,
  filteredOptions:function(){
    var options = this.get("poll.options").filter((option)=>{

      if(!option.get("title")  ){
        return false;
      }
      if(this.get("filter").length<1){
        return true;
      }
      var title=option.get("title").toLowerCase();
      var filter=this.get("filter").toLowerCase();
      return title.indexOf(filter)>-1;
    });

    return options;
  }.property("poll.options.@each.title","filter"),
  actions:{
    vote(option){
      if(option){
        this.sendAction("vote",option);
      }
    },

    blur(blur){
    this.sendAction("blur",blur);
  },
  delete(){
    this.set("showingModal",false);
    this.sendAction("blur",false);
    var poll=this.get("poll");
    if(poll){
      poll.destroyRecord();
    }
  },
  open(){
    this.set("showingModal",true);
    this.sendAction("blur",true);
  },
  close(){
    this.set("showingModal",false);
    this.sendAction("blur",false);

  },
  startReload(){

   this.get("poll").startAutoReloading();
 },
 stopReload(){
   this.get("poll").stopAutoReloading()
 },
  },
});
