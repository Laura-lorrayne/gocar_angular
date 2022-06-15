import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from "./components/catalogo/catalogo.component";
import { HomeComponent } from "./components/home/home.component";
import { SimularComponent } from "./components/simular/simular.component";



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent},
    { path: 'simular', component: SimularComponent},
    { path: '', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
