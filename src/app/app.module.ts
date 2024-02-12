import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';

const firebaseConfig= {
  apiKey: 'AIzaSyAQS0xnwce3sn6AdeXwDbxsMPvCPYv8xI4',
  authDomain: 'ang-mobi-blog.firebaseapp.com',
  projectId: 'ang-mobi-blog',
  storageBucket: 'ang-mobi-blog.appspot.com',
  messagingSenderId: '393036288298',
  appId: '1:393036288298:web:bcc6f6edb912b491f6ce53',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
