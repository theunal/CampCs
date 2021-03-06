import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loginUrl = "https://localhost:44339/api/Auth/"



  constructor(private httpClient : HttpClient) { }



  login (loginModel : LoginModel) {
    let newPath = this.loginUrl + "login"
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel)
  }


  isAuthenticated () {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false
    }
  }





}
