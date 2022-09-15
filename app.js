const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(function run() {
  fetch("/api/movie")
    .then((response) => response.json())
    .then((data) => {
      const detailsElement = document.getElementById("movie");
      //const detailsElement = document.getElementById("restaurants");
      detailsElement.getElementsByTagName("img")[0].src = data.poster;
      detailsElement.getElementsByTagName("h1")[0].innerText = data.title;
      detailsElement.getElementsByTagName("p")[0].innerText = data.fullplot;
      //detailsElement.getElementsByTagName("img")[0].src = data.poster;
      //detailsElement.getElementsByTagName("h1")[0].innerText = data.cuisine;
      //detailsElement.getElementsByTagName("p")[0].innerText = data.name;

      detailsElement.style.visibility = "visible";
    });
}


const html = `
<!DOCTYPE html>

<head>
  <link href="https://fonts.googleapis.com/css?family=Barlow|Source+Sans+Pro&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<html>

<body>
  <h1>🎥 Seja Bem Vindo ao Mãosflix</h1>
  <p>Qual comédia quer assistir hoje?</p>
  <button id="laugh" onclick="run()">😂 Quer diversão?</button>
  <div id="movie" style="visibility: hidden;">
    <img src="" alt="movie poster">
    <div>
      <h1></h1>
      <p></p>
    </div>
  </div>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
<!DOCTYPE html>
`

