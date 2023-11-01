import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentiComponent } from './pagamenti.component';

describe('PagamentiComponent', () => {
  let component: PagamentiComponent;
  let fixture: ComponentFixture<PagamentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentiComponent]
    });
    fixture = TestBed.createComponent(PagamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
