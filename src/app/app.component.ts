import { Component } from '@angular/core';
import {SpotifyService} from './services/spotify.service';
import {TokenService} from './services/token.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [SpotifyService, TokenService]
})
export class AppComponent  { name = 'Angular'; }
