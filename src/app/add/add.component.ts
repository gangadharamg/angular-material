import { Component, OnInit } from '@angular/core';
import { HttpService } from 'service/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    symbol: new FormControl('', Validators.required)
  });
  path: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router) { }
  ngOnInit() {
    this.path = this.route.snapshot.url[0].path;
    if (this.path === 'update') {
      const id = + this.route.snapshot.paramMap.get('id');
      this.http.getElementById(id).subscribe(
        userForm => {
          this.form.patchValue({
            id: userForm.id,
            position: userForm.position,
            name: userForm.name,
            weight: userForm.weight,
            symbol: userForm.symbol

          });
        });
    }
  }

  add() {
    const data = this.form.value;
    if (this.path === 'update') {
      this.http.updateData(data).subscribe(() => {
        this.form.reset();
        this.router.navigateByUrl('/data');
      });
    }
    if (this.path === 'add') {
      this.http.addData(data).subscribe(() => {
        this.form.reset();
        this.router.navigateByUrl('/data');
      });
    }
  }
}





