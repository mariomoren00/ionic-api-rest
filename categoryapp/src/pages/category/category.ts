import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { CategoriesProvider } from '../../providers/categories/categories'
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories = {
    name: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoriesProvider: CategoriesProvider,
    public events: Events 
  ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  save(){
    console.log('Guardar')
    console.log(this.categories);

    this.categoriesProvider.saveCategory(this.categories).subscribe(
      (data) => { // Success
       console.log('categories: ', data['data']);
       this.events.publish('categoryAdd', data['data']);      
       this.navCtrl.pop();
      },
      (error) =>{
        console.error(error);
      });
  }

}
