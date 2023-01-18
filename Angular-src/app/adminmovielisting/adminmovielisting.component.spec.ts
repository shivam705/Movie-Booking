import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmovielistingComponent } from './adminmovielisting.component';

describe('AdminmovielistingComponent', () => {
  let component: AdminmovielistingComponent;
  let fixture: ComponentFixture<AdminmovielistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmovielistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmovielistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
