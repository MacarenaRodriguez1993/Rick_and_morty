import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() character!: Character;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  details(id: number): void {
    this.router.navigate(['details', id]);
  }
}
