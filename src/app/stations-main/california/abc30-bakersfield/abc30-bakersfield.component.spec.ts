import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abc30BakersfieldComponent } from './abc30-bakersfield.component';

describe('Abc30BakersfieldComponent', () => {
  let component: Abc30BakersfieldComponent;
  let fixture: ComponentFixture<Abc30BakersfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abc30BakersfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abc30BakersfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
