var db = require('../connection'); //reference of connection.js

// var postexmaple = {
//     post_title: "Y Combinator",
//     post_text: "", 
//     hanesst_id: 1,
//     post_type: "story", 
//     post_parent: -1, 
//     username: "pg",  
//     pwd_hash: "Y89KIJ3frM", 
//     post_url: "http://ycombinator.com"
// };

var Post = {
    getAllPosts: function(callback) {
        return db.query("Select * from post", callback);
    },

    getPostById: function(id, callback) {
        return db.query("select * from post where hanesst_id=?", [id], callback);
    },

    getAllStories: function(callback) {
        return db.query("Select * from post where post_type=story", callback);
    },

    getStoriesByUser: function(name, callback) {
        return db.query("Select * from post where post_type=story AND username=?", [name], callback);
    },

    getAllComments: function(callback) {
        return db.query("Select * from post where post_type=comment", callback);
    },

    getCommentsByUser: function(name, callback) {
        return db.query("Select * from post where post_type=comment AND username=?", [name], callback);
    },

    getLatest: function(callback) {
        return db.query("Select * from post ORDER BY post_created DESC LIMIT 1", callback);
    }

    addPost: function(Post, callback) {
        return db.query("Insert into post values(?,?,?,?,?,?,?,?)",
            [
                Post.post_title,
                Post.post_text,
                Post.hanesst_id,
                Post.post_type,
                Post.post_parent,
                Post.username,
                Post.pwd_hash,
                Post.post_url
            ],
            callback);
    },

    deletePost: function(id, callback) {
        return db.query("delete from post where hanesst_id=?", [id], callback);
        // IMPLEMENT DELETION OF CHILD COMMENTS?
    },

    updatePost: function(id, Post, callback) {
        return db.query("update post set post_title=?,post_text=?,post_url=? where hanesst_id=?",
            [
                Post.post_title,
                Post.post_text,
                Post.post_url,
                id
            ],
            callback);
    }

};
module.exports = Post;