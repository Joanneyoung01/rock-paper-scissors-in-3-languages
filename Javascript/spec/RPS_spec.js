describe("Rock Paper Scissors Game", () => {
  var RPS = new rockPaperScissors;
  
  it("should output draw if both plays are the same", () => {
    expect(RPS.play("Rock", "Rock")).toEqual("Draw!");
  })

  it("can determine when player one wins", () => {
    expect(RPS.play("Rock", "Scissors")).toEqual("Player one won!");
  })

  it("can determine when player two wins", () => {
    expect(RPS.play("Rock", "Paper")).toEqual("Player two won!");
  })

})