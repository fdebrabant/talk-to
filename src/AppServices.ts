import GameService from "services/GameService";

import data from "data/data.json";

export const gameService = new GameService(data);