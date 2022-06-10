import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnvioDataComponent } from './components/envio-data/envio-data.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin', component: DashboardComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'mensaje-enviado', component: EnvioDataComponent},
  {path: 'editar-registro/:id', component: RegistroComponent},
  {path:'**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
