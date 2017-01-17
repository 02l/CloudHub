const mongoose = require('mongoose')

let dbURL = 'mongodb://02l:michael12@ds053944.mlab.com:53944/gabestestdb';
let db = mongoose.connection;
mongoose.connect(dbURL);

db.once('open', function() {
    console.log('DB connected')
})

let lobbySchema = new mongoose.Schema({
    videoUrl : {type: String},
    Queue : {type: Array},
    roomName : {type: String},
    roomPicture : {type: String}
})


module.exports = {
    db:db,
    lobbies: mongoose.model('lobbies', lobbySchema)
}