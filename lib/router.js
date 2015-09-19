Router.configure({
  layoutTemplate: 'layout'
});
var faqType = function(){
  types = [];
  if(Session.get('marriage')){
    types.push( {type: 'marriage'});
  }
  if(Session.get('baby')){
    types.push( {type: 'baby'})
  }
  if(Session.get('home')){
    types.push({type: 'home'})
  }
  return types;
}

Router.map(function routerMap(){
  this.route('main', {
    path: '/',
    template: 'welcome'
  });
  this.route('list', {
    path: '/data',
    template: 'listView',
    onBeforeAction: function (argument) {
      var types = faqType();
      if(types.length == 0){
        this.redirect('/');
      }
      Meteor.subscribe('faqs', types);
      this.next();
    },
    data: function() {
      return {faqs: Faqs.find().fetch()}
    },
    onStop:function(){
      Session.set('marriage', undefined);
      Session.set('home', undefined);
      Session.set('baby', undefined);
    }
  })



});
