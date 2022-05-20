import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup //<form></form>


  constructor(private formBuilder : FormBuilder, private authService : AuthService,  private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }


  createLoginForm() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]] // Validators.minLength(6)

    })
  }


  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)

      let model = Object.assign({},this.loginForm.value)
      this.authService.login(model).subscribe(response => {
        this.toastrService.info('token olusturuldu')
        localStorage.setItem("token", response.data.token)
      },responseError => {
        this.toastrService.error(responseError.error)
      })
    } else {
      this.toastrService.error("Giriş formu hatalı")
    }
  }



}
