import { Injectable } from '@angular/core';
// 依赖注入
@Injectable()
export class AuthService {
  constructor() { }
  loginWithCredentials(username: string,password: string): boolean {
  	if(username === 'wangying'){
  		return true;
  	}
  	return false;
  }
}
