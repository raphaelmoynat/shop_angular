import {inject, Injectable, Signal} from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile
} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {BehaviorSubject, from, Observable} from 'rxjs';
import { User } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth)

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      this.userSubject.next(user);
    });
  }



  register(email: string, username: string, password: string): Observable<any> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then(response => updateProfile(response.user, {displayName: email}));

    return from(promise)
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth));
  }




}
