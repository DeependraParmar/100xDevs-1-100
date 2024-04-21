// today's stuff is to make this store.js better and better.

// Approach 01: create a high level games array and push every move after 5 seconds.

interface Game{
    id: string,
    whitePlayerName: string,
    blackPlayerName: string,
    moves: string[];
}

export const games: Game[] = [];


// Approach 02: create a class, define the functions and do more definite operations.
export class GamaManager{
    games:  Game[] = [];
    constructor(){
        this.games = [];
    }

    addMove(gameId: string, move: string){
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId: string){
        const game: Game = {
            id: gameId,
            whitePlayerName: 'Deependra',
            blackPlayerName: 'Raman',
            moves: [],
        }

        this.games.push(game);
    }
}

export const gameManager = new GamaManager();


// Approach 03: singleton pattern: enforce using a single instance of GameManager in order to get rid of problem of multi-instances and saving its games in db.
// How to do it? ------> Make the constructor private
// How to make the first instance of the class? -------> make the methods/functions static and call the functions with class.