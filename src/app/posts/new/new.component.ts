import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/app.state';
import { addNewPost } from '../state/post.actions';
import { Post } from '../state/post.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  postForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<appState>
  ) {}
  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      id: [],
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  onSubmit() {
    // console.log(this.postForm.value);
    let post: Post = {
      title: this.postForm.get('title')?.value,
      description: this.postForm.get('description')?.value,
    };
    this.store.dispatch(addNewPost({ post }));
  }
}
