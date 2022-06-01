import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTAPIPOSTComponent } from './rest-api-post.component';

describe('RESTAPIPOSTComponent', () => {
  let component: RESTAPIPOSTComponent;
  let fixture: ComponentFixture<RESTAPIPOSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RESTAPIPOSTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RESTAPIPOSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
