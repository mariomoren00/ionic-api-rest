import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CategoriesProvider } from '../../providers/categories/categories';

import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories = [];

  constructor(
    public navCtrl: NavController,
    private categoriesProvider: CategoriesProvider,
    public modal: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public event: Events,
    public alertController: AlertController

  ) {
    event.subscribe('categoryAdd', (category) => {
      console.log('Category:');
      console.log(category);
      this.categories = this.categories.concat(category);
    });

    this.categoriesProvider.getCategoryFindById(8).subscribe(
      (data) => { // Success
       console.log('category id: ', data['data']);
      },
      (error) =>{
        console.error(error);
      });
  }

  ionViewDidLoad() {
    this.getAll()
  }

  getAll(){
    console.log('ionViewDidLoad');
    this.categoriesProvider.getCategories().subscribe(
      (data) => { // Success
       console.log('categories: ', data['data']);
       this.categories = data['data'];
      },
      (error) =>{
        console.error(error);
      });
  }

  getModal(){
    console.log('click create');
    
    let modal = this.modal.create(CategoryPage);
    modal.present();

  }


  action(item: any, index){
    console.log(item);
    console.log(index);
    console.log('Action');
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Reporte',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('delete clicked');

            this.categoriesProvider.deleteCategory(item.id).subscribe(
              (data) => { // Success
               console.log('categories: ', data);
               this.categories.splice(index,1);
              },
              (error) =>{
                console.error(error);
              });
          }
        },{
          text: 'Editar',
          handler: () => {
            console.log('edit clicked');
            this.showPrompt(item, index);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showPrompt(item, index) {
    let prompt = this.alertController.create({
      title: item.name,
      message: "Edit category",
      inputs: [
        {
          name: 'name',
          value: item.name
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            data = Object.assign (data, {'id': item.id})
            console.log(data);
            this.categoriesProvider.updateCategory(data).subscribe(
              (result) => { // Success
               console.log('categories: ', result);
               this.categories.splice(index,1);
               this.getAll()
              },
              (error) =>{
                console.error(error);
              });

          }
        }
      ]
    });
    prompt.present();
  }

}
