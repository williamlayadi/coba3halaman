import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {
  private Judul:string ="judul";
  private Isi:string ="isi";
  private Tanggal:string ="tanggal";
  private Favorit:boolean = false;
  constructor() { }
  public setNote(judul:string,isi:string,tanggal:string){
    this.Judul = judul;
    this.Isi = isi;
    this.Tanggal = tanggal;
  }
  public getJudul(){
    return this.Judul;
  }
  public getIsi(){
    return this.Isi;
  }
  public getTanggal(){
    return this.Tanggal;
  }
  public getFavorit(){
    return this.Favorit;
  }
  public setFavorit(x:boolean){
    this.Favorit = x;
  }
}