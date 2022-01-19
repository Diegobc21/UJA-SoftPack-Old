import { Component } from '@angular/core';
import { SpinnerService } from '../../service/spinner.service';

@Component({
  selector: 'app-loadspinner',
  templateUrl: './loadspinner.component.html',
  styleUrls: ['./loadspinner.component.css']
})
export class LoadspinnerComponent {

  isLoading$ = this.SpinnerService.isLoading$;

  constructor( private SpinnerService: SpinnerService) { }

}
