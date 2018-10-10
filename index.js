const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

express()
    .use(express.static(path.join(__dirname,"/public")))
    .get("/",(req,res) => res.render("index"))
    .listen(port, () => console.log(`Port:\t${port}`));
