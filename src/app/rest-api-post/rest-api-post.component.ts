import { HttpServicesService } from './../services/http-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-api-post',
  templateUrl: './rest-api-post.component.html',
  styleUrls: ['./rest-api-post.component.scss']
})
export class RESTAPIPOSTComponent implements OnInit {

  constructor(private httpServicesService: HttpServicesService) { }

  ngOnInit(): void {
    const payload = {body:'some comment 3',postId:'3'}
    this.httpServicesService.postComment(payload).subscribe((data) =>{
      console.log('postComment :', data);
    })
  }

}
