import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from 'src/app/data/interface';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private Url = environment.baseUrl + '/records';
  data: Data[];
  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.Url);
  }
  addData(data: Data): Observable<Data[]> {
    return this.http.post<Data[]>(this.Url, data);
  }
  deleteData(id: number): Observable<Data[]> {
    return this.http.delete<Data[]>(this.Url + '/' + id);
  }
  updateData(data): Observable<Data[]> {
    return this.http.put<Data[]>(this.Url + '/' + data.id, data);
  }

  getElementById(id: number): Observable<Data> {
    return this.http.get<Data>(this.Url + '/' + id);

  }

}


