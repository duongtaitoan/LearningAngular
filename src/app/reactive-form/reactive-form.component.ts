import { CommonService } from 'app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // public formData = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl('')
  // });

  public formData2 = this.formBuilder.group({
    name:['',Validators.required],
    age:['',,Validators.required],
  });

  constructor(private common:CommonService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.common.submitData(this.formData2.value);
  }
}
