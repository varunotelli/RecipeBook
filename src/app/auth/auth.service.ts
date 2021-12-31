import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

export interface AuthResponseData{
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered? : boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
	constructor(private http: HttpClient){

	}

	signUp(email: string, password: string){
		return this.http.post<AuthResponseData>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKhptlSM0ToNoDdg7v91jdKb8EbudVvD0',
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
			).pipe(catchError(this.handleError));
		}

		login(email: string, password: string){
			return this.http.post<AuthResponseData>(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKhptlSM0ToNoDdg7v91jdKb8EbudVvD0',
				{
					email: email,
					password: password,
					returnSecureToken: true
				}
				).pipe(catchError(this.handleError));

		}

		private handleError(errorRes: HttpErrorResponse){
			let errorMessage = 'An unknown error occurred';
			if(!errorRes.error || !errorRes.error.error){
					return throwError(errorMessage);
				}

				switch(errorRes.error.error.message){
					case 'EMAIL_EXISTS':
					errorMessage = 'Email already exists';
					break;
					case 'EMAIL_NOT_FOUND':
					errorMessage = 'Email does not exist';
					break;
					case 'INVALID_PASSWORD':
					errorMessage='Password incorrect';

				}
				return throwError(errorMessage);
		}

	}

