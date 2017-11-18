import diamond from '../src/diamond';

describe('diamond kata', () => {
  
  it('should return empty if input is null', () => {
    const input = null;
    
    const output = diamond.print(input);

    expect(output).toBe("");
  });

  it('should return empty if input is empty', () => {
    const input = "";
    
    const output = diamond.print(input);

    expect(output).toBe("");
  });

  it('should return A if input is A', () => {
    const input = "A";
    
    const output = diamond.print(input);

    expect(output).toBe("A");
  });

  it('should return B diamond if input is B', () => {
    const input = "B";
    
    const output = diamond.print(input);

    expect(output).toBe(" A \nB B\n A \n");
  });

  it('should return C diamond if input is C', () => {
    const input = "C";
    
    const output = diamond.print(input);

    expect(output).toBe("  A  \n B B \nC   C\n B B \n  A  \n");
  });

});
