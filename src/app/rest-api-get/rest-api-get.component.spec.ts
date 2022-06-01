import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTAPIGETComponent } from './rest-api-get.component';

describe('RESTAPIGETComponent', () => {
  let component: RESTAPIGETComponent;
  let fixture: ComponentFixture<RESTAPIGETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RESTAPIGETComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RESTAPIGETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
