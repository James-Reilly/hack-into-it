Meteor.startup(function (){
  //If our database does not have any data we must populate it
  console.log("Starting Up!");
  var count = Faqs.find().count();
  if(count == 0){
    var fs = Npm.require('fs');
    var file = fs.readFileSync(process.env["PWD"] +'/public/filtered.csv', 'utf8');
    Papa.parse(file, {
    	step: function(row) {
    		if(row.data[0][0] != 'Post ID' && row.data[0] !== undefined){
          Faqs.insert({
            subject: row.data[0][1],
            details: row.data[0][2],
            response: row.data[0][3],
            type: row.data[0][4],
            count: 0
          }, function(error, result){});
        }
    	},
    	complete: function() {
    		console.log("All done!");
    	}
    });
  }

});
