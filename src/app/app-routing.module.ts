import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
     
} 