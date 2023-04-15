import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { LoginComponent } from './components/login/login.component';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbToastrModule,
  NbSpinnerModule, NbThemeModule, NbLayoutModule, NbCardComponent, NbCardHeaderComponent, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbListModule, NbSelectModule, NbTabsetModule,
} from '@nebular/theme';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';
import { RecordsListComponent } from './components/records-list/records-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    RecordDetailComponent,
   RecordsListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
      NbAlertModule,
      NbAlertModule,
      NbButtonModule,
      NbCheckboxModule,
      NbInputModule,
      NbSpinnerModule,
      NbToastrModule.forRoot(),
      BrowserAnimationsModule,
      NbThemeModule.forRoot({ name: 'default' }),
      NbLayoutModule,
      NbEvaIconsModule,
      NbCardModule,
      NbIconModule,
      TableModule,
    NbDatepickerModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbTabsetModule,
    NbListModule,
    NbDialogModule.forChild(),
      
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
