test("1x1 board => X won", () => {

    // Arrange
    const oneToOneBoard = "X";

    // Production
    let message = '';
    if (oneToOneBoard.includes("X")) {
        message = 'X won'
    }
    // Act

    // Assert
    expect(message).toBe('X won')
});