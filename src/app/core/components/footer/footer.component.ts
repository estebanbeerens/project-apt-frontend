import { Component } from '@angular/core';

@Component({
  selector: 'apt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  copyrightDate: Date = new Date();

}
