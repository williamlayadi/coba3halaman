import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-halamanketiga',
  templateUrl: './halamanketiga.component.html',
  styleUrls: ['./halamanketiga.component.css']
})
export class HalamanketigaComponent implements OnInit {
  paramjudul
  paramisi
  paramtanggal
  paramfavorit = true;
   
  constructor(
    private route:ActivatedRoute,
    public globalNote :NoteService
  ) {
    if(this.globalNote.getFavorit() == true){
    this.paramjudul = this.globalNote.getJudul();
    this.paramisi = this.globalNote.getIsi();
    this.paramtanggal = this.globalNote.getTanggal();
    this.paramfavorit = this.globalNote.getFavorit();
    }else{
      this.paramjudul = "NO FAVOURITE";
      this.paramisi = "NO FAVOURITE";
      this.paramtanggal = "NO FAVOURITE";
      this.paramfavorit = false;
    }
    
    
   }
  ngOnInit() {
  }

}