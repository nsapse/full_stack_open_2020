const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument');
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://full_stack_projects:${password}@cluster0-rs6zo.mongodb.net/note-app?retryWrites=true&w=majority`
// console.log(`passworld is ${password}`);
// console.log(`url is ${url}`);
mongoose.connect(url, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(result => { 
        console.log('Connected to Mongoose DB');
     })
     .catch((error) => { 
         console.log('Error connecting to MongoDB', error.message);
      })
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'HTML is Hard',
//     date: new Date(),
//     important: true,
// })
// // console.log(`Response from note.save():  ${note.save()}`);
// note.save().then(response => {
//     console.log(`response object looks like this: ${response}`);
//     console.log('note saved');
//     mongoose.connection.close()
// })

Note.find({}).then(result => { 
    result.forEach(note => {
        console.log(note);
    });
    mongoose.connection.close()
 })