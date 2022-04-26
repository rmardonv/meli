import { Component, OnInit } from "@angular/core";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: 'meli-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void { }

  showLoading() {
    return this.loaderService.isLoading;
  }

}
