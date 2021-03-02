import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from './note.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  tempjudul;
  tempisi;
  temptanggal;
  constructor(
    private router:Router,
    public globalNote :NoteService
  ){ 
    this.tempjudul = this.globalNote.getJudul();
    this.tempisi = this.globalNote.getIsi();
    this.temptanggal = this.globalNote.getTanggal();
   }

   judul
   isi
   tanggal
   OPENHALPERTAMA(){
    
    this.router.navigate(["/halamanpertama"]);
  }
  OPENHALLOGIN(){
    this.globalNote.setNote(this.tempjudul,this.tempisi,this.temptanggal);
    this.judul = this.globalNote.getJudul();
    this.isi = this.globalNote.getIsi();
    this.tanggal = this.globalNote.getTanggal();
    this.router.navigate(["/halamankedua"]);
  }
  OPENHALTIGA(){
    this.globalNote.setNote(this.tempjudul,this.tempisi,this.temptanggal);
    this.judul = this.globalNote.getJudul();
    this.isi = this.globalNote.getIsi();
    this.tanggal = this.globalNote.getTanggal();
    this.router.navigate(["/halamanketiga"]);
  }
  
}
