import { Component, OnInit,ViewChild } from '@angular/core';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {User} from '../usermodel'
import { UserlistService } from '../userlist.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  @ViewChild ('form')signupForm:NgForm;
  
  model:any={}
  editMode = false;
  subscription:Subscription
  editedItemIndex: number;
  editedItem: User;

  constructor(private userlistService:UserlistService) { }

  ngOnInit() {
    this.subscription = this.userlistService.startedEditing.subscribe((index:number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem = this.userlistService.getUserData(index);
    this.signupForm.setValue({
      name: this.editedItem.name,
      age: this.editedItem.age,
      email:this.editedItem.email,
      gender:this.editedItem.gender
    })

  })
  }
  onSubmit(form:NgForm){
    const value = form.value;
    const newUsers = new User(value.name, value.age,value.email,value.gender);
    if(this.editMode){
     this.userlistService.updateUserList(this.editedItemIndex,newUsers)
    }
    else{
      this.userlistService.addUserList(newUsers)
    }
    this.editMode=false;
  this.signupForm.reset();
  }

  cleartextfield() {
    
    this.signupForm.reset();
    this.editMode=false;
 }


 onDelete(){
    this.cleartextfield()
  this.userlistService.deleteList(this.editedItemIndex)
 }

}
