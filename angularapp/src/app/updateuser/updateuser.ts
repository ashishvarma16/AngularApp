import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-updateuser',
  imports: [CommonModule],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css',
})



export class Updateuser{
  
  user:any=null;
  constructor(private dataService:DataService,private cdr:ChangeDetectorRef){

  }
  updateUser(userId:string,name:string,email:String){
    console.log("update user "+userId)
    this.user={
        userId:userId,
        name:name,
        email:email
    }
    if(userId){
      this.dataService.updateUser(Number(userId),this.user).subscribe(
        data=>{this.user=data;
          console.log(this.user);
        this.cdr.detectChanges();

    })

    
    }

  }

}