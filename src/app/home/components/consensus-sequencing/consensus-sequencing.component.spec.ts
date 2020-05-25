import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsensusSequencingComponent } from './consensus-sequencing.component';

describe('ConsensusSequencingComponent', () => {
  let component: ConsensusSequencingComponent;
  let fixture: ComponentFixture<ConsensusSequencingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsensusSequencingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsensusSequencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
