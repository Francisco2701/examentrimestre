const express = require("express");
const app = express();
const path = require("path");
const { getCategories } = require("./dataprovider");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    const lang = req.query.lan || "en";
    res.locals.categories = getCategories(lang);  
    res.locals.lang = lang;  
    next();
});

app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/home");
const categoriaRoutes = require("./routes/categoria");
const lugaresRoutes = require("./routes/lugares");

app.use("/", homeRoutes);
app.use("/categoria", categoriaRoutes);
app.use("/lugar", lugaresRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
});
