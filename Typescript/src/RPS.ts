class rockPaperScissors {

  play = (input1:string, input2:string) => {

    const BEATS = {
      Paper: "Rock",
      Scissors: "Paper",
      Rock: "Scissors",
    }

   if (input1 === input2) return "Draw!"

   if (BEATS[input1] === input2) return "Player one won!"

   if (BEATS[input2] === input1) return "Player two won!"

  }

}