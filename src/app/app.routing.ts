import { Routes } from "../../node_modules/@angular/router";
import { HomeComponent } from "./home/home.component";
import { DirectorioComponent } from "./directorio/directorio.component";
import { DetalleRestauranteComponent } from "./detalle-restaurante/detalle-restaurante.component";
import { RegisterComponent } from "./register/register.component";

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'directorio', component: DirectorioComponent},
    {path: 'restaurante/:id', component: DetalleRestauranteComponent},
    {path: 'registro', component: RegisterComponent}
]