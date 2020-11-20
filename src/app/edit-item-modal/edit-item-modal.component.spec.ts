import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModalComponentComponent } from './edit-item-modal.component';

describe('EditItemModalComponentComponent', () => {
  let component: EditItemModalComponentComponent;
  let fixture: ComponentFixture<EditItemModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemModalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
