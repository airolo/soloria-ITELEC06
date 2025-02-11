import { Component, Input } from "@angular/core";


@Component({
    selector: 'post-list',
    templateUrl: './post-list.components.html',
    styleUrls: ['./post-list.components.css']
})
export class PostListComponent{
   @Input() posts = [
    {title: '1st title', content: '1st content'},
      ]
}