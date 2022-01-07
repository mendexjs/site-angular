import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pagina/cadastro/cadastro.component';
import { HomeComponent } from './pagina/home/home.component';
import { ListaComponent } from './pagina/lista/lista.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'lista', component: ListaComponent},
  {path:'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
