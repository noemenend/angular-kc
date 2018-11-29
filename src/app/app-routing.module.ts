import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import { TareasComponent } from './tareas/tareas.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LibrosComponent } from './libros/libros.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'tareas', component: TareasComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'libros', component: LibrosComponent},
  { path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
