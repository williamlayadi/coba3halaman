import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-halamankedua',
  templateUrl: './halamankedua.component.html',
  styleUrls: ['./halamankedua.component.css']
})
export class HalamankeduaComponent implements OnInit {

  paramjudul
  paramisi
  paramtanggal
  paramfavorit = true;
   
  constructor(
    private route:ActivatedRoute,
    public globalNote :NoteService
  ) {
    this.paramjudul = this.globalNote.getJudul();
    this.paramisi = this.globalNote.getIsi();
    this.paramtanggal = this.globalNote.getTanggal();
    this.paramfavorit = this.globalNote.getFavorit();
   }
  
  ngOnInit() {
    // let isijudul = this.route.snapshot.paramMap.get('judul');
    // this.paramjudul = isijudul
    
  }
  MakeFavourite(){
    this.globalNote.setFavorit(true);
    this.paramfavorit = this.globalNote.getFavorit();
  }
  MakeUnFavourite(){
    this.globalNote.setFavorit(false);
    this.paramfavorit = this.globalNote.getFavorit();
  }
}