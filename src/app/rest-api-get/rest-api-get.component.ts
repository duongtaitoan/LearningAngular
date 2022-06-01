import { HttpServicesService } from "./../services/http-services.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rest-api-get",
  templateUrl: "./rest-api-get.component.html",
  styleUrls: ["./rest-api-get.component.scss"],
})
export class RESTAPIGETComponent implements OnInit {
  constructor(private httpServerServices: HttpServicesService) {}

  public ngOnInit(): void {
    this.httpServerServices.getComments().subscribe((data) => {
      console.log('Data Object', data);
    });

    // this.httpServerServices.getUser(5).subscribe((data) => {
    //   console.log('Data Object', data.results);
    // });
  }
}
