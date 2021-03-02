import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NoteService } from './note.service';
import { RouterModule,Routes } from '@angular/router';
import { HalamankeduaComponent } from './halamankedua/halamankedua.component';
import { HalamanketigaComponent } from './halamanketiga/halamanketiga.component';
import { HalamanppertamaComponent } from './halamanppertama/halamanppertama.component';

const ROUTES :Routes =[
  {path:"halamanpertama",component:HalamanppertamaComponent},
  {path:"halamankedua/:judul",component:HalamankeduaComponent},
  {path:"halamankedua",component:HalamankeduaComponent},
  {path:"halamanketiga",component:HalamanketigaComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, HalamankeduaComponent, HalamanketigaComponent, HalamanppertamaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NoteService]
})
export class AppModule { }
