import { BrowserModule } from '@angular/platform-browser'; // 提供了运行在浏览器中的应用所需要的关键服务（Service）和指令（Directive），这个模块所有需要在浏览器中跑的应用都必须引用
import { NgModule } from '@angular/core'; // 装饰器用来为模块定义元数据
import { FormsModule } from '@angular/forms'; // 提供了表单处理和双向绑定等服务和指令
import { HttpModule } from '@angular/http'; // 提供Http请求和响应的服务

import { AuthService } from './core/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { routing } from './app.router'

@NgModule({
  declarations: [ // declarations列出了应用中的顶层组件
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [ // imports引入了3个辅助模块
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{
    provide: 'auth',useClass: AuthService
  }], // providers列出会在此模块中“注入”的服务(Service)(全局)
  bootstrap: [AppComponent] // bootstrap指明哪个组件为引导性组件（本案例中的AppComponent）
})
export class AppModule { }
