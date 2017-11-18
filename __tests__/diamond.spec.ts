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

    expect(output).toBe(" A \nB B\n A ");
  });

  it('should return C diamond if input is C', () => {
    const input = "C";
    
    const output = diamond.print(input);

    expect(output).toBe("  A  \n B B \nC   C\n B B \n  A  ");
  });

  it('should return empty diamond if input is 1', () => {
    const input = "1";
    
    const output = diamond.print(input);

    expect(output).toBe("");
  });

  it('should return D diamond if input is D', () => {
    const input = "D";
    
    const output = diamond.print(input);

    expect(output).toBe("   A   \n  B B  \n C   C \nD     D\n C   C \n  B B  \n   A   ");
  });

  it('should return E diamond if input is E', () => {
    const input = "E";
    
    const output = diamond.print(input);

    expect(output).toBe("    A    \n   B B   \n  C   C  \n D     D \nE       E\n D     D \n  C   C  \n   B B   \n    A    ");
  });

});
