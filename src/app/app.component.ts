import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Pokedex';
  pokemon: any[] = []

  constructor(private pokeService: PokemonService) { }

  list() {
    this.pokeService.all().subscribe({
      next: (res) => {
        console.log(res);

        this.pokemon = res
      }
    })
  }

  ngOnInit(): void {
    this.list()
  }
}