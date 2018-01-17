var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://rv-camping.org/wp-content/uploads/2015/06/USACECampground.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet fringilla diam, tristique lobortis nulla. Ut massa magna, porta non ante in, blandit pulvinar sem. Morbi sodales neque in erat venenatis tincidunt. Aliquam lobortis nisi in quam aliquet laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sagittis dui sit amet felis pharetra, non egestas dui auctor. In consequat viverra quam, nec ultricies arcu volutpat eget."
    },
    {
        name: "Laky Lake",
        image: "http://www.visitjohnstownpa.com/sites/visitjohnstownpa.com/files/visit_johnstown_pa_campgrounds_cabins.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet fringilla diam, tristique lobortis nulla. Ut massa magna, porta non ante in, blandit pulvinar sem. Morbi sodales neque in erat venenatis tincidunt. Aliquam lobortis nisi in quam aliquet laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sagittis dui sit amet felis pharetra, non egestas dui auctor. In consequat viverra quam, nec ultricies arcu volutpat eget."
    },
    {
        name: "Boring Fields",
        image: "http://www.visitcentraliowa.com/images/campground.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet fringilla diam, tristique lobortis nulla. Ut massa magna, porta non ante in, blandit pulvinar sem. Morbi sodales neque in erat venenatis tincidunt. Aliquam lobortis nisi in quam aliquet laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sagittis dui sit amet felis pharetra, non egestas dui auctor. In consequat viverra quam, nec ultricies arcu volutpat eget."
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
        console.log("removed campgrounds");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This is place is boooooring!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment._id);
                                campground.save();
                                console.log("Comment Created");
                            }
                        });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;