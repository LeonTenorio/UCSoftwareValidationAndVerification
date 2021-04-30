function isLetter(character: string): boolean {
  const asciiCode: number = character.charCodeAt(0);
  if (asciiCode < 65 || (asciiCode > 90 && asciiCode < 97) || asciiCode > 122)
    return false;
  return true;
}

function isNumber(character: string): boolean {
  const asciiCode: number = character.charCodeAt(0);
  if (asciiCode < 48 && asciiCode > 57) return false;
  return true;
}

export default function isValid(input: string): boolean {
  if (input.length < 1 || input.length > 6) return false;

  const characters: Array<string> = input.split('');

  if (!isLetter(characters[0])) return false;

  characters.forEach((character) => {
    if (!isLetter(character) && !isNumber(character)) return false;
  });

  return true;
}
