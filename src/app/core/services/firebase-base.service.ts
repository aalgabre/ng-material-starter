import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export abstract class FirebaseBaseService<T> {

  constructor(protected collection: string, protected afs: AngularFirestore) {
  }

  getById(id: string): Observable<T> {
    return this.afs.doc<T>(`${this.collection}/${id}`).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any;
        const key = action.payload.id;
        return { id: key, ...data };
      })
    );
  }

  getAll(): Observable<T[]> {
    return this.afs.collection<T>(this.collection).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  create(item: any): Promise<any> {
    return this.afs.collection<T>(this.collection).add(item);
  }

  update(id: string, item: any) {
    return this.afs.doc<T>(`${this.collection}/${id}`).update(item);
  }

  delete() {

  }
}
