import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Reindirizza la root alla Home
  { path: '**', redirectTo: '/home' } // Gestione di percorsi inesistenti
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled', // Ritorna in cima alla pagina quando si naviga
      anchorScrolling: 'enabled', // Abilita scrolling agli ancoraggi
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
