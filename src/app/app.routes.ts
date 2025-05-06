import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {path: "home",component:HomeComponent},
    {path: "contact",component:ContactComponent},
      {path:"shop",component:ShopComponent},
];
