const { Post } = require('../models');

const postData = [
    {
        title: "Why are we great?",
        content: "We are great cause we are created from aliens! Outer Space is Dope!",
        user_id: 1
    },
    {
        title: "Stop the Government Shutdown!",
        content: "Alaska's popular Fat Bear Week could be posponed if the government shuts down! Please let's make sure that this doesn't happen!!!",
        user_id: 2
    },
    {
        title: "Emotional Support Animal Denied at Philly Game!",
        content: "Did you know that an emotional support alligator was denied from entering Philadelphia's ballpark?",
        user_id: 2

    },
    {
        title: "Scotland's National Animal?",
        content: "Scotland's national animal is the unicorn! What I would do to live over there! Never knew unicorns were real?!?",
        user_id: 5
    },
    {
        title: "Stay away from Supermakets!",
        content: "Stay away from Supermarkets! Thier apples can be up to a year old!!! Ewwwww!!!!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;