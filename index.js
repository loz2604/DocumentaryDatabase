require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { connection } = require("./connection");
const { Docu } = require("./models");
const { add, list, update, remove } = require("./utils/")

const argv = yargs(hideBin(process.argv)).argv;

const main = async () => {
    try {
        await connection.authenticate();
        await Docu.sync({ alter: true });
        console.log(`Connection to ${process.env.DB_HOST} established.`);

        if (argv.add) {
            await add(argv.title, argv.genre, argv.year, argv.rating, argv.favourite);
        } else if (argv.list) {
            await list();
        } else if (argv.remove) {
            await remove(argv.id);
        } else if (argv.update) {
            await update(argv.id, argv.title, argv.genre, argv.year, argv.rating, argv.favourite)
        }
        await connection.close();
    } catch (error) {
        console.error(`Unable to connect to the DB: ${error}`)
    }
    process.exit();
}
main();
