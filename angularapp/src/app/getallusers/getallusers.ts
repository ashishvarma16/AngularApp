import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-getallusers',
  imports: [CommonModule],
  template: `<div *ngFor="let user of users">
          <p>{{user.id}} {{user.name}} {{user.email}}</p>
        </div>

  `
  
})
export class Getallusers implements OnInit{
  users:any[]=[]
  constructor(private dataService:DataService,private cdr:ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(response=>{
      this.users=response;
      this.cdr.detectChanges();
    })
  }

}
