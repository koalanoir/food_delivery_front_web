import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StoreComponent } from './store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandeComponent } from './commande/commande.component';
// Import the module Auth0 for login
import { environment } from '../environments/environment'; // Import environment
import { AuthModule } from '@auth0/auth0-angular';
import { FormulaireComponent } from './formulaire/formulaire.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StoreComponent,
    FooterComponent,
    CommandeComponent,
    FormulaireComponent
  ],
  imports: [
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
          domain: environment.domain_auth0,
          clientId: environment.client_id_auth0,
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
