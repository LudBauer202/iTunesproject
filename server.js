const express = require('express');
const app = express();
const cors = require('cors');
//imports node-fetch to get api data
const fetch = (...args) => import('node-fetch').then(({
    default: fetch
}) => fetch(...args));
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
//Made use of cors middleware to prevent CORS errors
app.use(cors({
    origin: 'http://localhost:3000'
}))
let JSONContents = '';

//Makes http request from frontend to here that then makes fetch request and then responds back 
//to frontend with API data
app.put("/Data", (req, res) => {
    let SearchQuery = (req.body);
    fetch(`https://itunes.apple.com/search?term=${SearchQuery.SearchQuery}&media=${SearchQuery.MediaType}&limit=10`)
        .then(response => response.json())
        .then(
            (result) => {
                console.log(1);
                JSONContents = result;
                awaitResult()
            },
            (error) => {
                JSONContents = error;
                console.log(error);
                awaitResult()
            }
        )

    function awaitResult() {
        res.json(JSONContents)
    }
})


//Made this fetch function for the backend unit testing
async function testAPI() {
    try {
        const result = await fetch(
            `https://itunes.apple.com/search?term=Minions&media=movie&limit=1`
        );
        const data = await result.json();
        return data
    } catch (e) {
        return null;
    }
}


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = testAPI;