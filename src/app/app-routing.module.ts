import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModuleWithProviders} from '@angular/core';
import { RecepieComponent } from './recepie/recepie.component';


const routes: Routes = [
  {path:'',component: MainPageComponent},
  {path:'about', component: AboutComponent},
  {path:'recepie/:id', component: RecepieComponent},
  {path:'**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

 