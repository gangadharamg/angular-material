import { Component, OnInit } from '@angular/core';
import { HttpService } from 'service/http.service';
import { Data } from 'src/app/data/interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Actions'];
  Data: Data[] = [];
  id: string;
  form: any;
  constructor(private route: ActivatedRoute, private service: HttpService, private router: Router) { }

  ngOnInit() {
    this.getData();

  }
  getData() {
    this.service.getData().subscribe(details => this.Data = details);
  }
  delete(id: number) {
    const a = confirm( 'are you want to delete');
    if (a) {
 this.service.deleteData(id).subscribe(message => {
        console.log('got the message:' + message);
        this.getData();

      }
      );
    }
  }

}



