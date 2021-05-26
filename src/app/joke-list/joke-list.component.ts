import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  items: Observable<any[]> = of([]);

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.items = this.firestore.collection<any>('jokes').valueChanges();
  }

}
