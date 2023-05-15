import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsRUComponent } from './documents-ru.component';

describe('DocumentsRUComponent', () => {
  let component: DocumentsRUComponent;
  let fixture: ComponentFixture<DocumentsRUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsRUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsRUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
