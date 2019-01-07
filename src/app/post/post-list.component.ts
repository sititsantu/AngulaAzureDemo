import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
 @Input() posts = [
  // { tittle: "first", content: "fisrt content"},

  // { tittle: "second",  content: "second content"}
];
}
