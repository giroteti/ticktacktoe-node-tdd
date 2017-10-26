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

test("2x2 board => X won", () => {

    // Arrange
    const twoByTwoBoard = "XX|0 ";
    let message = '';

    // Production
    if (twoByTwoBoard.includes("XX")) {
        message = 'X won'
    }
    // Act
    const actual = message;

    // Assert
    expect(actual).toBe('X won')
})

test('3 x 3 board and 3 X in lines => X won', () => {

    // Arrange
    const threeByThreeBoard = 'XXX|00 |   ';
    let message = '';

    // Production
    if (threeByThreeBoard.includes("XXX")) {
        message = 'X won'
    }

    // Act
    const actual = message;

    //Assert
    expect(actual).toBe("X won");
});