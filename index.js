// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

// 2. Create an express app and set the port number.
const app = express();
const PORT = 3000;

// 3. Use the public folder for static files.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    // console.log(response.data);
    const result = {
        user: response.data['username'],
        secret: response.data['secret']
    }
    res.render("index.ejs", result ); 
} catch (error) {
    console.log(error);
}
});
// 6. Listen on your predefined port and start the server.
app.listen(PORT, () => {
    console.log(`Connected, listening on Port: ${PORT}`);
})
