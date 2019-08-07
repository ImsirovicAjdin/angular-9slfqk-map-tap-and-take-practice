import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {

    from([20, 15, 10, 5]).pipe().subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.log(`error occured .. ${err}`),
      () => console.log('complete')
    )
    
  }
}
