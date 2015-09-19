Meteor.publish('faqs', function(types){
  if(types.length == 0){
    //Make Sure we don't error out
    return;
  }else{
    //TO:DO Make Limit variable
    return Faqs.find({$or:types}, {sort: {count: -1}, limit:10});
  }
});
