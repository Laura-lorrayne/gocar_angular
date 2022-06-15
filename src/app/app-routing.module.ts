import { ContatoComponent } from './components/contato/contato.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { CatalogoComponent } from "./components/catalogo/catalogo.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SimularComponent } from "./components/simular/simular.component";



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent},
    { path: 'simular', component: SimularComponent},
    { path: 'login', component: LoginComponent},
    { path: 'cadastrar', component: CadastroComponent},
    { path: 'contato', component: ContatoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
