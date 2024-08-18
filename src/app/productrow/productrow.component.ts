import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';
import { PricedisplayComponent } from '../pricedisplay/pricedisplay.component';
import { ProductdepartmentComponent } from '../productdepartment/productdepartment.component';
import { ProductimageComponent } from '../productimage/productimage.component';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-productrow',
  standalone: true,
  imports: [CommonModule,PricedisplayComponent,ProductdepartmentComponent,ProductimageComponent,RatingModule,FormsModule],
  templateUrl: './productrow.component.html',
  styleUrl: './productrow.component.css'
})
export class ProductrowComponent {
  @Input() product!:Product
  @HostBinding('attr.class') cssClass='item'
  value:number=2
}
