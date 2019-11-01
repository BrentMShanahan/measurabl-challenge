import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from '../services';
import {HttpClientModule} from '@angular/common/http';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {TableComponent} from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
