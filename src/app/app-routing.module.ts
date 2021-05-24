import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/user-profile', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: '**', component: UserProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
