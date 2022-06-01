import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select-city",
  templateUrl: "./select-city.component.html",
  styleUrls: ["./select-city.component.scss"],
})
export class SelectCityComponent implements OnInit {

  public listDistricts : string[] = ["Quận/Huyện"] 
  public cities = [
    {
      city: "Chọn thành phố",
      districts: [
        "Quận/Huyện",
      ],
    },
    {
      city: "Thành phố Hà Nội",
      districts: [
        "Quận Bắc Từ Liêm",
        "Quận Nam Từ Liêm",
        "Quận Đông Từ Liêm",
        "Quận Tây Từ Liêm",
      ],
    },
    {
      city: "Thành phố Hồ Chí Minh",
      districts: [
        "Quận 1",
        "Quận 2",
        "Quận 3",
        "Quận 4",
        "Quận 5",
      ],
    },
    {
      city: "Thành phố Đà Lạt",
      districts: [
        "Phường 1",
        "Phường 2",
        "Phường 3",
        "Phường 4",
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public chooseCity(event:any):void{
    
    const checkCity = event.target.value;

    // if return not found or choose
    if(!checkCity){
      return;
    }

    // check abstract compare with list cities 
    this.listDistricts = this.cities.find(compare => compare.city === checkCity)?.districts || [];

  }
}
