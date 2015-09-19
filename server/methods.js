Meteor.methods({
  increment:function(id, amount){
    var curAmount = Faqs.findOne({_id:id}).count;
    curAmount += amount;
    Faqs.update(id, {$set: {count:curAmount}});
  },
  decrement:function(id, amount){
    var curAmount = Faqs.findOne({_id:id}).count;
    curAmount -= amount;
    Faqs.update(id, {$set: {count:curAmount}});
  }
})
