import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../core/auth.service';

// @Component({
//   selector: 'app-login',
//   template: `
//     <div>
//       <input #usernameRef type="text" />
//       <input #passwordRef type="password" />
//       <button (click)="onClick(usernameRef.value,passwordRef.value)">login</button>
//     </div>
//   `,
//   styles: [],
//   //在providers中配置AuthService
//   //providers:[AuthService]
// })
@Component({
  selector: 'app-login',
  // 那么那个?是干嘛的呢？因为errors可能是个null，如果这个时候调用errors的required属性肯定会引发异常，那么?就是标明errors可能为空，在其为空时就不用调用后面的属性了。
  // fieldset(进行分组) 意味着我们对于 fieldset 之内的数据都分组到了 login 对象中。
  template: `
    <div>
      <form #formRef='ngForm' (ngSubmit) = "onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input name="username" [(ngModel)] = 'username' #usernameRef="ngModel" required minlength="3" placeholder="请输入用户名" type="text" /> {{usernameRef.errors | json}}
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          <input name="password" required #passwordRef="ngModel" [(ngModel)] = 'password' type="password"  placeholder="请输入密码"/> {{passwordRef.valid}}
          <div *ngIf="passwordRef.errors?.required">this is required</div>
          <button (click)="onClick()">login</button>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]
})
export class LoginComponent implements OnInit {
  username: '';
  password: '';
  //声明成员变量，其类型为AuthService (不建议)
  // service: AuthService;
  //在构造函数中将AuthService示例注入到成员变量service中
  //而且我们不需要显式声明成员变量service了
  //constructor(private service: AuthService) {
    // this.service = new AuthService();
  //}
  // 在全局配置AuthService
  constructor(@Inject('auth') private service){

  }

  ngOnInit() {
  }
  // onClick(username,password) {
  //   console.log('auth result is:'+ this.service.loginWithCredentials(username,password));
  // }
  onClick(){
    console.log('auth result is:'+ this.service.loginWithCredentials(this.username,this.password));
  };
  onSubmit(value){
    console.log('auth result is:'+ this.service.loginWithCredentials(value.login.username,value.login.password));
  }

}
