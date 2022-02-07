import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading$ = new Subject<boolean>();

  show(): void {
      this.isLoading$.next(true);
  }

  hide(): void {
      this.isLoading$.next(false);
  }

  // PARA PROBARLO
  // show(): void {
  //   setTimeout(() => {
  //     this.isLoading$.next(true);
  //   }, 1000);
  // }


}
