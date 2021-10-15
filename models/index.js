const { DataTypes } = require("sequelize");
const { connection } = require("../connection");


const Docu = connection.define("Docu", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [{ unique: true, fields: ["name"] }]
});

const Genre = connection.define("Genre", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Year = connection.define("Year", {
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Rating = connection.define("Rating", {
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Favourite = connection.define("Favourite", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [{ unique: true, fields: ["name"] }]
});


Docu.belongsTo(Genre, { onDelete: "cascade" });
Docu.belongsTo(Year, { onDelete: "cascade" });
Docu.belongsTo(Rating, { onDelete: "cascade" });
Docu.belongsTo(Favourite, { onDelete: "cascade" });

module.exports = { Docu, Genre, Year, Rating, Favourite };