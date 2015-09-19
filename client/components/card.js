Template.card.events({
  'click .glyphicon-thumbs-up': function(e){
    var id = $(e.target).attr('faqId');
    var postive = $(e.target).hasClass('glyphicon-thumbs-up');
    //If we have already selected un toggle and decrement
    if($(e.target).hasClass('thumb-selected')){
      $(e.target).removeClass('thumb-selected');
        Meteor.call('decrement', id, 1);
    }else {
      //Select the thumbs up
      $(e.target).addClass('thumb-selected');
      Meteor.call('increment', id, 1);
      //Loop through other buttons to find the thumbs down and make sure it is not enabled as well
      $('span[faqId]').each(function(i, button){
        if($(button).attr('faqId') == id){
          var current = $(button).hasClass('glyphicon-thumbs-down');
          if(current && $(button).hasClass('thumb-rejected')){
            $(button).removeClass('thumb-rejected');
            Meteor.call('increment', id, 1);
          }
        }
      });
    }

  },
  'click .glyphicon-thumbs-down': function(e){
    var id = $(e.target).attr('faqId');
    var negative = $(e.target).hasClass('glyphicon-thumbs-down');
    //If we have already selected un toggle and iecrement
    if($(e.target).hasClass('thumb-rejected')){
      $(e.target).removeClass('thumb-rejected');
      Meteor.call('increment', id, 1);
    }else {
      //Loop through other buttons to find the thumbs up and make sure it is not enabled as well
      $(e.target).addClass('thumb-rejected');
      Meteor.call('decrement', id, 1);
      $('span[faqId]').each(function(i, button){
        console.log();
        if($(button).attr('faqId') == id){
          var current = $(button).hasClass('glyphicon-thumbs-up');
          if(current && $(button).hasClass('thumb-selected')){
            $(button).removeClass('thumb-selected');
            Meteor.call('decrement', id, 1);
          }
        }
      });
    }

  }
});
