import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { HeaderComponent } from './shared/header/header.component';
import { NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UpperCasePipe, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Pokedex';
  pokemonList: any[] = [];

  colors = ["Red", "Blue", "White"]

  constructor(private pokeService: PokemonService) { }

  list() {
    this.pokeService.all().subscribe(data => {
      console.log(data);
      
      this.pokemonList = data
    })
  }

  ngOnInit(): void {
    this.list()
  }
}