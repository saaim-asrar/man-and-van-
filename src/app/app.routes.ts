import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { ShopComponent } from './views/shop/shop.component';

export const routes: Routes = [
    {path: "home",component:HomeComponent},
    {path: "contact",component:ContactComponent},
      {path:"shop",component:ShopComponent},
];
