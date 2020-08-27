## Rock Paper Scissors - TypeScript
Let's play! You have to return which player won! In case of a draw return Draw!.

# Instructions
1. cd 'RPS - JavaScript'
2. Open src > RPS.js in browser, open dev console
3. Run the tests by opening src > SpecRunner.html

Examples:
`var rps = new rockPaperScissors`
`rps.play('scissors','paper')` // Player 1 won!
`rps.play('scissors','rock')` // Player 2 won!
`rps.play('paper','paper')` // Draw!

- User will input rock paper or scissors for player one and player two
- User will display 'Player one Won', 'Player Two won' or 'Draw' 

# Rules:
Input                    Output 
"Rock", "Rock"           "Draw"
"Rock", "Scissors"       "Player one won!"
"Rock", "Paper"          "Player two won!"

"Scissors", "Scissors"   "Draw"
"Scissors", "Rock"       "Player two won"
"Scissors", "Paper"      "Player one won"

"Paper", "Paper"         "Draw"
"Paper", "Scissors"      "Player two won"
"Paper", "Rock"          "Player one won"

First test: Both inputs are the same
Second test: Player one will win
Third test: Player two will win 