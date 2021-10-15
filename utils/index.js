
const { Docu, Genre, Year, Rating, Favourite } = require("../models")

const add = async ({ add, name, id, rating }) => {
    if (add === "docu") {
        const genre = await Genre.findByPk(id);
        await Docu.create({ name }, { GenreId: genre.id });
        console.log("Done");
    } else if (add === "genre") {
        await Genre.create({ name });
        console.log("Done");
    } else if (add === "year") {
        await Year.create({ name });
        console.log("Done");
    } else if (add === "rating") {
        if (name < 0 || name > 10) {
            console.log("Please enter a number between 1 and 10")
        } else {
            await Rating.create({ name });
            console.log("Done");
        }
    } else if (add === "favourite") {
        if (name != "No" && name != "no" && name != "NO" && name != "N" && name != "n" && name != "Yes" && name != "YES" && name != "yes" && name != "Y" && name != "y") {
            console.log("Please enter Yes or No for the favourites category");
        } else {
            await Favourite.create({ name });
            console.log("Done");
        }
    }
};

const list = async ({ list, id }) => {
    let results = [];

    if (list === "docus") {
        results = await Docu.findAll({ attributes: ["id", "name"] });
    } else if (list === "genres") {
        results = await Genre.findAll({ attributes: ["id", "name"] });
    } else if (list === "years") {
        results = await Year.findAll({ attributes: ["id", "name"] });
    } else if (list === "ratings") {
        results = await Rating.findAll({ attributes: ["id", "name"] });
    } else if (list === "favourites") {
        results = await Favourite.findAll({ attributes: ["id", "name"] });
    }
    console.table(results.map(result => result.dataValues));
};

const update = async ({ update, id, name, genre }) => {
    if (update === "docu") {
        const docu = await Docu.findByPk(id);
        await Docu.update({ name: name || docu.name, GenreId: genre || docu.GenreId }, { where: { id } });
        console.log("Done");
    } else if (update === "genre") {
        const genre = await Genre.findByPk(id);
        await Genre.update({ name: name || genre.name }, { where: { id } });
        console.log("Done");
    } else if (update === "year") {
        const year = await Year.findByPk(id);
        await Year.update({ name: name || year.name }, { where: { id } });
        console.log("Done");
    } else if (update === "rating") {
        if (name < 0 || name > 10) {
            console.log("Please enter a number between 1 and 10")
        } else {
            const rating = await Rating.findByPk(id);
            await Rating.update({ name: name || rating.name }, { where: { id } });
            console.log("Done");
        }
    } else if (update === "favourite") {
        if (name != "No" && name != "no" && name != "NO" && name != "N" && name != "n" && name != "Yes" && name != "YES" && name != "yes" && name != "Y" && name != "y") {
            console.log("Please enter Yes or No for the favourites category");
        } else {
            const favourite = await Favourite.findByPk(id);
            await Favourite.update({ name: name || favourite.name }, { where: { id } });
            console.log("Done");
        }

    }
};

const remove = async ({ remove, id }) => {
    if (remove === "docu") {
        await Docu.destroy({ where: { id } });
        console.log("Deleted");
    } else if (remove === "genre") {
        await Genre.destroy({ where: { id } });
        console.log("Deleted");
    } else if (remove === "year") {
        await Year.destroy({ where: { id } });
        console.log("Deleted");
    } else if (remove === "rating") {
        await Rating.destroy({ where: { id } });
        console.log("Deleted");
    } else if (remove === "favourite") {
        await Favourite.destroy({ where: { id } });
        console.log("Deleted");
    }
};

module.exports = { add, list, update, remove };

// const listGenre = (id) => {

//     const genre = genres.find((genre) => genre.id === id);
//     const matchGenre = (genre) => genre.id !== id;
//     const genreList = genres.filter(matchGenre);

// }

// const docu = Docu.findAll({ where: { id } });
//  else if (favourite != "No" && favourite != "no" && favourite != "NO" && favourite != "N" && favourite != "n" && favourite != "Yes" && favourite != "YES" && favourite != "yes" && favourite != "Y" && favourite != "y") {
//     console.log("Please enter Yes or No for the favourites category");
// } else {
//     await Docu.update({
//         title: title || docu.title,
//         genre: genre || docu.genre,
//         year: year || docu.year,
//         rating: rating || docu.rating,
//         favourite: favourite || docu.favorite
//     }, { where: { id } });
//     console.log("Your documentary has been updated.")
// };
// const remove = async (id) => {
//     await Docu.destroy({ where: { id } });
//     console.log("Your documentary has been removed.")
// }