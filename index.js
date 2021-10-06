require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { add, list, update, remove } = require("./utils/")

console.log(process.argv)

const main = () => {
    if (argv.add) {
        add(argv.title, argv.genre, argv.year, argv.rating, argv.favourite)
    } else if (argv.update) {
        update(argv.id, argv.title, argv.genre, argv.year, argv.rating, argv.favourite)
    } else if (argv.list) {
        list(argv.title, argv.genre, argv.year, argv.rating, argv.favourite)
    }
    else if (argv.remove) {
        remove(argv.id)
    }
}
main();

   // } else if (argv.list.genre === "Political") {
        //     list(argv.title, argv.genre, argv.year)
