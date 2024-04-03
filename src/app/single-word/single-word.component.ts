import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatedWord } from '../../shared/model/translated-word';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WordStatus } from '../../matching-game-module/word-status';

@Component({
  selector: 'app-single-word',
  standalone: true,
  imports: [FormsModule,CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './single-word.component.html',
  styleUrl: './single-word.component.css'
})
export class SingleWordComponent {
  @Input()
  singleword? : string
  @Input() status? :WordStatus

}