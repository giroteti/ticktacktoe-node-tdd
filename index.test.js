test("1x1 board => X won", () => {

    // Arrange
    const oneByOneBoard = "X";
    const boardSize = 1;
    let message = '';

    // Production
    message = getWinner(boardSize, oneByOneBoard, message);

    // Act
    // Assert
    expect(message).toBe(getXWonMessage())
});

function getWinner(boardSize, twoByTwoBoard, message) {
    let winningPattern = '';
    for (let i = 0; i < boardSize; i++) {
        winningPattern += "X";
    }
    if (twoByTwoBoard.includes(winningPattern)) {
        message = getXWonMessage()
    }
    return message;
}

test("2x2 board => X won", () => {

    // Arrange
    const twoByTwoBoard = "XX|0 ";
    const boardSize = 2;
    let message = '';

    // Production
    message = getWinner(boardSize, twoByTwoBoard, message);

    // Act
    // Assert
    expect(message).toBe(getXWonMessage())
});

function getXWonMessage() {
    return 'X won';
}

test('3 x 3 board and 3 X in lines => X won', () => {

    // Arrange
    const threeByThreeBoard = 'XXX|00 |   ';
    const boardSize = 3;
    let message = '';

    // Production
    message = getWinner(boardSize, threeByThreeBoard, message);

    // Act
    //Assert
    expect(message).toBe(getXWonMessage());
});

