import { Book } from "./book"
import { Rating } from "./rating"

export interface Author {
    id ?:number
    firstName?: String
    lastName?: String
    books: Book[]
    rating:Rating
}
