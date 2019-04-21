import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { PrincipalPage} from "../pages/principal/principal";
import { AjustesPage} from "../pages/ajustes/ajustes";
import { Ajustes2Page} from "../pages/ajustes2/ajustes2";
import { ModalPage} from "../pages/modal/modal";
import {Pagina2PageModule} from "../pages/pagina2/pagina2.module";
import {Pagina3PageModule} from "../pages/pagina3/pagina3.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Pagina2PageModule,
    Pagina3PageModule,
    TabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
