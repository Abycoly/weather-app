import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public weatherSearchForm!: FormGroup;
  public weatherData : any;
  public date = new Date()


  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    })
    this.date
    console.log(this.weatherData);
  }

sendToAPI(formValues:any){
    //  console.log(formValues);
    this.httpService.getWeather(formValues.location).subscribe(data =>{
      this.weatherData = data;
      console.log(this.weatherData);
    })
    }

onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);

  }

}

