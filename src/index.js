const express = require('express'); // Importing express framework library

const app = express(); // An instance of an Express application

const postRoutes = require("./routes/post.routes");

app.use("/api/v1/posts", postRoutes);

const PORT = 3000; // Defining the port

app.get('/', (req,res) => {  // defining route handler
    res.send('Welcome to the Blogify API! This is the main entry point.'); // sending response
});


app.listen(PORT, () => {  // start the server and listen on a certain port
    console.log(`Server is running at http://localhost:${PORT}`);
});