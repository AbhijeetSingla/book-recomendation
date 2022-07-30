import './Bookcard.css'

function Bookcard( {book} ) {
    const bookCover = require(`../../media/images/${book?.cover?.full}`);
    return (
        <a href={book?.link} className ="txt-decor-none book-card container-base" style={{"--animation-order": `${book?.id}`}} >
            <div className="book-container flex">
                <div className="book-card-cover" style={{"backgroundImage": `url(${bookCover})`}}>
                    <div className="book-card-text flex">
                        <div>
                            <p>{book?.author}</p>    
                            <h1 className="book-card-heading">{book?.title}</h1>
                            <p className="book-card-para">{book?.abstract}</p>
                        </div>
                        <div>
                            <hr />
                            <div className="book-stat flex price-tag">
                                <p>{book.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
     );
}

export default Bookcard;