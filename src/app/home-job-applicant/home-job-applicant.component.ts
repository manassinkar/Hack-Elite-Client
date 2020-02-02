import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-job-applicant',
  templateUrl: './home-job-applicant.component.html',
  styleUrls: ['./home-job-applicant.component.scss']
})
export class HomeJobApplicantComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

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

  logout()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
