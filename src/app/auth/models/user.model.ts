export class User {
  constructor(
    private _email: string,
    private token: string,
    private localId: string,
    private _expirationDate: Date
  ) {}

  public get expirationDate(): Date {
    return this._expirationDate;
  }
  public set expirationDate(value: Date) {
    this._expirationDate = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
}
