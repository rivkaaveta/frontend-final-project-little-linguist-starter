import { Injectable } from '@angular/core';
import { GamePlayed } from '../../shared/model/game-played';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private readonly POINTS_KEY = 'points';
  private readonly NEXT_ID_KEY = 'pointId';

  private getPoints() : Map<number, GamePlayed>{
    let pointsString = localStorage.getItem(this.POINTS_KEY);

    if (!pointsString) {
      return new Map<number, GamePlayed>();
    } else {
      return new Map<number, GamePlayed>(JSON.parse(pointsString));
    }
  }

  private getNextId() : number {
    let nextIdString = localStorage.getItem(this.NEXT_ID_KEY); 

    return nextIdString ? parseInt(nextIdString) : 0;
  }

  private setPoints(list : Map<number, GamePlayed>) : void {
    localStorage.setItem(this.POINTS_KEY, JSON.stringify(Array.from(list)));
  }

  private setNextId(id : number) : void {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  list() : GamePlayed[] {
    return Array.from(this.getPoints().values());
  }

  get(id : number) : GamePlayed | undefined {
    return this.getPoints().get(id);
  }
  add(game : GamePlayed) : void {
    game.gameId = this.getNextId();
    

    let pointsMap = this.getPoints();
    pointsMap.set(game.gameId, game);

    this.setPoints(pointsMap);
    this.setNextId(++game.gameId);
  }
}


