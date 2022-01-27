import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  list(){
    this.router.navigate(['admin/list']);
  }

  search() {
    this.router.navigate(['admin/search']);
  }

}
