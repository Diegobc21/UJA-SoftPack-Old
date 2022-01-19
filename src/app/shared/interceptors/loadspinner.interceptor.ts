import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, JsonpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../../service/spinner.service';

@Injectable()
export class LoadspinnerInterceptor implements HttpInterceptor {

    constructor(private SpinnerService: SpinnerService){ }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.SpinnerService.show();
        return next.handle(req).pipe(
            finalize(() => this.SpinnerService.hide()));
    }

}