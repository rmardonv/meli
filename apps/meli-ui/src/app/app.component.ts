import { Component, OnInit } from '@angular/core';
import { CommonService } from './core/services/common.service';
import { LoaderService } from './shared/component/loader/services/loader.service';

@Component({
  selector: 'meli-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private readonly common: CommonService,
    private readonly loader: LoaderService
  ) { }

  ngOnInit(): void {
    this.common.isLoading$().subscribe(f => this.loader.isLoading = f);
  }
}
