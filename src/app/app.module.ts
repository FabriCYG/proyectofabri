import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CadenasDeComidaComponent } from './cadenas-de-comida/cadenas-de-comida.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "@angular/fire/compat"
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CadenasDeComidaComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
