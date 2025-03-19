const path = require("path");

const dataFilePath = path.join(__dirname, "data", "data.json");
const posts = require(dataFilePath);  

function getAllPosts(lang) {
    return posts[lang] || [];
}

function getPostById(id, lang) {
    return (posts[lang] || []).find(a => a.id == id);
}

function getCategories(lang) {
    return [...new Set((posts[lang] || []).map(post => post.category))];
}

function getPostsByCategory(category, lang) {
    return (posts[lang] || []).filter(post => post.category === category);
}

module.exports = {
    getAllPosts,
    getPostById,
    getCategories,
    getPostsByCategory
};
