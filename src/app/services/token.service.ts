import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class TokenService {
  frag: any;
  url: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  retrieveFrag() {
    console.log("retrieve frag");
    if (window.location.hash) {
      this.frag = window.location.hash.slice(1)
                  .split('&')
                  .map(el => el.split('='))
                  .reduce( (pre, cur) => { pre[cur[0]] = cur[1]; return pre; }, {});
        sessionStorage.setItem('token', this.frag['access_token']);
        console.log("Token: " + this.frag['access_token']);
    }
  }

  getToken() {
    return sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
  }

  clearToken() {
    return sessionStorage.clear();
  }

}