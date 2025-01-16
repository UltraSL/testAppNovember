import { Routes } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import path from 'path';
import { Component } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { ClassComponent } from './components/class/class.component';
import { RecordedVideoComponent } from './components/recorded-video/recorded-video.component';
import { TutesComponent } from './components/tutes/tutes.component';
import { AddClassDetailsComponent } from './components/add-class-details/add-class-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { NotLoggedInComponent } from './components/not-logged-in/not-logged-in.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path : 'test', component : TestComponentComponent },
    {path : 'user', component : UserProfileComponent },
    {path : 'class', component : ClassComponent},
    {path : 'video', component : RecordedVideoComponent},
    {path : 'tute', component : TutesComponent, canActivate: [authGuard]},
    {path : 'addClass', component : AddClassDetailsComponent, canActivate: [adminGuard]},
    {path : 'addUser', component : AddUserComponent}, 
    {path : 'login', component : LoginComponent},
    {path : 'notLogged', component : NotLoggedInComponent}
];
