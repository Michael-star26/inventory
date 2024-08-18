import { Component, Input, HostBinding} from '@angular/core';
import { Product } from '../product.model';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-productimage',
  standalone: true,
  imports: [TagModule,DataViewModule,ButtonModule],
  templateUrl: './productimage.component.html',
  styleUrl: './productimage.component.css'
})
export class ProductimageComponent {
  @Input() product!:Product
  @HostBinding('attr.class') cssClass = 'ui small image';

}
