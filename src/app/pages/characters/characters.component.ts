import { DOCUMENT } from '@angular/common';
import { HostListener } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/service/characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private characterService: CharactersService
  ) {}
  //inicializacion de variables
  characters: Character[] = [];
  pageNum = 1;
  info = { next: null };
  showUp = false;
  private scroll = 500;

  ngOnInit(): void {
    this.getCharacters();
  }
  //Verifica la "altura" del scroll
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollY = this.doc.documentElement.scrollTop;
    this.showUp = (yOffset || scrollY) > this.scroll;
  }

  //Metodo para ir a scroll=0
  scroll0(): void {
    this.doc.documentElement.scrollTop = 0;
  }

  //Metodo para hacer llaamada a la api de las siguientes paginas
  scrollDown(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getCharacters();
    }
  }

  //Metodo para traer los personajes de la api
  getCharacters() {
    this.characterService.getCharacters(this.pageNum).subscribe((res) => {
      const { info, results } = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
    });
  }
}
