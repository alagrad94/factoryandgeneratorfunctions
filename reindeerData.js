const colorGenerator = function* () {

    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter += 1
    }
}

const reindeerFactory = function (name, color) {
    return Object.create({}, {

            "name" : {
                value: name
            },
            "color": {
                value: color
            }
    })
}
const reindeerColor = colorGenerator();

let coloredReindeer = [];
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    for (let i = 0; i < reindeer.length; i++) {
        const name = reindeer[i];
        const color = reindeerColor.next().value;
        const newColoredReindeer = reindeerFactory(name, color);
        coloredReindeer.push(newColoredReindeer);
    }
}
coloredReindeerBuilder();
santasReinbow.reindeerDom(coloredReindeer)