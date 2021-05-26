import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {

  addJokeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private router: Router,
  ) { 
    this.addJokeForm = this.formBuilder.group({
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.addJokeForm.reset();
  }

  addJoke() {
    if(this.addJokeForm.valid) {
      this.firestore.collection('jokes').add(this.addJokeForm.value).then((val) => {
        this.router.navigate(['/', 'home']);
      }).catch((err) => console.log(err));
    }
  }

}
