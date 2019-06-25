import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users';
import { Observable } from 'rxjs';
const API_URL = 'api';
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() : Observable<User[]> {
        return this.http.get<User[]>(API_URL+'/users');
    }

    getById(id: number) {
        return this.http.get<User[]>(API_URL+'/users' + id);
    }

    register(user: User) {
        return this.http.post<User[]>(API_URL+'/users/register', user);
    }

    update(user: User) {
        return this.http.put<User[]>(API_URL+'/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete<User[]>(API_URL+'/users/' + id);
    }
}