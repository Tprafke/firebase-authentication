import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent},
  // { path: '', redirectTo: '/user-profile', pathMatch: 'full'},
  // { path: '**', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
