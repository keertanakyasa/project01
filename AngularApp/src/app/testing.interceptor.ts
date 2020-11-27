import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class TestingInterceptor implements HttpInterceptor {

  constructor() {}

  // tslint:disable-next-line: typedef
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
        tap(
          event => {
            status = '';
            if (event instanceof HttpResponse) {
              status = 'succeeded';
            }
          },
          error => status = 'failed'
        ),
        finalize(() => {
          const elapsedTime = Date.now() - startTime;
          const message = req.method + '' + req.urlWithParams + '' + status;
          // tslint:disable-next-line: no-unused-expression
          +  ' in ' + elapsedTime + 'ms';

          this.logDetails(message);
        })
    );
  }
  // tslint:disable-next-line: typedef
  private logDetails(msg: string) {
    console.log(msg);
  }

}
