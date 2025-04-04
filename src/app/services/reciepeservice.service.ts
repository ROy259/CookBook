import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReciepeserviceService {

private sub=new Subject()
private searchSub=new Subject

  constructor(private parent:HttpClient) { }

askReciepeApi(){
  return this.parent.get("https://dummyjson.com/recipes")
}

setDifficultyValue(value: string) {
  this.sub.next(value) 
  // console.log("Difficulty stored in service:",this.sub); 
}
getDifficultyValue() {
  return this.sub.asObservable()   // Simple return
}


setSearchItem(data:string){
  this.searchSub.next(data)
  // console.log("search in reciespe",this.searchSub);
  
  

}

getSearchItem(){
  return this.searchSub.asObservable()

}


}
