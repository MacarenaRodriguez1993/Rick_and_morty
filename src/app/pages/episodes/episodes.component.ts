import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/models/episode';
import { EpisodesService } from 'src/app/service/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  constructor(
    private episodeService: EpisodesService,
    private route: ActivatedRoute
  ) {}
  episode: Episode | undefined;
  ngOnInit(): void {
    this.route.params.subscribe((e) => {
      const id = e['id'];
      this.episodeService.getEpisodeById(id).subscribe((res) => {
        this.episode = res;
      });
    });
  }
}
