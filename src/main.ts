// 连同Angular编译器一起发布到浏览器
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) { // 生产环境增加 enableProdMode接口能够优化打包出来的代码
  enableProdMode();
}
// JIT编译器的动态引导
// 在这种方式下，angular会在浏览器端动态编译，然后启动app。/ Angular编译器在浏览器中编译并引导该应用
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// AOT模式 静态引导
// 不把编译器发布到浏览器
// import { platformBrowser } from '@angular/platform-browser';

// 静态编译器会生成一个AppModule的工厂AppModuleNgFactory
// import { AppModuleNgFactory } from './app.module.ngfactory';

// 引导AppModuleNgFactory
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);


