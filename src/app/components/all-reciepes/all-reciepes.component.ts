import { Component, OnInit } from '@angular/core';
import { ReciepeserviceService } from '../../services/reciepeservice.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-reciepes',
  imports: [NgFor,RouterLink,NgIf],
  templateUrl: './all-reciepes.component.html',
  styleUrl: './all-reciepes.component.css'
})
export class AllReciepesComponent implements OnInit {
  allRecipes: any[] = [];
  filteredRecipes: any[] = [];
  isLoading = true;
  myDifficultyValue: string = '';
  searchdItem = '';

  constructor(private child: ReciepeserviceService) {}

  ngOnInit(): void {
    this.child.getDifficultyValue().subscribe((res: any) => {
      this.myDifficultyValue = res;
      this.filterRecipes();
    });

    this.child.getSearchItem().subscribe((res: any) => {
      this.searchdItem = res;
      console.log("Received search term:", this.searchdItem);
      this.filterRecipes();  // ✅ Call filter when search term changes
    });

    this.getRecipes();
  }

  getRecipes() {
    this.isLoading = true;
    this.child.askReciepeApi().subscribe((res: any) => {
      this.allRecipes = res.recipes;
      this.filteredRecipes = [...this.allRecipes];
      this.filterRecipes();
      this.isLoading = false;
    });
  }

  filterRecipes() {
    this.filteredRecipes = this.allRecipes.filter(recipe => {
      const matchesDifficulty = this.myDifficultyValue
        ? recipe.difficulty.toLowerCase() === this.myDifficultyValue.toLowerCase()
        : true;

      const matchesSearch = this.searchdItem
        ? recipe.name.toLowerCase().includes(this.searchdItem.toLowerCase())
        : true;

      return matchesDifficulty && matchesSearch;
    });
  }



  


}