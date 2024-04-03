import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/game-profile';
import { GameDifficulty } from '../../shared/model/game-difficulty';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public allGames: GameProfile[]=[
  new GameProfile(1,"Matching Game","Each word must be matched with its translation",GameDifficulty.Medium,'/matching-game'),
  new GameProfile(4,"Messy words Game ","The task in the game is to arrange the letters of the English word in the correct order",GameDifficulty.Medium,'/messy-words'),

  ]  

  constructor() { }
  list() : GameProfile[] {
    return this.allGames;
    }
}
