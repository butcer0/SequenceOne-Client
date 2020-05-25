import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";

import {ConsensusSequencingService} from "../../../core/services/consensus-sequencing/consensus-sequencing.service";

@Component({
  selector: 'app-consensus-sequencing',
  templateUrl: './consensus-sequencing.component.html',
  styleUrls: ['./consensus-sequencing.component.css']
})
export class ConsensusSequencingComponent implements OnInit {
  MotifMenu = new Observable<any>();

  constructor(public consensusSequencingService: ConsensusSequencingService) { }

  ngOnInit(): void {
    this.MotifMenu = this.consensusSequencingService.getMotifMenu();
  }
}
