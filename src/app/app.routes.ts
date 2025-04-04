import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllReciepesComponent } from './components/all-reciepes/all-reciepes.component';
import { ReciepeDeatilComponent } from './components/reciepe-deatil/reciepe-deatil.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'allreciepe',
        component:AllReciepesComponent
    },
    {
        path:'reciepedetail/:id',
        component:ReciepeDeatilComponent
    },
    {
        path:'**',
        component:PagenotfoundComponent
    },
    
];
