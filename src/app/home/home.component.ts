import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.pc') pcMode = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
  }

}
