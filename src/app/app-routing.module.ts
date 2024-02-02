import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { ExerciceComponent } from './pages/exercice/exercice.component';
import { UsersaddComponent } from './pages/usersadd/usersadd.component';
import { UserseditComponent } from './pages/usersedit/usersedit.component';
import { ExerciceseditComponent } from './pages/exercicesedit/exercicesedit.component';
import { ExerciceseaddComponent } from './pages/exerciceseadd/exerciceseadd.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'list/user', component : ListComponent},
  {path : 'list/exercice', component : ExerciceComponent},
  {path : 'user/add', component: UsersaddComponent},
  {path : 'user/edit', component: UserseditComponent},
  {path: 'exercise/edit/:id', component: ExerciceseditComponent},
  {path: 'exercice/add', component: ExerciceseaddComponent},
  {path: 'auth', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
