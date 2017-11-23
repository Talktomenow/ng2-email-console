export class Email {

  constructor(
    public from: string,
    public to: string[],
    public body: string,
    public title: string,
    public cc: string[],
    public bcc: string[],

  ) {  }

}
