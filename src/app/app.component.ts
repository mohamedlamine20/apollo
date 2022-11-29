import { Component, Input } from '@angular/core';
import { Apollo, gql, Mutation } from 'apollo-angular';
import { Author } from './author';
import { Book } from './book';
import { BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagetitle = 'apollo';
  books:Book[]=[];
  loading = true;
  error: any;
  authors:Author[]=[];
  id :any[]=[];


  title!:string
  pages!:number

  display:boolean =false;




  constructor(private apollo: Apollo,private bookService:BookService) {}
 
  ngOnInit() {
    this.bookService.loadBook().subscribe(result=>{     
      this.books=result.data.allBooks;
      this.error=result.error;
      this.loading=result.loading
    })
    
    this.bookService.loadAuthors().subscribe(result=>{
      this.authors = result.data.allAuthors

    })      
  }
submit(){
  this.bookService.addBook(this.title,this.pages).subscribe(  
  )
 
}
ok(){

this.display=true;
this.id = this.authors.map(__=>__.id);
console.log(this.id);

}

onSelect(){

}

selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
    console.log(this.selectedTeam);
    
	}
   
}

  
  
