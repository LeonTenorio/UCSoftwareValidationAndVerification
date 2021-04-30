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
    if (asciiCode < 48 && asciiCode > 57)
        return false;
    return true;
}
function isValid(input) {
    if (input.length < 1 || input.length > 6)
        return false;
    const characters = input.split('');
    if (!isLetter(characters[0]))
        return false;
    characters.forEach((character) => {
        if (!isLetter(character) && !isNumber(character))
            return false;
    });
    return true;
}
exports.default = isValid;
