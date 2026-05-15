import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adduser',
  imports: [CommonModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css'
})

export class Adduser {

  user:any = null;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  addUser(name:string, email:string){

    console.log("adding user");

    this.user = {
      name: name,
      email: email
    };

    this.dataService.addUser(this.user)
    .subscribe(data => {

      this.user = data;

      console.log(this.user);

      this.cdr.detectChanges();

    });

  }

}