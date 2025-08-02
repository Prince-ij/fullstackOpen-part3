const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('you must give password')
    process.exit(1)
}

const password = encodeURIComponent(process.argv[2])
const username = process.argv[3]
const number = process.argv[4]

console.log(password, username, number)

const url = `mongodb+srv://princeij56:${password}@cluster0.nt4i5b2.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)


const personSchema = mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

mongoose.connect(url)
.then(() => {
    if (username) {
        const person = new Person({name: username, number:number})
        person.save().then(result => {
            console.log(`Added ${username} number ${number} to phonebook`)
            mongoose.connection.close()
        })
    } else {
        Person.find({}).then(result => {
            console.log('Phonebook: ')
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            });
            mongoose.connection.close()
        })
    }
})
