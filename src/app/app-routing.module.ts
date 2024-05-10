import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
  {path:'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
  , {path:'video', loadChildren:()=>import('./video/video.module').then(m=>m.VideoModule)},
  {path:'register',  loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)}, 
  {path:'live',  loadChildren:()=>import('./live/live.module').then(m=>m.LiveModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
