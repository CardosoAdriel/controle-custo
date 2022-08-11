import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {


  private valorOrcamento$ = new BehaviorSubject<number>(0)


  constructor() { }

  getValor(): Observable<number> {
    return this.valorOrcamento$.asObservable()
  }

  setValor(value: number): void {
  this.valorOrcamento$.next(value)
  }

  getPreviousValor(value: number): number {
    return 0
  }

}
