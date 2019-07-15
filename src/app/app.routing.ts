import{ RouterModule, Routes} from '@angular/router'
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const appRoutes: Routes=[
    {path:'inicio', component: InicioComponent},
    {path:'acerca-de', component: AcercaDeComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'',redirectTo:'/inicio',pathMatch: 'full'},
    {path:'**',component: ContactoComponent}
    ]

export const APPE_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});