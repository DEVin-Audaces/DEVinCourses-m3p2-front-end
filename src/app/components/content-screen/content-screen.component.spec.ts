import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentScreenComponent } from './content-screen.component';

describe('ContentScreenComponent', () => {
  let component: ContentScreenComponent;
  let fixture: ComponentFixture<ContentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
