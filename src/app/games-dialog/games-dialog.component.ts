import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { GameProfile } from '../../shared/model/game-profile';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games-dialog',
  standalone: true,
  imports: [MatDialogModule,MatSelectModule,MatButtonModule,FormsModule,CommonModule,RouterLink],
  templateUrl:'./games-dialog.component.html',
  styleUrl: './games-dialog.component.css'
})
export class GamesDialogComponent implements OnInit{
  selected? : GameProfile;
  @Input() name?: string;
  constructor(private gameService: GameService,@Inject(MAT_DIALOG_DATA) public id: number
  ) {}
  games: GameProfile[] = [];

  ngOnInit(): void {
    this.games = this.gameService.list();
  }

}