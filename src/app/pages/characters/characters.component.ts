import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}
  characters: Character[] = [];
  ngOnInit(): void {
    //Hace el llamado al service para traer los personajes
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res;
    });
  }
}
