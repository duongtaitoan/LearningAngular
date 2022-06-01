import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  // public formData:FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl('')
  // })

  public formData2 = this.fb.group({
    name:['', Validators.required],
    age: ['', Validators.required]
  })
  constructor(private common:CommonService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.common.submitData(this.formData2.value);
  }

}
