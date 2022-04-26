import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'meli-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  form: FormGroup;

  @Output() onFind = new EventEmitter<string>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm = (): void => {
    this.form = this.formBuilder.group({
      query: ['', Validators.compose(
        [
          Validators.required,
          Validators.pattern('[-_a-zA-Z0-9 ]*')
        ]
      )]
    });

    this.route.queryParams.subscribe(({ search }) => {
      this.form.get('query').setValue(search);
    });
  }

  find = (): void => {
    const value = this.form.get('query').value;
    this.onFind.emit(value);
  }

  home = () => {
    this.router.navigate(['/']);
  }

}
