import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software } from '../../../core/model/software.interface';
import { SoftwareService } from '../../../core/service/software.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  softwareList: Software[] = [];

  options = {theme: 'vs-dark', language: 'json'};
  code: string= '[{\n    "_id": {\n      "$oid": "62346dd6f8243a1e161d30e8"\n    },\n    "os": [\n      [\n        "Windows",\n        "x64",\n        "https://downloads.apache.org/netbeans/netbeans-installers/13/Apache-NetBeans-13-bin-windows-x64.exe"\n      ]\n    ],\n    "resources": [\n      [\n        "cygwin",\n        "https://www.cygwin.com/setup-x86_64.exe"\n      ]\n    ],\n    "name": "Apache Netbeans",\n    "version": "13",\n    "description": "NetBeans es un entorno de desarrollo integrado libre, hecho principalmente para el lenguaje de programación Java."\n}]';

  constructor( private softwareService: SoftwareService, private router: Router ) { }

  softwareList$: any;

  selectedName: string | null;

  ngOnInit(): void {
    this.softwareService.getSoftware().subscribe(resp => 
      this.softwareList = resp
    );
  }

  gotoItem(id: number) {
    this.router.navigate(['software/'+ id ]);
  }
}
