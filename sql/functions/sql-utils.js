var posts = function (connection, callback) {
    execSQL(connection, "SELECT * FROM post", function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows, fields)
        callback(rows,fields);
    });
}
module.exports.posts = posts;

var comments = function (connection, callback) {
    execSQL(connection, "SELECT * FROM comment", function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows, fields)
        callback(rows,fields);
    });
}
module.exports.comments = comments;

function getAll(connection, query, callback) {
    connection.query(query, callback)
}