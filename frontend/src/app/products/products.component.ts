import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIf, JsonPipe, CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ProductsService } from './services/products.service';
import { NotifierService } from 'angular-notifier';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
  ],
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(
    private readonly productsService: ProductsService,
    private readonly notifier: NotifierService
  ) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      (fetchedProducts) => {
        this.products = fetchedProducts.data.posts.edges;
      },
      (error) => {
        this.notifier.notify('error', error.message);
      }
    );
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  search() {
    if (this.range.value.start && this.range.value.end)
      this.productsService
        .getFilteredProducts(
          this.range.value.start.toString(),
          this.range.value.end.toString()
        )
        .subscribe(
          (fetchedProducts) => {
            this.products = fetchedProducts.data.posts.edges.sort(
              (a: any, b: any) => {
                return (
                  <any>new Date(a.node.createdAt) -
                  <any>new Date(b.node.createdAt)
                );
              }
            );
          },
          (error) => {
            this.notifier.notify('error', error.message);
          }
        );
  }
}
