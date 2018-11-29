import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InicioModule } from './inicio/inicio.module';
import { TareasModule } from './tareas/tareas.module';
import { ContactosModule } from './contactos/contactos.module';
import { LibrosModule } from './libros/libros.module';
import { AboutModule } from './about/about.module';
import {FormsModule} from '@angular/forms';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    TareasModule,
    ContactosModule,
    LibrosModule,
    AboutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
