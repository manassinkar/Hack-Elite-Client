import { Component, OnInit } from '@angular/core';
declare function foo(): any;

@Component({
  selector: 'app-home-recruiter',
  templateUrl: './home-recruiter.component.html',
  styleUrls: ['./home-recruiter.component.scss']
})
export class HomeRecruiterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.foo();

  }
  foo() {
    "use strict";
    var fullHeight = function() {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
    };
    fullHeight();
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
  }

}
