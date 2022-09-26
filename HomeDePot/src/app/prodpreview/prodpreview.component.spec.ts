import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdpreviewComponent } from './prodpreview.component';

describe('ProdpreviewComponent', () => {
  let component: ProdpreviewComponent;
  let fixture: ComponentFixture<ProdpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdpreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
