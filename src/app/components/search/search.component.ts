import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { TokenService } from '../../services/token.service';
@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: `search.component.html`
})
export class SearchComponent  { 
    searchStr:string;
    base = 'https://accounts.spotify.com/authorize/?client_id=b30e641782fa4c0f8a8f2dd0e0f08938&response_type=token';
    redirectUri_local = '&redirect_uri=' + encodeURIComponent('http://localhost:3000/');
    url = this.base + this.redirectUri_local;

    constructor(private _spotifyService:SpotifyService,
                private _tokenService:TokenService){

    }

    ngOnInit(): void {
        this._tokenService.retrieveFrag();
        this._spotifyService.setToken();
        if (! this._tokenService.getToken()) {
          window.location.href = this.url;
        }
    }

    searchMusic(){
       this._spotifyService.searchMusic(this.searchStr, 'artist').subscribe(res => {
           console.log(res);
       });
    }
 }
