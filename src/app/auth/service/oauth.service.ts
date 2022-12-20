import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OauthService {
  constructor(private _http: HttpClient) {}
}
