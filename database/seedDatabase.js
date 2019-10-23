const mongoose = require('mongoose');

var faker = require('faker');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
var moment = require('moment');
var DateGenerator = require('random-date-generator');

mongoose.connect('mongodb://localhost/review', {useMongoClient: true});

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('connected')// we're connected!
});

let reviewSchema = mongoose.Schema({
	ListingID: Number,
	ReviewID: Number,
	Title: String,
  Username: String,
  ProfilePic: String,
  Time: String,
  TimeFormated:String,
	Content: String,
	Accuracy: Number,
	Cleanliness: Number,
	Value: Number,
	Communication: Number,
	Checkin: Number,
  Location: Number,
  Reply: String,
  OwnerName: String,
  OwnerPic: String
});

let Review = mongoose.model('Reviews', reviewSchema);

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max:5,
    min:2
  },
  wordsPerSentence: {
    max: 10,
    min:4
  }
});


const generateRandomDate = function() {
  let startDate = new Date(2014, 1, 1);
  let endDate = new Date(2017, 12, 31);
  var randomDate = JSON.stringify(DateGenerator.getRandomDateInRange(startDate, endDate))
  randomDate = randomDate.slice(0,11) + '"'
  var formatDate = moment(randomDate, "YYYYMMDD")
  var DateNumbers = moment(formatDate).format("YYYYMMDD")
  //console.log(DateNumbers)
  return DateNumbers
  }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let save = (reviews, cb) => {
  var test=0;
  var ownerInfo =[]
  for(var i=0; i<100; i++) {
    var ownerPic = faker.image.avatar();
    var ownerName = faker.name.firstName();
    ownerInfo.push({pic: ownerPic,
                     name: ownerName
                   })
    }
  for(var i=0; i<100; i++) {
    var numReviews = Math.floor(Math.random() * Math.floor(100));
    for(var j=0; j<=numReviews; j++) {
      var replyornot = Math.floor(Math.random() * Math.floor(10));
      //console.log(replyornot)
      var newDate = generateRandomDate();
     // var time = JSON.stringify(moment().format('LL'))
      const filter = {ListingID: i,
                      ReviewID: j};
      var update = {  Title: lorem.generateWords(1),
                      Content: lorem.generateParagraphs(1),
                      Username: faker.name.firstName(),
                      ProfilePic: faker.image.avatar(),
                      Time:newDate,
                      TimeFormated: moment(newDate).format("MMMM YYYY"),
                      Accuracy: getRandomInt(4)+1,
                      Cleanliness: getRandomInt(4)+1,
                      Value: getRandomInt(4)+1,
                      Communication: getRandomInt(4)+1,
                      Checkin: getRandomInt(4)+1,
                      Location: getRandomInt(4)+1,
                      OwnerName: ownerInfo[i].name,
                      OwnerPic: ownerInfo[i].pic
                      };
      if(replyornot===2 || replyornot===3 ) {
        var replies = {Reply: lorem.generateParagraphs(1)}
        update = Object.assign(replies, update)
        }
      Review.findOneAndUpdate( filter, update, {new: true, upsert: true}, function(err, doc) {
        if(!err) {
       // console.log('added repo to db')
        }
        else if(err) {
          console.log(err)
        }
    })
    }
  }
}


save();

//console.log(faker.image.avatar())


module.exports.save = save;
module.exports.reviewSchema = reviewSchema;
