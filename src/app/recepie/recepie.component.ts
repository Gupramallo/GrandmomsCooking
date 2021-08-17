import { Component, OnInit } from '@angular/core';
import { Recepie } from '../models/recepie';
import { Global } from '../services/global';
import { RecepieService } from '../services/recepie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css'],
  providers: [RecepieService]
})
export class RecepieComponent implements OnInit {
  public url: string;
  public recepie: Recepie | any;
  public img: string | any;
  public style = {};
  
  constructor(
    private _recepieService: RecepieService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url= Global.url;
    

  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params.id;

      this.getRecepie(id);
    });
  }
  

  getRecepie(id: any){
    this._recepieService.getRecepie(id).subscribe(
      response =>{
        this.recepie= response.recepie;
        console.log(this.recepie.img_card);
        this.style= {
          'background-image': 'url('+ this.recepie.img +')',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'background-position': 'center',
          'margin-top': '4rem',
          'width': '100%',
          'height': '100%',
          'background-color':'rgba(255, 255, 255, 0.342)'
          
        }
      },

      error=>{
        console.log(<any>error)
      }
    )
  }
}
