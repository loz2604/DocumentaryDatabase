const fs = require("fs");
const path = require("path");
const { nanoid, customAlphabet } = require("nanoid");
const dataPath = path.join(process.env.DATA_LOCATION, "data.json");

const saveData = (data) => {
    try {
        if (!fs.existsSync(process.env.DATA_LOCATION)) {
            fs.mkdirSync(process.env.DATA_LOCATION);
        }
        fs.writeFileSync(dataPath, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

const loadData = () => {
    try {
        const buffer = fs.readFileSync(dataPath);
        return JSON.parse(buffer.toString());
    } catch (error) {
        return [];
    }
};

const makeId = () => customAlphabet(process.env.CHARACTERS, parseInt(process.env.LENGTH))();

const add = (title, genre, year, rating = "No Rating", favourite = "No", id = false) => {
    if (rating < 0 || rating > 10) {
        console.log("Please give a rating between 1 and 10");
        saveData([...loadData(), { id: id || makeId(), title, genre, year, favourite }]);
    } else if (favourite === "No" || favourite === "no" || favourite === "NO" || favourite === "N" || favourite === "n" || favourite === "Yes" || favourite === "YES" || favourite === "yes" || favourite === "Y" || favourite === "y") {
        saveData([...loadData(), { id: id || makeId(), title, genre, year, rating, favourite }]);
    } else {

        console.log("Please enter Yes or No for the favourites category");
        saveData([...loadData(), { id: id || makeId(), title, genre, year, rating }]);
    }
};

const list = () => console.log(loadData());

// const listGenre = (id) => {
//     const genres = loadData();
//     console.log(genres)
//     const genre = genres.find((genre) => genre.id === id);
//     const matchGenre = (genre) => genre.id !== id;
//     const genreList = genres.filter(matchGenre);

// }

const update = (id, title, genre, year, rating, favourite) => {
    const docu = remove(id);
    add(title || docu.title, genre || docu.genre, year || docu.year, rating || docu.rating, favourite || docu.favorite, id);
};

const remove = (id) => {
    const docus = loadData();
    const docu = docus.find((docu) => docu.id === id);
    const matchDocu = (docu) => docu.id !== id;
    saveData(docus.filter(matchDocu));
    return docu;
};

module.exports = { add, list, update, remove };