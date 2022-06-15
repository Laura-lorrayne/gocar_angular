import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CardCarroComponenent } from './components/cards/carro/carro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { GrupoComponenent } from './components/cards/grupo/grupo.component';
import { HeaderComponenent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SimularComponent } from './components/simular/simular.component';
import { CarroService } from './services/carros/carros.service';
import { ContatoComponent } from './components/contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './services/localstorage/localstorage';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    CatalogoComponent,
    SimularComponent,
    FooterComponent,
    HeaderComponenent,
    CardCarroComponenent,
    GrupoComponenent,
    ContatoComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CarroService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
