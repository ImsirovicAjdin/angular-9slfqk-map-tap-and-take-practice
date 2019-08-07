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

    from([20, 15, 10, 5])
      .pipe( 
        tap(item => console.log(`emitted item: ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item === 0) {
            throw new Error('Zero detected!');
          }
          return item;
        })
      )
      .subscribe(
        item => console.log(`resulting item .. ${item}`),
        err => console.error(`error occured .. ${err}`),
        () => console.log('complete')
      )
    
  }
}
