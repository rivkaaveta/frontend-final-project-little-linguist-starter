import { Component } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  GamesCardsComponent } from '../games-cards/games-cards.component';

@Component({
  selector: 'app-game-view',
  standalone: true,
  imports: [FormsModule,CommonModule, GamesCardsComponent],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.css'
})
export class GameViewComponent {
  allCategory : Category[] = [];
  readonly PERSONS_PER_TEAM = 4;
  constructor(private categoriesService : CategoriesService) {}
  ngOnInit(): void {
  this.allCategory = this.categoriesService.list();
  }
 

}
