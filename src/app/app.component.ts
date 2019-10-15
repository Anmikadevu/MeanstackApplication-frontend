import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  messages=[];
  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.get();
  }
  post() {
    const options = { responseType: 'text' as 'json' };
    this.http.post('http://localhost:3000/api/message', this.message, options).toPromise();
    console.log("post", this.message);
  }
   async get() {
    const options = { responseType: 'text' as 'json' };
  this.messages=(await this.http.get('http://localhost:3000/api/message',options).toPromise()) as any;
  }
}
