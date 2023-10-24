import { Component } from '@angular/core';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.css']
})
export class PreventivoComponent {
  name: string = '';
  surname: string = '';
  wantDomain: string = 'false';
  enteredDomain: string = '';
  domainPrice: number = 15;
  invalidDomains: string[] = ['example.com', 'domain.com', 'Exampledomain.net'];
  selectedService: string = '';
  paymentTypes = { creditCard: false, paypal: false, bankTransfer: false };
  deliveryDate: Date;
  maintenanceBundle: string = '3 months';
  fullPrice: number = 0;

  constructor() {
    this.deliveryDate = new Date();
  }

  onSubmit() {
    console.log('Name:', this.name);
    console.log('Surname:', this.surname);
    console.log('Want Domain:', this.wantDomain);

    if (this.wantDomain === 'true') {
      if (this.isInvalidDomain(this.enteredDomain)) {
        console.log('Entered Domain:', this.enteredDomain);
      } else {
        console.log('Invalid Domain:', this.enteredDomain);
      }
    }

    console.log('Selected Service:', this.selectedService);
    console.log('Payment Types:', this.paymentTypes);
    console.log('Delivery Date:', this.deliveryDate);
    console.log('Maintenance Bundle:', this.maintenanceBundle);
    console.log('Full Price:', this.fullPrice);
  }

  calculateFullPrice() {
    let basePrice = 100;

    if (this.selectedService === 'e-shop') {
      basePrice += 50;
    } else if (this.selectedService === 'static' , 'cms', 'i.o.t', 'gestionale'){
      basePrice +=30
    }

    if (this.maintenanceBundle === '3 months') {
      basePrice += 40;
    } else if (this.maintenanceBundle === '1 year') {
      basePrice += 100;
    } else if (this.maintenanceBundle === '6 months') {
      basePrice += 60;
    }
    if (this.paymentTypes.creditCard) {
      basePrice += 10;
    }
    if (this.paymentTypes.paypal) {
      basePrice += 5;
    }
    if (this.paymentTypes.bankTransfer) {
      basePrice += 5;
    }

    if (this.wantDomain === 'true') {
      basePrice += this.domainPrice;
    }

    this.fullPrice = basePrice;
  }

  isInvalidDomain(domain: string): boolean {
    return this.invalidDomains.includes(domain);
  }
}
