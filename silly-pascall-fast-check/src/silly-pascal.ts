function isLetter(character: string): boolean {
  const asciiCode: number = character.charCodeAt(0);
  if (asciiCode < 65 || (asciiCode > 90 && asciiCode < 97) || asciiCode > 122)
    return false;
  return true;
}

function isNumber(character: string): boolean {
  const asciiCode: number = character.charCodeAt(0);
  if (asciiCode > 47 && asciiCode < 58) return true;
  return false;
}

export default function isValid(input: string): boolean {
  console.log(input);
  if (input.length < 1 || input.length > 6) return false;

  const characters: Array<string> = input.split('');

  if (!isLetter(characters[0])) return false;

  let silly: boolean = true;

  characters.forEach((character) => {
    if (!isLetter(character) && !isNumber(character)) silly = false;
  });

  return silly;
}
