function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    // floor( (0 - 0.99~) * (max(10) - min(5) + 1)[0*6 to 0.99~*6 == 0 to 5.99~] ) + min(5) == 5 to 10 [(0 to 5.99~ floored) + 5]
}

function getUUID() {
    let len = 30

    let characters = [
        [48, 57], // num unicode (min, max)
        [65, 90], // upper unicode (min, max)
        [97, 122], // lower unicode (min, max)
    ]

    let result = []
    for (i = 0; i < len; i++) {
        let charSet = getRandomNumber(0, characters.length-1)
        result.push(getRandomNumber(characters[charSet][0], characters[charSet][1]))
    }

    return String.fromCharCode(...result)
}

module.exports = getUUID