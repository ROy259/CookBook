import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReciepeserviceService } from '../../services/reciepeservice.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reciepe-deatil',
  imports: [NgIf,NgFor],
  templateUrl: './reciepe-deatil.component.html',
  styleUrl: './reciepe-deatil.component.css'
})
export class ReciepeDeatilComponent implements OnInit {

  id !:string |null
  data:any
  isLoading=true

  constructor(private route:ActivatedRoute,private child:ReciepeserviceService){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res:any)=>{
      // console.log(res)
      this.id = res.get('id'); // Storing the id  
    // console.log('Extracted ID:', this.id);
    this.isLoading=true
    this.child.askReciepeApi().subscribe((res:any)=>{
      // console.log(res);
      this.data=res.recipes.filter((v:any)=>v.id==this.id)
      // console.log(this.data);
      this.isLoading=false
      
      
    })
      
    })
      
  }



 

}
