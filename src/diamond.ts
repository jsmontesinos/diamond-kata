const characters: string[] = ["A", "B", "C", "D"];

function getEdge(externalEspaces: number): string {
  return " ".repeat(externalEspaces) + "A" + " ".repeat(externalEspaces) + "\n";
}

function getRow(character: string, internalEspaces: number, externalEspaces: number): string {
  return " ".repeat(externalEspaces) + character + " ".repeat(internalEspaces) + character + " ".repeat(externalEspaces) + "\n";
}

const diamond = {  
  
  print(character: string): string {
    if (!character || characters.indexOf(character) < 0) {
      return "";
    }
    
    if (character === "A"){
      return "A";
    }
    
    const charPos = characters.indexOf(character);
    let result: string = getEdge(charPos);
    for (let i = 1; i < charPos; i++) {
      result += getRow(characters[i], (i * 2) - 1, charPos - i);
    }
    result += getRow(characters[charPos], (charPos * 2) - 1, 0);
    for (let i = charPos - 1; i > 0; i--) {
      result += getRow(characters[i], (i * 2) - 1, charPos - i);
    }
    result += getEdge(charPos);

    return result;

  }

};

export default diamond;

