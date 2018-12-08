var mongoose = require('mongoose');
mongoose.connect('mongodb://mydb:123456a@ds129454.mlab.com:29454/mydb', { useNewUrlParser: true });
require('mongoose-type-email');
var Schema = mongoose.Schema;

//creating Schema for user profile
const UserProfileSchema = new Schema({
    user_id: String,
    dob: { type: String },
    mobile_no: { type: Number }
});

//creating Schema for user
const UserSchema = new Schema({
    first_name: { type: String },
    email: { type: mongoose.SchemaTypes.Email },
    last_name: { type: String },
    password: { type: String }
});

const UserProfile = mongoose.model('userprofile', UserProfileSchema);
const User = mongoose.model('user', UserProfileSchema);

mongoose.connection.on('once', function () {
    console.log('connected with mydb');
}).on('error', function (error) {
    console.log('connection error: ', error)
})



module.exports = (app) => {

    app.post('/user/register', function (req, res) {
        var a = req.body;
        if (a.password == a.confirm_password) {
            console.log('pwd matched');
            res.send('pwd matched');
        } else {
            console.log('pwd not match');
            res.send('pwd not matched');
        }

    });

}