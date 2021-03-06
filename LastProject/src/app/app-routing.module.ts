import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './pages/archive/archive.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PocketComponent } from './pages/pocket/pocket.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TrashComponent } from './pages/trash/trash.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'archive',
    component: ArchiveComponent
  },  
  {
    path:'categories',
    component: CategoryComponent
  }, 
  {
    path:'mypocket',
    component: PocketComponent
  },   
  {
    path:'reminders',
    component: RemindersComponent
  },   
  {
    path:'tasks',
    component: TasksComponent
  },   
  {
    path:'trash',
    component: TrashComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'**',
    redirectTo:'',
    component: DashboardComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
