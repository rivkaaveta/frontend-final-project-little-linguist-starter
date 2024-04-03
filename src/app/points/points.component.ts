import { Component,Input, OnInit } from '@angular/core';
import { PointsService } from '../services/points.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent {
  @Input()
  game?: number;
  currentpoints?:PointsService

  constructor(private pointsservice: PointsService
    ){}

}