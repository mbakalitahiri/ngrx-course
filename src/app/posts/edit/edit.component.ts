import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private store: Store<appState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((param: Params) => {
          let id: any = param['id'];
          id = id.toString();
          this.store.select(getPostById, { id }).subscribe((data: any) => {
            this.post = data;
            if (this.post) {
              this.updateForm = this.formBuilder.group({
                id: [this.post.id],
                title: [this.post.title, [Validators.required]],
                description: [this.post.description, [Validators.required]],
              });
            }
          });

          return param['id'];
        }),
        catchError((error: any) => {
          return error;
        })
      )
      .subscribe({
        next: (resp: any) => {},
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  onUpdate() {
    console.log(this.updateForm.value);
    this.store.dispatch(updatePost({ post: this.updateForm.value }));
    this.router.navigate(['/posts']);
  }
}
