import { Component } from '@angular/core';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent {
  search = ""

  Search = () => {
    let data:any = {
      "search":this.search
    }
    console.log(data)
  }
}
