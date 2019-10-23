const mongoose = require('mongoose');
//const seedDb = require('./seedDatabase.js')


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

let getAll = (room, cb) => {
  Review.find({ListingID:room})
  .sort({Time: 'desc'})
  .exec(cb)
}


module.exports.getAll = getAll;