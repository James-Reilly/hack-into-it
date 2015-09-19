Template.welcome.events({
  'click #marriage':function(e){
    $("#marriage").toggleClass("custom-active");
    if(Session.get('marriage')){
      Session.set('marriage', false);
    }else{
      Session.set('marriage', true);
    }
  },
  'click #home':function(e){
    $("#home").toggleClass("custom-active");
    if(Session.get('home')){
      Session.set('home', false);
    }else{
      Session.set('home', true);
    }
  },
  'click #baby':function(e){
    $("#baby").toggleClass("custom-active");
    if(Session.get('baby')){
      Session.set('baby', false);
    }else{
      Session.set('baby', true);
    }
  },
});

Template.welcome.helpers({
  continue: function(){
    if(Session.get('marriage') || Session.get('home') || Session.get('baby')){
      return 'visible';
    }else{
      return 'hidden';
    }
  }
});
