import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Recepie } from "../models/recepie";
import { Global } from "./global";
 
@Injectable()
export class RecepieService{
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url= Global.url;
    }


    getRecepies():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(`${this.url}recepies`,{headers:headers});
    }

    getRecepie(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(`${this.url}recepie/${id}`,{headers:headers});
    }
}