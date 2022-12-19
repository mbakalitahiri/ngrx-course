import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map } from 'rxjs';
import { appState } from 'src/app/state/app.state';
import { updatePost } from '../state/post.actions';
import { Post } from '../state/post.model';
import { getPostById } from '../state/post.selectors';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  updateForm!: FormGroup;
  post!: Post;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<appState>
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((param: Params) => {
          let id: any = param['id'];
          id = id.toString();
          this.store.select(getPostById, { id }).subscribe((data: any) => {
            this.post = data;
            console.log(data);
          });

          return param['id'];
        }),
        catchError((error: any) => {
          return error;
        })
      )
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });

    this.updateForm = this.formBuilder.group({
      id: [this.post.id],
      title: [this.post.title, [Validators.required]],
      description: [this.post.description, [Validators.required]],
    });
  }

  onUpdate() {
    this.store.dispatch(updatePost({ post: this.updateForm.value }));
  }
}
