test("1x1 board => X won", () => {

    // Arrange
    const oneByOneBoard = "X";
    let message = '';

    // Production
    if (oneByOneBoard.includes("X")) {
        message = 'X won'
    }
    // Act
    const actual = message;

    // Assert
    expect(actual).toBe('X won')
});

test("2x3 board => X won", () => {

    // Arrange
    const twoByTwoBoard = "XX|0 ";
    let message = '';

    // Production
    if (twoByTwoBoard.includes("XX")) {
        message = 'X won';
    }
    // Act
    const actual = message;

    // Assert
    expect(actual).toBe('X won')
})