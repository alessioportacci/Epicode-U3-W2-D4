import { Component } from '@angular/core';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent {
  posts:any
  constructor()
  {
    this.getData()
  }

  getData()
  {
    this.posts =
    fetch("./../../../../assets/db.json")
      .then(response =>
        {
          if(response.ok) return response.json()
          else return ""
        })
      .then(data =>
        {
          console.log(data)
          return data
        })


  }

}
