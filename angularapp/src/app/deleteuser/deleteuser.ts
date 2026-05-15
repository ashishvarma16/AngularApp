import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deleteuser',
  imports: [CommonModule],
  templateUrl: './deleteuser.html',
  styleUrl: './deleteuser.css'
})

export class Deleteuser {

  message:string = '';

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  deleteUser(userId:string){

    console.log("delete user " + userId);

    if(userId){

      this.dataService.deleteUser(Number(userId))
      .subscribe(data => {

        console.log(data);

        this.message = "User Deleted Successfully";

        this.cdr.detectChanges();

      });

    }

  }

}