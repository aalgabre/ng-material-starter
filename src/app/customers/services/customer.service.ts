import { Injectable } from '@angular/core';
import { FirebaseBaseService } from '../../core/services/firebase-base.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class CustomerService extends FirebaseBaseService<any> {

  constructor(protected afs: AngularFirestore) {
    super('customers', afs);
  }

  search(text: string): Observable<any> {

    const end = text + '\uf8ff';


    const lastname$ = this.afs.collection<any>(this.collection, ref => {
      return ref

        .where('lastname', '>=', text)
        .where('lastname', '<', end)
        .limit(5);
      // .startAt(text)
      // .endAt(end);
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    const firstname$ = this.afs.collection<any>(this.collection, ref => {
      return ref

        .where('firstname', '>=', text)
        .where('firstname', '<', end)
        .limit(5);
      // .startAt(text)
      // .endAt(end);
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    return combineLatest(firstname$, lastname$).pipe(
      map(([one, two]) => [...one, ...two])
    );
  }
}
