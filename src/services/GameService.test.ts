import {GameService} from "./GameService.ts";
import data from '../data/data.json'

describe('GameService', () => {
    test('should be instance of GameService', () => {
        const gameService = new GameService(data);
        expect(gameService).toBeInstanceOf(GameService)
    });

    test('When instantiate game, conversation should be empty ', () => {
        const gameService = new GameService(data);
        expect(gameService.conversation).toEqual([])
    });

    test('should return first message', () => {
        const gameService = new GameService(data);
        const firstMessage = gameService.firstMessage();
        expect(firstMessage).toEqual({
            questions: ["What's your favorite color?"],
            answers: ["Purple", "Yellow", "Pink"]
        })
    })

    test('should return error when first message doesnt exist', () => {
        const gameService = new GameService([]);
        expect(() => gameService.firstMessage()).toThrow('Start Item doesnt exist')
    })
});