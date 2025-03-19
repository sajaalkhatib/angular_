import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategory2Component } from './edit-category-2.component';

describe('EditCategory2Component', () => {
  let component: EditCategory2Component;
  let fixture: ComponentFixture<EditCategory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCategory2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
