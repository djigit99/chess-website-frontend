import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTileComponent } from './events-tile.component';

describe('EventsTileComponent', () => {
  let component: EventsTileComponent;
  let fixture: ComponentFixture<EventsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
