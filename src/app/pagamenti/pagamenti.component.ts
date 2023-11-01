import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagamenti',
  templateUrl: './pagamenti.component.html',
  styleUrls: ['./pagamenti.component.css']
})
export class PagamentiComponent implements OnInit {
  creditCards: any[] = [];
  sortDirection: 'ASC' | 'DESC' = 'ASC';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCreditCards();
  }

  fetchCreditCards() {
    this.http.get('https://fakerapi.it/api/v1/credit_cards?_quantity=5').subscribe((data: any) => {
      this.creditCards = data.data;
      this.sortCreditCards();
    });
  }

  sortCreditCards() {
    this.creditCards.sort((a, b) => {
      if (this.sortDirection === 'ASC') {
        return a.number.localeCompare(b.number);
      } else {
        return b.number.localeCompare(a.number);
      }
    });
  }

}
