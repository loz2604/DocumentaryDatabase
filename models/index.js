const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Docu = connection.define("Docu", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favourite: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    //  Making sure the title field is unique, so that there are no duplicates
    indexes: [{ unique: true, fields: ["title"] }]
});

module.exports = { Docu };