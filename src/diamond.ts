const characters: string[] = ["A", "B", "C", "D", "E"];

function getEdge(externalEspaces: number): string {
  return " ".repeat(externalEspaces) + "A" + " ".repeat(externalEspaces);
}

function getRow(character: string, internalEspaces: number, externalEspaces: number): string {
  return " ".repeat(externalEspaces) + character + " ".repeat(internalEspaces) + character + " ".repeat(externalEspaces);
}

const diamond = {  
  
  print(character: string): string {
    const diamondLines: string[] = [];
    if (!character || characters.indexOf(character) < 0) {
      return "";
    }
    
    if (character === "A"){
      return getEdge(0);
    }
    
    const charPos = characters.indexOf(character);
    diamondLines.push(getEdge(charPos));
    for (let i = 1; i < charPos; i++) {
      diamondLines.push(getRow(characters[i], (i * 2) - 1, charPos - i));
    }
    const diamondMiddle = getRow(characters[charPos], (charPos * 2) - 1, 0);
    
    return diamondLines.join("\n").concat("\n").concat(diamondMiddle).concat("\n").concat(diamondLines.reverse().join("\n"));

  }

};

export default diamond;

