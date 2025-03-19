const express = require("express");
const router = express.Router();
const { getPostById } = require("../dataprovider");

router.get("/:id", (req, res) => {
    const lang = req.query.lan || "en";
    const lugar = getPostById(req.params.id, lang);

    if (!lugar) {
        return res.status(404).send(lang === "en" ? "Place not found" : "Lugar no encontrado");
    }

    res.render("lugar", { lugar, lang });
});

module.exports = router;
