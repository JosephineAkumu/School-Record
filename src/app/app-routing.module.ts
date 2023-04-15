import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';
import { RecordsListComponent } from './components/records-list/records-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'record-list', component: RecordsListComponent },
  { path: 'add-record', component: AddRecordComponent },
  { path: 'edit-record/:id', component: RecordDetailComponent },
  
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
