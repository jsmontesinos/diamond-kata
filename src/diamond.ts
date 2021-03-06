const characters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getEdge(externalEspaces: number): string {
  return " ".repeat(externalEspaces) + "A" + " ".repeat(externalEspaces);
}

function getRow(character: string, internalEspaces: number, externalEspaces: number): string {
  if (character === "A") {
    return getEdge(externalEspaces);
  }
  return " ".repeat(externalEspaces) + character + 
    " ".repeat(internalEspaces) + character + " ".repeat(externalEspaces);
}

/**
 * Diamond kata: This is an implementation of diamond kata
 */
const diamond = {  
  
  /**
   * Call this function to create a diamond from a character
   * @param character Character to generate the diamond from
   */
  create(character: string): string {
    if (!character || characters.indexOf(character) < 0) {
      return "";
    }

    const charPos = characters.indexOf(character);
    const diamondLines = 
      characters
        .slice(0, charPos + 1)
        .map((c: string, i: number) => getRow(c, (i * 2) - 1, charPos - i));
    
    return diamondLines.concat(diamondLines.slice().reverse().slice(1)).join("\n");

  }

};

export default diamond;
