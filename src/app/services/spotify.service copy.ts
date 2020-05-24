import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBiBTSPGfUVCpjtCR-T0hcWwZ6-ZWp6mCP0ERP5347b1H2stG8dKnZlj2xGU1R1gkoPqNQtvNko_UKXHtg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .pipe( map( data => data['albums'].items));

  }

  getArtista( termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAVM3zN_7hUjevAa7Ie_wHg_fCl_snGDDa34WEd142j0-wA2qRUh0DiIZuXgOyqXfAb11M0RhTib1G1F5M'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));
  }

}

