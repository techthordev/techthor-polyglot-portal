import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryTracks } from './mastery-tracks';

describe('MasteryTracks', () => {
  let component: MasteryTracks;
  let fixture: ComponentFixture<MasteryTracks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasteryTracks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasteryTracks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
