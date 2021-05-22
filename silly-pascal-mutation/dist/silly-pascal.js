"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLetter(character) {
    const asciiCode = character.charCodeAt(0);
    if (asciiCode < 65 || (asciiCode > 90 && asciiCode < 97) || asciiCode > 122)
        return false;
    return true;
}
function isNumber(character) {
    const asciiCode = character.charCodeAt(0);
    if (asciiCode > 47 && asciiCode < 58)
        return true;
    return false;
}
function isValid(input) {
    if (input.length < 1 || input.length > 6)
        return false;
    const characters = input.split('');
    if (!isLetter(characters[0]))
        return false;
    let silly = true;
    characters.forEach((character) => {
        if (!isLetter(character) && !isNumber(character))
            silly = false;
    });
    return silly;
}
exports.default = isValid;
