import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/service/Book';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.scss'],
})
export class RecordDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
  book!:Book;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    // this.crudService.GetBook(this.getId).subscribe((res) => {
    //   this.updateForm.setValue({
    //     name: res['name'],
    //     price: res['price'],
    //     description: res['description'],
    //   });
    // });


    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit() {
    this.getBook();
  }

  async getBook(){
    this.book=await this.crudService.GetBook(this.getId);
    this.updateForm.setValue({
      name:this.book.name,
      price: this.book.price,
      description: this.book.description,
    });
 
  }
  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/record-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout(){
    this.ngZone.run(() => this.router.navigateByUrl('/record-list'))
  }
}
