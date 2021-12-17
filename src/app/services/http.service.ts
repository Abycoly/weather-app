import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getWeather(location: any){
        return this.http.get<any>(env.config.feedRoot+location)
    }

}

