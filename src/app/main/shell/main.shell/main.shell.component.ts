import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@main/features/header/header.component';
import { MainSliderComponent } from '@main/features/main-slider/main-slider.component';
@Component({
  selector: 'app-main.shell',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainSliderComponent],
  templateUrl: './main.shell.component.html',
  styleUrls: ['./main.shell.component.scss'],
})
export class MainShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
