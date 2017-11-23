import { Injectable } from '@angular/core';
import { client } from '../dao/client';
import gql from 'graphql-tag';
import { Email }   from '../model/email'
@Injectable()
export class EmailService {

    constructor() {
    }


    public sendEmail(email:Email){
      let {from, to, title, body, bcc, cc } = email;
      return client.mutate({
        mutation: gql`
        mutation  {
         sendEmail(Email:{
         from:"${from}",
         to:"${to}",
         body:"${body}",
         title:"${title}",
         cc:${cc.length!=0?cc.length:"[]"},
         bcc:${bcc.length!=0?bcc.length:"[]"}
         })
         {
         from,
         status
         }
         }
        `,
         variables: {from, to, title, body, bcc, cc },
      })
    }

}
