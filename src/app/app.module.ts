import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commun/header/header.component';
import { FooterComponent } from './commun/footer/footer.component';
import { ListComponent } from './pages/list/list.component';
import { ExerciceComponent } from './pages/exercice/exercice.component';
import { UsersaddComponent } from './pages/usersadd/usersadd.component';
import { UserseditComponent } from './pages/usersedit/usersedit.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciceseditComponent } from './pages/exercicesedit/exercicesedit.component';
import { ExerciceseaddComponent } from './pages/exerciceseadd/exerciceseadd.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ExerciceComponent,
    UsersaddComponent,
    UserseditComponent,
    ExerciceseditComponent,
    ExerciceseaddComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
