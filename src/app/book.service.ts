import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


const UPVOTE_POST = gql`
mutation AddBook($title:String,$pages:Int){
  addBook(title:$title,pages:$pages){
    id
    title
    pages
  }
}
`
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apollo: Apollo) { }
   loadBook():Observable<any>{ 
    return this.apollo.watchQuery({
      query: gql`
        {
          
          allBooks{
            id 
            title
            pages
            author{
              id
              firstName
              lastName
            }
            rating{
              star
            }
          }          
        }
      `
    })
    .valueChanges;
  

   }
   
   addBook(title:string,pages:number):Observable<any>{
   return this.apollo.mutate({
      mutation: UPVOTE_POST,
      variables: {
        title:title,
        pages:pages
      }
    })
  }
  loadAuthors():Observable<any>{ 
    return this.apollo.watchQuery({
      query: gql`
        {
          allAuthors{
              id           
          }       
        }
      `
    })
    .valueChanges;
  

   }
}
