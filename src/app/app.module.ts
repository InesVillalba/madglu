import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { NovedadesComponent } from './novedades/novedades.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { FiltrosRestaurantesComponent } from './filtros-restaurantes/filtros-restaurantes.component';
import { DetalleRestauranteComponent } from './detalle-restaurante/detalle-restaurante.component';
import { CardRestaurantComponent } from './card-restaurant/card-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NovedadesComponent,
    DirectorioComponent,
    RestaurantesComponent,
    FiltrosRestaurantesComponent,
    DetalleRestauranteComponent,
    CardRestaurantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHRpx_V1CYOvo0HQGW6x-a5DCgkEhNEPw'
    }),
    NgReduxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){
    // El segundo parámetro es el estado inicial de nuestra store
    // El tercero son middlewares
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers)
  }
 }
