import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from "../components/login/login.component"
import { HomeComponent } from "../components/home/home.component"
import { CadastroComponent } from "../components/cadastro/cadastro.component"
import { CatalogoComponent } from "../components/catalogo/catalogo.component"
import { SimularComponent } from "../components/simular/simular.component"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    CatalogoComponent,
    SimularComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
