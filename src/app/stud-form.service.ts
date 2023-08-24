import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class StudFormService {
  constructor() {}
  private studSubject = new Subject<string[]>();
  postData(form: string[]) {
    this.studSubject.next(form);
  }
  getData() {
    return this.studSubject.asObservable();
  }
}
