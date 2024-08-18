import { Component ,EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.model';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductlistComponent,NavbarComponent,MessagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myMessage!:any
  product:Product[]
  messages: Message[];
  status:boolean=false
   constructor(){
    this.product=[
      new Product(
        'White Skirt', //sku
        'A Nice white skirt', //name
        'clothe37.jpg', //imageUrl
        ['Women', 'Skirts', 'skirt'], //department
        '29.99' //price
      ),
      new Product(
        'Dress', //sku
        'A Nice tight dress', //name
        'clothe29.jpg', //imageUrl
        ['Women', 'clothes', 'dress'], //department
        '90.00' //price
      ),
      new Product(
        'Blowse', //sku
        'A buggy blowse', //name
        'clothe30.jpg', //imageUrl
        ['Women', 'Accessories', 'Ties'], //department
        '35.00' //price
      ),
      new Product(
        'coloured', //sku
        'A coloured blowse', //name
        'clothe31.jpg', //imageUrl
        ['Women', 'Accessories', 'Ties'], //department
        '20.00' //price
      ),
      new Product(
        'Green top', //sku
        'A green stylish top', //name
        'clothe32.jpg', //imageUrl
        ['Women', 'Accessories', 'Ties'], //department
        '36.00' //price
      ),
      new Product(
        'Night dress', //sku
        'White night dress', //name
        'clothe33.jpg', //imageUrl
        ['Women', 'Accessories', 'Ties'], //department
        '48.00' //price
      ),
      new Product(
        'Kitenge', //sku
        'A beautiful African kitenge', //name
        'clothe34.jpg', //imageUrl
        ['Women', 'Accessories', 'Ties'], //department
        '60.00' //price
      ),
      new Product(
        'Stripped Dress', //sku
        'A short stripped dress', //name
        'clothe35.jpg', //imageUrl
        ['Women', 'Accessories', 'Ties'], //department
        '54.00' //price
      ),
      new Product(
        'Black Skirt', //sku
        'Black Skirt', //name
        'clothe36.jpg', //imageUrl
        ['Women', 'Skirts', 'Skirt'], //department
        '80.00' //price
      )
    ]
    this.messages = [
      { severity: '', detail: 'Welcome' }
  ];

  
   }

   productWasSelected(product:Product):void{
    this.myMessage=`Product Selected ${product.name}`
    this.status=true
    this.messages = [
      { severity: 'success', detail: `${product.name} selected` }
  ];
   }

}
