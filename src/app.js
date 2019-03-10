const path = require('path')
const fs = require('fs')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')


//setup handlebars enginge and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//Static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'get started'
  })
})

app.get('/new', (req, res) => {

if (!req.query.adjective) {
  res.send({
    error: "input an adjective"
  })



}

//required utils
  const loadPlaces = function () {
    const dataBuffer = fs.readFileSync(path.join(__dirname, '../places/places.json'))
    const placesJSON = dataBuffer.toString()
    return JSON.parse(placesJSON)
  }

//required utils
  const matchPlace = function(letterAdjective) {
     const places = loadPlaces();
     const filteredPlaces = places.filter(({FIRSTLETTER}) => FIRSTLETTER === letterAdjective.toUpperCase());
     return Match = filteredPlaces[Math.floor(Math.random()*filteredPlaces.length)];

  }

//required utils
  const returnMatch = function (input) {
   const letterAdjective = input.charAt(0)
   const Match = matchPlace(letterAdjective)
   const Place = Match.PLACE;
   return Place
  }



const matchedPlace = returnMatch(req.query.adjective)
  res.send({
    adjective: req.query.adjective,
    match: matchedPlace
  })

})


app.listen(port, () => {
  console.log('server is up on port '+ port)
})
