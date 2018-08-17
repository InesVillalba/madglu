import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { NovedadesComponent } from './novedades/novedades.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { FiltrosRestaurantesComponent } from './filtros-restaurantes/filtros-restaurantes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NovedadesComponent,
    DirectorioComponent,
    RestaurantesComponent,
    FiltrosRestaurantesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
