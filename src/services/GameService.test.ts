import { GameService } from "./GameService.ts";
import data from "../data/data.json";

describe("GameService", () => {
  test("should be instance of GameService", () => {
    const gameService = new GameService(data);
    expect(gameService).toBeInstanceOf(GameService);
  });

  test("When instantiate game, conversation should be empty ", () => {
    const gameService = new GameService(data);
    expect(gameService.conversation).toEqual([]);
  });

  test("should return first message", () => {
    const gameService = new GameService(data);
    const firstMessage = gameService.firstMessage();
    expect(firstMessage).toEqual({
      questions: ["What's your favorite color?"],
      answers: ["Purple", "Yellow", "Pink"],
      selectedAnswer: null,
    });
  });

  test("should return error when message doesn't exist", () => {
    const gameService = new GameService([]);
    expect(() => gameService.getMessage("Start")).toThrow(
      "Data Item doesn't exist"
    );
  });

  test("One given answer should return message", () => {
    const gameService = new GameService(data);
    const message = gameService.getMessage("Purple");
    expect(message).toEqual({
      questions: ["Cool! Whats your favorite purple object?"],
      answers: ["Car", "lavander", "Eggplant"],
      selectedAnswer: null,
    });
  });

  test("should add message to conversation when answer is selected", () => {
    const gameService = new GameService(data);
    gameService.firstMessage();
    gameService.getMessage("Purple");
    expect(gameService.conversation).toEqual([
      {
        questions: ["What's your favorite color?"],
        answers: ["Purple", "Yellow", "Pink"],
        selectedAnswer: "Purple",
      },
      {
        questions: ["Cool! Whats your favorite purple object?"],
        answers: ["Car", "lavander", "Eggplant"],
        selectedAnswer: null,
      },
    ]);
  });
});
