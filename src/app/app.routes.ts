import { Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { GamesCardsComponent } from './games-cards/games-cards.component';
import { GameViewComponent   } from './game-view/game-view.component';
import { TranslationGameComponent } from './translation-game/translation-game.component';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { GamesDialogComponent } from './games-dialog/games-dialog.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessyWordsComponent } from './messy-words/messy-words.component';

export const routes: Routes = [
    {path: "category-list", component: CategoriesListComponent},
    {path: "category/:id", component: CategoryFormComponent},
    {path: "newcategory", component: CategoryFormComponent},
    {path: "games-cards", component: GamesCardsComponent},
    {path: "game-view", component: GameViewComponent},
    {path: "matching-game/:id", component: MatchingGameComponent},
    {path: "translation-game", component: TranslationGameComponent},
    {path: "game-dialog", component: GamesDialogComponent},
    {path: "single-category", component: SingleCategoryComponent},
    {path: "help-page", component: HelpPageComponent},
    {path: "", component: DashboardComponent},
    {path: "messy-words/:id", component: MessyWordsComponent},
];
