const characters: string[] = ["A", "B"];

const diamond = {  
  
  print(character: string): string {
    if (!character) {
      return "";
    }
    else if (character === "A"){
      return "A";
    }
    else{
      let result: string = "";
      const charPos = characters.indexOf(character);
      for (let i = 0; i < charPos; i++) {
        result += " " + characters[i] + " \n";
      }
      result += characters[charPos] + " " + characters[charPos] + "\n";
      for (let i = charPos - 1; i >= 0; i--) {
        result += " " + characters[i] + " \n";
      }

      return result;
    }
  }

};

export default diamond;

