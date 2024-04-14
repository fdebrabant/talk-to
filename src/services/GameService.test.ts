import GameService  from "./GameService.ts";
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

  test("should return first message", async () => {
    const gameService = new GameService(data);
    const firstMessage = await gameService.firstMessage();

    expect(firstMessage).toEqual({
      questions: ["What's your favorite color?"],
      answers: ["Purple", "Yellow", "Pink"],
      selectedAnswer: null,
    });
  });

  test("should return error when message doesn't exist", async () => {
    const gameService = new GameService([]);

    await expect(gameService.getMessage("Start")).rejects.toEqual(
      new Error("Data Item doesn't exist")
    );
  });

  test("One given answer should return message", async () => {
    const gameService = new GameService(data);
    const message = await gameService.getMessage("Purple");
    expect(message).toEqual({
      questions: ["Cool! Whats your favorite purple object?"],
      answers: ["Car", "lavander", "Eggplant"],
      selectedAnswer: null,
    });
  });

  test("should add message to conversation when answer is selected", async () => {
    const gameService = new GameService(data);
    await gameService.firstMessage();
    await gameService.getMessage("Purple");
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
