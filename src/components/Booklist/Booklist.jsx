import bookdb from "../../database/bookdb.json";
import Bookcard from "../Bookcard/Bookcard";

function Booklist( {category} ) {
    return ( 
        bookdb? bookdb.books?.map((book) => book.tag === category ? <Bookcard book={book} key={book.id} /> : <></>) : "Sorry, an error occured :("
     );
}

export default Booklist;