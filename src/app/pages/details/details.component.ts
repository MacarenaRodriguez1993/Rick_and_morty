import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private http: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //inicializacion de variables
  character: Character | undefined;
  numberEpisode: string[] = [];

  ngOnInit(): void {
    //Busco detalles de un personaje en particular
    this.route.params.subscribe((p) => {
      const id = p['id'];
      this.http.getCharacterById(id).subscribe((res) => {
        this.character = res;
        this.searchEpisodeNumber();
      });
    });
  }

  //Metodo para obtener numero del episodio y redireccionar a la pagina con su detalle
  searchEpisodeNumber() {
    const search = 'episode/';
    console.log(this.character);
    this.character?.episode.forEach((element) => {
      const i = element.indexOf(search);
      if (i !== -1) {
        this.numberEpisode.push(element.substring(i + search.length));
      }
    });
  }

  //redirect a episodio por id
  goEpisode(e: string) {
    this.router.navigate([`/episode/${e}`]);
  }
}
