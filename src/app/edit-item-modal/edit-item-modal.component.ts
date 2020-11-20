import { Component, OnInit, Input, Inject } from '@angular/core';
import { BudgetItem } from '../shared/budget-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-item-modal-component',
  templateUrl: './edit-item-modal-component.component.html',
  styleUrls: ['./edit-item-modal-component.component.scss']
})
export class EditItemModalComponentComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditItemModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

   
  ngOnInit(): void {
  }
   //onSubmitted method which handles new updates
  onSubmitted(updatedItem:BudgetItem){
     this.dialogRef.close(updatedItem);
  }

}
