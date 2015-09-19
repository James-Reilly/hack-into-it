# hack-into-it
Intuit Recruiting Hackathon Submission
James Reilly

The project was built using Meteor.js
[Install Instructions are here](https://www.meteor.com/install)

If you want to run this application you first have to unzip the csv and place it in your public directory
After the server starts up and all the data is trasnfered to the database(The console prints "All Done!")
I highly recommend removing the csv fromt he public folder as it slows down the application.

NOTE: Due to a very limited timeframe I unfortunately did not get to add all the features I wanted.

### Minimizing the Data
When I first looked at the data given to me I knew I had to cut some of it down.  
The Turbotax Answer Exchange Data included questions to topics this project wasn't going to cover so I had to cut them out.
Due to time contraints the quickest, but definitely not optimal way was to create small arrays of keywords for each category.
I also found that the first answer given was the best answer so I could cut out all other answers.  This brought my total 
dataset down to 122,964 entries. Still pretty large but it will have to do.  I Achieved this filtering by writing a python script that
would parse in a csv called 'output.csv' and make a reduced one called 'filtered.csv'.

### Starting with Meteor
I first wanted to load the data into the database so I could have nice reactive date to work with on the front end. I used a Metoer
csv package to run through it row by row inserting it into the MongoDB.  Now that I had this collection of FAQs I could start
working of the front end of the application.

### Designing the Application
On the front end I liked the idea of three simple buttons to allow the user to pick and choose which life event they were currently
going through.  This creates a custom query for the database and pulls the top 10 questions.  Again due to limited time to come up
with an alogrithm to sort the data I did it the simplest way I could, with user input.  A user can give a thumbs up to posts that helped them
adn give a thumbs down to posts that don't  this all happens in real time which after the fact I realized could be a big usability concern
if there is a high amount of users using the application at once (Data constantly shifting as the users is trying to read it).

###Looking Back
I was only able to accomplish about half of what I wanted to be in the application, but due to time I was happy with my progress.
The idea of the other half was to create a UI for the tax-caster library and generate FAQS based on the types of inputs the user
entered.  I also wanted to get the youtube videos in the list along with the FAQs, but theat would be an easy eddition unlike the tax-caster
feature.





