import { RouterModule } from '@angular/router'; //路由
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

export const routes = [{
  path: '',
  redirectTo: 'todo',
  pathMatch: 'full' // pathMatch: 'full'的意思是必须完全符合路径的要求
},{
  path: 'todo',
  component: TodoComponent
},{
  path: 'login',
  component: LoginComponent
}]
export const routing = RouterModule.forRoot(routes);