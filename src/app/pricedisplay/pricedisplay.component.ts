import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricedisplay',
  standalone: true,
  imports: [],
  templateUrl: './pricedisplay.component.html',
  styleUrl: './pricedisplay.component.css'
})
export class PricedisplayComponent {
  @Input()price!:string
}
