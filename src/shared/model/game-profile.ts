import { GameDifficulty } from "./game-difficulty";
export class GameProfile {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public gamedifficulty: GameDifficulty,
    public url: string,
  ) {
    
  }
}
