import { Component, OnInit } from '@angular/core';
import { Recepie } from '../models/recepie';
import { RecepieService } from '../services/recepie.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers:[RecepieService]
})
export class MainPageComponent implements OnInit {
  public recepies: Recepie[] = [];
  public recepiesAll: Recepie[]=[];
  public name : any;
  constructor(
    private _recepieService: RecepieService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getRecepies();
    this.recepiesAll=this.recepies;  
  }

  getRecepies(){
    this._recepieService.getRecepies().subscribe(
      response=>{
        if (response.recepies) {
          this.recepies= response.recepies;
        }
      },

      error=>{
        console.log(error)
      }

    )
  }

  Search(){
    if (this.name=="") {
      this.getRecepies();
    }else{
      this.recepies= this.recepies.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }

}
