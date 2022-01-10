import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import {environment} from "../../environments/environment"

import { AuthResponse } from "../../model/auth-response";
import { User } from "../../model/user";
import { AuthRequest } from "../../model/auth-request";



/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: "root" })
export class AuthService {
  #auth$: ReplaySubject<AuthResponse | undefined>;

  constructor(private http: HttpClient) {
    this.#auth$ = new ReplaySubject(1);
    // Emit an empty value on startup for now
    this.#auth$.next();
  }

  isAuthenticated$(): Observable<boolean> {
    return this.#auth$.pipe(map((auth) => Boolean(auth)));
  }

  getUser$(): Observable<User> {
    return this.#auth$.pipe(map((auth) => auth?.user));
  }

  getToken$(): Observable<string> {
    return this.#auth$.pipe(map((auth) => auth?.token));
  }

  logIn$(authRequest: AuthRequest): Observable<User> {
    const authUrl = `${environment.apiUrl}users/login`;
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      map((auth) => {
        this.#auth$.next(auth);
        console.log(`User ${auth.user.pseudo} logged in`);
        return auth.user;
      })
    );
  }

  logOut(): void {
    this.#auth$.next(null);
    console.log("User logged out");
  }
}