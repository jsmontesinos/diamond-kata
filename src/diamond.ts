const characters: string[] = ["A", "B", "C", "D", "E"];

function getEdge(externalEspaces: number): string {
  return " ".repeat(externalEspaces) + "A" + " ".repeat(externalEspaces);
}

function getRow(character: string, internalEspaces: number, externalEspaces: number): string {
  if (character === "A") {
    return getEdge(externalEspaces);
  }
  return " ".repeat(externalEspaces) + character + " ".repeat(internalEspaces) + character + " ".repeat(externalEspaces);
}

const diamond = {  
  
  print(character: string): string {
    if (!character || characters.indexOf(character) < 0) {
      return "";
    }

    const charPos = characters.indexOf(character);
    const diamondLines = 
      characters
        .slice(0, charPos + 1)
        .map((c, i) => getRow(c, (i * 2) - 1, charPos - i));
    
    return diamondLines.concat(diamondLines.slice().reverse().slice(1)).join("\n");

  }

};

export default diamond;

