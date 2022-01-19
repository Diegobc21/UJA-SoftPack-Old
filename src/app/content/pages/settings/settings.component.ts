import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  list(){
    this.router.navigate(['settings/list']);
  }

  search() {
    this.router.navigate(['settings/search']);
  }

}
