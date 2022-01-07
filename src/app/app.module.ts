import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './pagina/cadastro/cadastro.component';
import { HomeComponent } from './pagina/home/home.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { ListaComponent } from './pagina/lista/lista.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(ptBr);



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    MenuComponent,
    ListaComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
