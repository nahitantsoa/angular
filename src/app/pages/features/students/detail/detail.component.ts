import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  standalone:false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  selectedStudent:any = undefined;
  myClass (student:any) {
    if (this.selectedStudent === undefined) {
      return '';
    }
    if (this.selectedStudent.nom === student.nom) {
      return 'active';
    }
    return '';
  };

  list: any [] =
    [
      {
        nom: 'Rasoazanany ',
        prenom: 'Nivo'
      },
      {
        nom: 'Ramandason ',
        prenom: 'Frederic'
      },
      {
        nom: 'Ravoavy ',
        prenom: 'Nirina'
      },
  ]
}
