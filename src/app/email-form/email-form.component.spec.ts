import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { EmailFormComponent } from './email-form.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Email }    from '../model/email';

import {mock, instance, verify, spy, when} from 'ts-mockito';
import { EmailService } from '../dao/email-service';
describe('EmailFormComponent', () => {

  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;
  let injector: TestBed
  let emailServiceMock: EmailService
/*
  beforeEachProviders(() => [
      {provide: ActivatedRoute, useClass: MockActivatedRoute}
    ]);
*/
  beforeEach(async(() => {
    let emailServiceMock: EmailService;

    TestBed.configureTestingModule({
      declarations: [ EmailFormComponent ],
      imports: [
      ],
      schemas: [
        NO_ERRORS_SCHEMA //https://stackoverflow.com/questions/39428132/custom-elements-schema-added-to-ngmodule-schemas-still-showing-error
      ],
      //providers: [EmailService] todo
      //[{provide: EmailService, useValue: instance(emailServiceMock)}]
    })
    /*.overrideComponent(EmailFormComponent, {
      set: {
        providers: [
          {provide: EmailService, useValue: instance(emailServiceMock)}
          //,{provide: EmailService, useClass: MockPonyService}
        ]
      }
    })*/
    .compileComponents();

    //injector = getTestBed();
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //emailServiceMock = injector.get(EmailService)

  }));

  /*beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify initial component member values - unit', () => {
    component.ngOnInit();
    expect( JSON.stringify(component.model)).toBe(
      JSON.stringify(new Email("will.lee.sesame@gmail.com",["will.lee.sesame@gmail.com"],"","",[],[]))
    );
    expect( JSON.stringify(component.state)).toBe(
      JSON.stringify({
        submit: null,
        failedResult: null,
        okResult: null
      })
    );
  });

  it('verify reset form - unit', () => {
    component.onReset();
    expect( JSON.stringify(component.model)).toBe(
      JSON.stringify(new Email("",[],"","",[],[]))
    );
    expect( JSON.stringify(component.state)).toBe(
      JSON.stringify({
        submit: null,
        failedResult: null,
        okResult: null
      })
    );
  });

  it('verify send email success response - unit', () => {
    component.ngOnInit();
    this.emailService = new EmailService();
    let emailServiceSpied = spy(this.emailService);
    this.model = new Email("",[],"","",[],[]);
    when(emailServiceSpied.sendEmail(this.model)).thenReturn(
      new Promise((resolve, reject) => {
          resolve({data:{sendEmail:{status: "queued"}}});
        }));
    component.onSubmit().then(()=>{
      expect(component.state.submit).toBe( "success");
      expect(component.state.okResult).toBe( "sent succesfully!");
    });
  });
    it('verify send email failed response - unit', () => {
      component.ngOnInit();
      this.emailService = new EmailService();
      let emailServiceSpied = spy(this.emailService);
      this.model = new Email("",[],"","",[],[]);
      when(emailServiceSpied.sendEmail(this.model)).thenReturn(
        new Promise((resolve, reject) => {
            reject({error:{message:'internal error1'}});
          }));
      component.onSubmit().then(()=>{
        expect(component.state.submit).toBe( "failed");
        expect(component.state.failedResult).toBe( "internal error");
      });

    });
});
