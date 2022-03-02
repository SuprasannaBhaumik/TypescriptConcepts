import {Book} from "./Book";
import {Magazine} from "./Magazine";

export interface NestedLibrary {
    books: Book[];
    magazines: Magazine[];
}
