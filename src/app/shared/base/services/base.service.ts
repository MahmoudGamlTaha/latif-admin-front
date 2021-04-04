import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public apiURL = `${environment.baseUrl}`;
    constructor(private http: HttpClient) { }
    list(controller: any, page: number, size: number): Observable<any> {
        return this.http.get<any>(
            `${this.apiURL}${controller}list?page=${page}&size=${size}`);
    }

    listAll(controller?: any): Observable<any> {
        return this.http.get<any>(
            `${this.apiURL}${controller}`);
    }

    find(id: number): Observable<any> {
        return this.http.get<any>(
            `${this.apiURL}find?id=${id}`);
    }
    create(obj: any): Observable<any> {
        return this.http.post<any>(
            `${this.apiURL}new`,
            obj);
    }
    update(obj: any): Observable<any> {
        return this.http.put<any>(
            `${this.apiURL}update`,
            obj);
    }
    delete(id: number): Observable<any> {
        return this.http.delete<any>(
            `${this.apiURL}delete?id=${id}`);
    }
    download(id) {
        return this.http.get<any>(
            `${this.apiURL}download-file?companyArchiveId=${id}`);

    }
    rollBack(id): Observable<any> {
        return this.http.delete<any>(
            `${this.apiURL}rollback-operation?companyArchiveId=${id}`);
    }
}
