export class User {
  constructor(
    private _email: string,
    private token: string,
    private localId: string,
    private expirationDate: Date
  ) {}

  public get _expirationDate(): Date {
    return this.expirationDate;
  }
  public set _expirationDate(value: Date) {
    this._expirationDate = value;
  }
  public get email(): string {
    return this.email;
  }
  public set email(value: string) {
    this.email = value;
  }

  public getToken() {
    return this.token;
  }
}
