import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import {ConsensusSequencingService} from "../core/services/consensus-sequencing/consensus-sequencing.service";
import {ConsensusSequencingComponent} from "./components/consensus-sequencing";

@NgModule({
  declarations: [HomeComponent, ConsensusSequencingComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  providers: [ConsensusSequencingService]
})
export class HomeModule {}
