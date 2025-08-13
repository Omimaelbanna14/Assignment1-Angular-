import { Component } from '@angular/core';

interface IContact{
  userName:string;
  userAge:number;
  userEmail:string;
  userPassword:number | string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  show(e:HTMLLabelElement){
    e.classList.remove('opacity-0');
  }
  hide(e:HTMLLabelElement){
    e.classList.add('opacity-0');
  }
}

