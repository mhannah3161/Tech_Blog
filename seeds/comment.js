const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Why!?",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "This Comment Though",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Do or do not. Don't just try.",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Nice.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Following not",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "FYP",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "Coolito",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "LOL. The more you know",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;