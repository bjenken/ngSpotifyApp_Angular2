import {Injectable} from '@angular/core';
import {Http, RequestOptions, ResponseContentType, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TokenService } from './token.service';

@Injectable()
export class SpotifyService{
    searchUrl: string;
    clientId: string;
    token:string;
    headers: Headers;
    options: RequestOptions;

    
    constructor(private _http:Http,
                private tokenService: TokenService){
    }

    setToken(){
        console.log("setToken");
        this.token = this.tokenService.getToken();
        this.headers = new Headers({ 'Authorization' : 'Bearer ' + this.token });
        this.options = new RequestOptions({responseType: ResponseContentType.Json, headers: this.headers});
    }

    searchMusic(term:String, type:string): Observable<any>{
        const baseUrl = 'https://api.spotify.com/v1/search?';
        const queryString = `q=${term}&type=${type}&limit=3&offset=0`;
        return this._http
            .get(baseUrl + queryString, this.options)
            .map(response => response.json());
    }
}