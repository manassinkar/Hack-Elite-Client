import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-explore-candidates',
  templateUrl: './explore-candidates.component.html',
  styleUrls: ['./explore-candidates.component.scss']
})
export class ExploreCandidatesComponent implements OnInit {
  public categoryForm: FormGroup;
  public categorySelected: Boolean = false;
  public allSkills: any = [];
  public searchSkills: any = [];
  public viewSet: any = [];
  public categories: any = [];
  public candidates: any = [];
  public errMsg: string = '';
  constructor(private authService: AuthService,public fb: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      category: ['']
    });
    this.categorySelected = false;
    this.searchSkills = [];
    this.viewSet = [];
    this.allSkills= [];
    this.categories= [];
    this.candidates= [];
    this.getCategories();
  }

  getCategories()
  {
    this.authService.getCategories().subscribe(
      (categories) =>
      {
        this.categories = categories;
      },
      (error) =>
      {
        this.errMsg = error.error.message;
      }
    )
  }

  public get category()  {
    return this.categoryForm.controls.category;
  }

  compareValue(a,b)
  {
    if(a.count>=b.count)
    {
      return -1;
    }
    return 1
  }

  updateViewSet()
  {
    const newSet: any = [];
    this.searchSkills.array.forEach(skill =>
    {
      this.candidates.forEach(candidate =>
        {
          if(candidate.skills.includes(skill))
          {
            newSet.push(candidate);
          }
        });
    });
    this.viewSet = newSet;
  }

  addSearchSkill(skill)
  {
    console.log(skill);
    this.searchSkills.push(skill);
    this.updateViewSet();
  }

  removeSearchSkill(skill)
  {
    console.log(skill);
    this.searchSkills.splice(this.searchSkills.indexOF(skill),1);
    this.updateViewSet();
  }

  onSubmit()
  {
    const category = this.categoryForm.get('category').value;
    console.log(category);
    this.authService.getCandidatesByCategory(category).subscribe(
      (candidates) =>
      {
        this.candidates = candidates;
        this.viewSet = this.candidates
        this.categorySelected = true;
        let map = new Map();
        this.candidates.forEach(candidate => {
          candidate.skills.forEach(skill =>
            {
              if(map.has(skill))
              {
                const c = map.get(skill);
                map.set(skill,c+1);
              }
              else
              {
                map.set(skill,1);
              }
            });
        });
        map.forEach((val,key) =>
        {
          this.allSkills.push({ skill:key, count: val+Math.random()*10 });
        });
        this.allSkills = this.allSkills.sort(this.compareValue);
      },
      (error) =>
      {
        this.errMsg = error.error.message;
      }
    )
  }

}
