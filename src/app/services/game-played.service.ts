import { Injectable } from '@angular/core';
import { GamePlayed } from '../../shared/model/game-played';

@Injectable({
  providedIn: 'root'
})
export class GamePlayedService {
  private readonly NEXT_ID_KEY = "nextId";
  private readonly GAME_KEY = "games";

  constructor() { }

  private getNextId() : number {
    const nextIdString = localStorage.getItem(this.NEXT_ID_KEY);

    return nextIdString ? parseInt(nextIdString) : 0;
  }

  private setNextId(id : number) {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  private setGames(allGames : Map<number, GamePlayed>) {
    localStorage.setItem(this.GAME_KEY,
      JSON.stringify(Array.from(allGames.values())));
  }

  private getGames() : Map<number, GamePlayed> {
    const gameString = localStorage.getItem(this.GAME_KEY);
    const idToGame = new Map<number, GamePlayed>();

    if (gameString) {
      JSON.parse(gameString).forEach((game : GamePlayed) => {
        Object.setPrototypeOf(game, GamePlayed.prototype)
        idToGame.set(game.gameId, game);
      });
    }

    return idToGame;
  }

  list() : GamePlayed[] {
    return Array.from(this.getGames().values());
  }

  get(id : number) : GamePlayed | undefined {
    return this.getGames().get(id);
  }

  addGamePlayed(newGameData:GamePlayed) {
    let nextId = this.getNextId();
    newGameData.gameId = nextId

    const gamesData = this.getGames();
    gamesData.set(nextId, newGameData);
    this.setGames(gamesData);

    this.setNextId(++nextId);
  }
 
}
