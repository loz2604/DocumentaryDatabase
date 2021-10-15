require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { connection } = require("./connection");
const { Docu, Genre, Year, Rating, Favourite } = require("./models");
const { add, list, update, remove } = require("./utils/")
const argv = yargs(hideBin(process.argv)).argv;

const main = async () => {
    try {
        await connection.authenticate();
        await Docu.sync({ alter: true });
        await Genre.sync({ alter: true });
        await Year.sync({ alter: true });
        await Rating.sync({ alter: true });
        await Favourite.sync({ alter: true });

        if (argv.add) {
            await add(argv);
        } else if (argv.list) {
            await list(argv);
        } else if (argv.remove) {
            await remove(argv);
        } else if (argv.update, argv.id) {
            await update(argv)
        }
        await connection.close();
    } catch (error) {
        console.error(`Unable to connect to the DB: ${error}`)
    }
    process.exit();
}
main();
