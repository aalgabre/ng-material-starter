import { Injectable } from '@angular/core';
import { FirebaseBaseService } from '../../core/services/firebase-base.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends FirebaseBaseService<any> {

  constructor(protected afs: AngularFirestore) {
    super('orders', afs);
  }

  search(): Observable<any> {
    return null;
  }
}
