import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { ExhibitorListComponent } from './exhibitor-list/exhibitor-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutComponent,
    ExhibitorListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
