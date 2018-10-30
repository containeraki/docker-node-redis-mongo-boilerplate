const express = require('express')
const app = express()
const port = 8000
var redis = require('redis')
var client = redis.createClient(6379,"redis")
var mongo = require('mongodb')
var MongoClient = mongo.MongoClient

//App Test
app.get('/', (req, res) => res.send('Hello World with Docker!'))

//Mongo Connection Test
MongoClient.connect('mongodb://mongo:27017', function (err, db) {
  if (err) throw err

  /*db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err*/

    //console.log(result)
  //})
  console.log("Mongo Connected")
})

//REDIS Connection Test
client.on('error', function (err) {
    console.log('Error ' + err)
  })
  
  client.set('string key', 'string val', redis.print)
  client.hset('hash key', 'hashtest 1', 'some value', redis.print)
  client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print)
  
  client.hkeys('hash key', function (err, replies) {
    console.log(replies.length + ' replies:')
  
    replies.forEach(function (reply, i) {
      console.log('    ' + i + ': ' + reply)
    })
  
    client.quit()
  })

app.listen(port, () => console.log(`Application listening on port ${port}!`))
