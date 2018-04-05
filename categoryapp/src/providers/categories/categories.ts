import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoriesProvider Provider');
  }

  //Método que obtiene a todas las categorias
  getCategories(){
    return this.http.get('http://localhost:3000/api/v1/categories');
  }

  //Método que obtiene la categoría por su id
  getCategoryFindById(id){
    console.log('get category');
    console.log(id);
    return this.http.get(`http://localhost:3000/api/v1/categories/${id}`)
  }

  //Método que almacena una categoría
  saveCategory(categories){
    console.log('Save');
    console.log(categories);
    return this.http.post('http://localhost:3000/api/v1/categories',categories)
  }

  //Método que modifica una categoría
  updateCategory(category){
    console.log('get category');
    console.log(category.id);
    return this.http.put(`http://localhost:3000/api/v1/categories/${category.id}`, {'name':category.name});
  }

  //Método que elimina una categoría
  deleteCategory(id){
    console.log('get category id delete');
    console.log(id);
    return this.http.delete(`http://localhost:3000/api/v1/categories/${id}`)
  }

}
