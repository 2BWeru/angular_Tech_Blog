import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { BlogComponent } from './blog/blog.component';
import { HtmlComponent } from './html/html.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CssComponent } from './css/css.component';
import { JsBasicComponent } from './js-basic/js-basic.component';
import { JsIntermediateComponent } from './js-intermediate/js-intermediate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    BlogComponent,
    HtmlComponent,
    PageNotFoundComponent,
    CssComponent,
    JsBasicComponent,
    JsIntermediateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'' ,component:BlogComponent},
      {path:'html' ,component:HtmlComponent},
      {path:'blog',component:BlogComponent},
      {path:'css',component:CssComponent},
      {path:'JsBasic',component:JsBasicComponent},
      {path:'JsIntermediate',component:JsIntermediateComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
