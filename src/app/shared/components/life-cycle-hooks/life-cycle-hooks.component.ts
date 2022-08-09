import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges 
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked
{
  @Input() value: number = 0

  constructor() { }

  changes() {
    this.value++
  }

  ngOnInit(): void {
    console.log(`app-life-cycle-hooks - ngOnInit`)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log(`app-life-cycle-hooks - ngDoCheck`)
  }

  ngAfterContentChecked(): void {
    console.log(`app-life-cycle-hooks - ngAfterContentChecked`)
  }

  ngAfterContentInit(): void {
    console.log(`app-life-cycle-hooks - ngAfterContentInit`)
  }

  ngAfterViewInit(): void {
    console.log(`app-life-cycle-hooks - ngAfterViewInit`)
  }

  ngAfterViewChecked(): void {
    console.log(`app-life-cycle-hooks - ngAfterViewChecked`)
  }
}
