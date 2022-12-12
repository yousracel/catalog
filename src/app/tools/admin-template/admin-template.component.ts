import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/Authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor(public authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.authService.logout().subscribe({
      next:()=>{
        this.router.navigateByUrl("/login")
      }
    })
  }
}
