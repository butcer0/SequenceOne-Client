import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {catchError, retry} from "rxjs/operators";
import {Observable, of, throwError} from "rxjs";

import {GENE_MENU_ENDPOINT, GET_SEQUENCE_ENDPOINT, PLOT_GENE_ENDPOINT} from "../../../home/constants";
import {Motif, LocationAndSequencesRequest} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ConsensusSequencingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient: HttpClient) { }

  getSequence(): Observable<any> {
    return this.httpClient.get<any>(GET_SEQUENCE_ENDPOINT)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  getSequences(consensusRegions : any, transcriptionFactor : number, geneId: number, motifLength: number): Observable<any> {
    let sequences = null;
    for(const consensusRegion of consensusRegions) {
      for (const loc in consensusRegion) {
        sequences.push(this.getSequence());
        console.log(`Sequence found: ${sequences}`);
      }
    }
    return sequences;
  }

  getLocationsAndSequences(request: LocationAndSequencesRequest): Observable<any> {
    let resultSequences = null;
    for(const geneId of request.GeneIds){
      for(const motif of request.Motifs) {

      }
    }
    return of(resultSequences);
  }

  getMotifMenu(): Observable<any> {
    return this.httpClient.get<any>(GENE_MENU_ENDPOINT)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  // Error handling
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
