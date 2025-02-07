import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<any[]> {
    const productsCollection = collection(this.firestore, 'products');
    return collectionData(productsCollection, { idField: 'id' });
  }

  async addProduct(product: any) {
    const productsCollection = collection(this.firestore, 'products');
    return await addDoc(productsCollection, product);
  }

  async deleteProduct(id: number) {
    const product = doc(this.firestore, `products/${id}`);
    return await deleteDoc(product);
  }

  async updateProduct(productId: string, updatedData: any) {
    const updatedProduct = doc(this.firestore, `products/${productId}`);
    return await updateDoc(updatedProduct, updatedData);
  }


  async getOneProduct(productId: string): Promise<any> {
    const productDoc = doc(this.firestore, 'products', productId);
    const snapshot = await getDoc(productDoc);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error('pas trouvé');
    }
  }
}
