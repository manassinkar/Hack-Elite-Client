import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-recruiter',
  templateUrl: './home-recruiter.component.html',
  styleUrls: ['./home-recruiter.component.scss']
})
export class HomeRecruiterComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.foo();
    this.router.navigate(['./explore'], {relativeTo: this.route});
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

  logout()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
