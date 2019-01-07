import { Component , EventEmitter, Output} from '@angular/core';
import {Post} from '../post.model';
import { NgForm } from '@angular/Forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTittle = '';
  enteredDescription = '';
  @Output() postCreated = new EventEmitter();

  // title = 'mean-app';
  OnAddPost(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const post: Post = {title : form.value.title,
                 description: form.value.Description
                };
                this.postCreated.emit(post);
    // this.NewPost = "The users's post";
      // this.newPost = `You Entered : ${this.enteredValue}`;
    // this.newPost =`you entered : ${postInput.value}` ;
    // alert('post Added');
  }
}
