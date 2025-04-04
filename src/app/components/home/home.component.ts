import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReciepeserviceService } from '../../services/reciepeservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgIf,RouterLink,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private child: ReciepeserviceService) {}

  isLoading = true;
  HomeMainImge: any;
  HomeOtherImages: any;

  allRecipes: any[] = [];
  filteredRecipes: any[] = [];
  myDifficultyValue: string = '';
  searchdItem: string = '';

 ngOnInit(): void {
  
  
  this.getHomeMainImgage();
  this.getHomeOtherImages();

 
 
 }

  getHomeMainImgage() {
    this.isLoading = true;
    this.child.askReciepeApi().subscribe((res: any) => {
      this.HomeMainImge = res.recipes[8];
      this.isLoading = false;
    });
  }

  getHomeOtherImages() {
    this.child.askReciepeApi().subscribe((res: any) => {
      this.HomeOtherImages = res.recipes.slice(9, 15);
    });
  }

  
  


  
  

}
