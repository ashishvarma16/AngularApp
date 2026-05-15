import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-getuser',
  imports: [CommonModule],
  templateUrl: './getuser.html',
  styleUrl: './getuser.css'
})
export class Getuser{

  user:any
  constructor(private dataService:DataService,private cdr:ChangeDetectorRef){

  }
  fetchUser(userId:string){
    console.log("fetch user "+userId)
    if(userId){
      this.dataService.getUser(Number(userId))
      //automatically unsubscribes on destroy
      .pipe(takeUntilDestroyed())  
      .subscribe(
        data=>{this.user=data;
          console.log(this.user);
        this.cdr.detectChanges();

    })
    }
  }

 

}