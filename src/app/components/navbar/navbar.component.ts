import { NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReciepeserviceService } from '../../services/reciepeservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [NgIf,RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  searchItem=""
  


constructor(private child:ReciepeserviceService,private router: Router){}

  clickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled:', this.isMenuOpen);
  }

  selectDifficulty(myEvent: Event) {           
    const selectedValue = (myEvent.target as HTMLSelectElement).value;
    console.log("Selected value:", selectedValue);
    this.child.setDifficultyValue(selectedValue); // Send to service
    this.router.navigate(['/allreciepe']);
  }

  searchedItem(){
    this.child.setSearchItem(this.searchItem)
    this.router.navigate(['/allreciepe']);
  }


 
 
  





  
}
