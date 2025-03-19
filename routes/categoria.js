const express = require("express");
const router = express.Router();
const { getPostsByCategory } = require("../dataprovider");

router.get("/:categoria", (req, res) => {
    const lang = req.query.lan || "en";  
    const categoria = req.params.categoria;
    const places = getPostsByCategory(categoria, lang);

    if (places.length === 0) {
        return res.status(404).send(lang === "en" ? "Category not found" : "Categoría no encontrada");
    }

    res.render("categoria", { categoria, places, lang });
});

module.exports = router;
