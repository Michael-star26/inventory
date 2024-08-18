import { 
  Component,
  Input,
  Output,
  EventEmitter
 } from '@angular/core';
 import { Product } from '../product.model'; 
 import { CommonModule } from '@angular/common';
import { ProductrowComponent } from '../productrow/productrow.component';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,ProductrowComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  @Input() productList!:Product[]
  @Output() onProductSelected:EventEmitter<Product>
  private currentproduct!:Product
  constructor(){
    this.onProductSelected=new EventEmitter
  }

  clicked(product:Product):void{
    this.currentproduct=product
    this.onProductSelected.emit(product)
  }
  isSelected(product:Product):boolean{
    if(!product || !this.currentproduct){
      return false
    }
    return product.sku===this.currentproduct.sku
  }
}
