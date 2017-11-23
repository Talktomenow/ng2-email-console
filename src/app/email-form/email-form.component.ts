import { Component, OnInit } from '@angular/core';

import { Email }    from '../model/email';
import { FormControl} from '@angular/forms';

import { EmailService } from '../dao/email-service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  model: Email;
  state: any;
  emailService: EmailService
  constructor(/* todo private emailService: EmailService*/) {
         console.log("init EmailFormComponent");
         this.emailService = new EmailService();
  }

  public validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(){
    this.model = new Email("will.lee.sesame@gmail.com",["will.lee.sesame@gmail.com"],"","",[],[]);
    this.state = {
      submit: null,
      failedResult: null,
      okResult: null
    }
  }



  public validated(): boolean{
    return this.validEmailPattern.test(this.model.from)&&this.model.to.length!=0;
  }
  public onReset(): void{
    this.model = new Email("",[],"","",[],[]);
  }

  onItemAdded(item): void {
    console.log(item);
  }

  public emailValidate(control: FormControl) {
    var   validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validEmailPattern.test(control.value)) {
              return {
                  'emailValidate@': true
              };
          }
    return null;
  }
  onRemove($event: string): void {
    console.log($event);
  }
  onSubmit(): Promise<object> {
    console.log(this.model)
    this.state.submit = "submitting";
    return this.emailService.sendEmail(this.model)
    .then(data => {
        this.state.submit = "success";
        console.log(data);
        this.state.okResult = data.data.sendEmail.status=='queued'?'sent succesfully!':data.data.sendEmail.status;
        setTimeout(()=>this.state.okResult=null, 5000);
        return new Promise((resolve, reject) => {
              resolve();//hacky for unit test
            })
      })
      .catch(error => {
        this.state.submit = "failed";
        console.log(error);
        this.state.failedResult = error.message;
        setTimeout(()=>this.state.failedResult=null, 5000);
        return new Promise((resolve, reject) => {
              resolve();//hacky for unit test
            })
        });
  }

}
