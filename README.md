# TIC TAC TOE (Game)

I created this game using JAVASCRIPT. For some styling
I've used Bootstrap+CSS(own-written). Basically I planned
the game to play against computer, but currently the
computer player functionality is not available. 

In future, I'll make it able to play againts user 
using heuristic approach.

### Basically the code consists of 5 functions:

```
handleMarkSelection()
handlePlayerTurn()
handleCellClick()
cellIsEmpty()
handleResults()
```

- **handleMarkSelection()-** In the game we have two basic marks (X/O). if the user
selects X, then the function will set userMark=X, and automatically the second mark
will be assigned to computer player. i.e computerMark=O and also it disables the 
computer selected mark button.

- **handlePlayerTurn()-** informs the user whether its his/her turn or the computer's
turn.

- **handleCellClick()-** Keeps track of cell(div-block) clicked by user/computer to
mark it. first it checks for whether the cell clicked is empty and game is not over yet.
it thats the case, then clicked cell will be marked with player(user/computer)'s symbol.

- **cellIsEmpty()-** it checks whether the cell with specific index is empty or filled.
it its empty return True, otherwise False.

- **handleResults()-** This function constantly checks for winning conditions for 
both user and computer. it validates results after each move played by either user
or computer. it checks for 3 situations.

   - **User Won the Game?**
   - **Computer Won the Game?**
   - **The game is Draw?**
