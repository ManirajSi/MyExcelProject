import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonDirective } from './directives/common.directive';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { UploaderComponent } from './components/pages/uploader/uploader.component';
import { ViewComponent } from './components/pages/view/view.component';
import { TableComponent } from './components/shared/table/table.component';
import { EmailTemplateComponent } from './components/shared/email-template/email-template.component';
import { CommonPipe } from './pipes/common.pipe';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { FileUploadComponent } from './components/shared/file-upload/file-upload.component';
import { PrimengModule } from './modules/prime-module/prime-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UploaderComponent,
    ViewComponent,
    TableComponent,
    EmailTemplateComponent,
    CommonPipe,
    SidebarComponent,
    CommonDirective,
    FileUploadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PrimengModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
