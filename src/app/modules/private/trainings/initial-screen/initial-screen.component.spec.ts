import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialScreenComponent } from './initial-screen.component';

describe('InitialScreenComponent', () => {
  let component: InitialScreenComponent;
  let fixture: ComponentFixture<InitialScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
