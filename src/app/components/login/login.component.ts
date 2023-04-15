import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {



  constructor(
    public router: Router,
    
  ) {
    
  }

  ngOnInit(): void {
    // this.authService.logout();


  }

  loginUser(data: any, ) {

    this.router.navigate(["/"]);

  }
  onlogin(){
    this.router.navigate(["/record-list"]);
  }

}
