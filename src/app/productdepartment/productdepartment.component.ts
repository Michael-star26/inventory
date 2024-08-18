import { Component, Input} from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdepartment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdepartment.component.html',
  styleUrl: './productdepartment.component.css'
})
export class ProductdepartmentComponent {
@Input() product!:Product
}
