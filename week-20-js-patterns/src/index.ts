import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayerName: "Deependra",
        blackPlayerName: "Raman",
        moves: []
    })
}, 5000);

