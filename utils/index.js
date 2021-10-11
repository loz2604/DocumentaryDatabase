
const { Docu } = require("../models")

const add = async (title, genre, year, rating = "No Rating", favourite = "No") => {
    if (rating < 0 || rating > 10) {
        console.log("Please give a rating between 1 and 10");
    } else if (favourite != "No" && favourite != "no" && favourite != "NO" && favourite != "N" && favourite != "n" && favourite != "Yes" && favourite != "YES" && favourite != "yes" && favourite != "Y" && favourite != "y") {
        console.log("Please enter Yes or No for the favourites category");
    } else {
        await Docu.create({ title, genre, year, rating, favourite })
    }
    console.log("Your documentary has been added.")
};

const list = async () => {
    console.log("\n");
    for (const docu of await Docu.findAll()) {
        console.log(`ID:\t\t${docu.id}`);
        console.log(`Title:\t\t${docu.title}`);
        console.log(`Genre:\t\t${docu.genre}`);
        console.log(`Year:\t\t${docu.year}`);
        console.log(`Rating:\t\t${docu.rating}`);
        console.log(`Favourite:\t${docu.favourite}\n\n`);
    }
}


const update = async (id, title, genre, year, rating = "No Rating", favourite = "No") => {
    const docu = Docu.findAll({ where: { id } });
    if (rating < 0 || rating > 10) {
        console.log("Please give a rating between 1 and 10");
    } else if (favourite != "No" && favourite != "no" && favourite != "NO" && favourite != "N" && favourite != "n" && favourite != "Yes" && favourite != "YES" && favourite != "yes" && favourite != "Y" && favourite != "y") {
        console.log("Please enter Yes or No for the favourites category");
    } else {
        await Docu.update({
            title: title || docu.title,
            genre: genre || docu.genre,
            year: year || docu.year,
            rating: rating || docu.rating,
            favourite: favourite || docu.favorite
        }, { where: { id } });
        console.log("Your documentary has been updated.")
    };
}


const remove = async (id) => {
    await Docu.destroy({ where: { id } });
    console.log("Your documentary has been removed.")
}
module.exports = { add, list, update, remove };

// const listGenre = (id) => {

//     const genre = genres.find((genre) => genre.id === id);
//     const matchGenre = (genre) => genre.id !== id;
//     const genreList = genres.filter(matchGenre);

// }