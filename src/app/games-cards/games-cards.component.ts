import { Component, Input } from '@angular/core';
import { Category } from '../../shared/model/category';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GamesDialogComponent } from '../games-dialog/games-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { endOfWeek, isWithinInterval, startOfWeek, subWeeks } from 'date-fns';

@Component({
  selector: 'app-games-cards',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './games-cards.component.html',
  styleUrl: './games-cards.component.css',
})
export class GamesCardsComponent {
  @Input()
  currentCategory?: Category;
  constructor(private dialogService: MatDialog) {}

  openGame(id?: number) {
    this.dialogService.open(GamesDialogComponent, {
      data: id,
    });
  }
  wasRecentlyUpdated(): boolean {
    return this.isDateInLastWeek(
      new Date(this.currentCategory?.lastUpdateDate!)
    );
  }

  isDateInLastWeek(dateToCheck: Date): boolean {
    const startOfLastWeek = startOfWeek(subWeeks(new Date(), 0));
    const endOfLastWeek = endOfWeek(subWeeks(new Date(), 0));

    return isWithinInterval(dateToCheck, {
      start: startOfLastWeek,
      end: endOfLastWeek,
    });
  }
}
