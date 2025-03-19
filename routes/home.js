const express = require("express");
const router = express.Router();
const { getAllPosts } = require("../dataprovider");

router.get("/", (req, res) => {
    const lang = req.query.lan || "en";  
    const places = getAllPosts(lang);  

    res.render("home", { title: "Tourism in Málaga", places, lang });
});

module.exports = router;
