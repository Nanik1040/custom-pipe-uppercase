import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoComponent } from './demo/demo.component';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { AlertComponent } from './alert/alert.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { StudFormService } from './stud-form.service';
import { CustomPipe } from './template-driven/custom-pipe';
// notice this

@NgModule({
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgxDatatableModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DemoComponent,
    AlertComponent,
    ReactiveFormsComponent,
    CustomPipe,
    TemplateDrivenComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserService, HttpClient, StudFormService],
})
export class AppModule {}
