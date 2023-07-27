import { Component } from '@angular/core';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent
{
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



