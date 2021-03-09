import React from "react";
import BookDetails from "./BooksDetails";

const AdamBook = () => {
  return (
    <BookDetails
      title="Who was Ad'am? A Book of Remebrance Mal 3:16"
      booksdetails="This book is one for the ages, it reveals mysteries of Ad’am never known to man until now. Hebrew the servant and message of YHWH our Elohim was taken by the Spirit YHWH in a spiritual vortex for a span of three years 1995-1998 where he was taught during this time of the only begotten and beloved son of Elohim, Ad’am and the secrecies of the Torah. From this experience Hebrew wrote about his journey of enlightenment and formulated his testimony in his unprecedented book, Who was Ad’am? A Book of Remembrance as YHWH the Spirit of Elohim commanded him to do. This book Who was Ad’am? A Book of Remembrance reveals the undeniable truth of the death and resurrection of Ad’am as never before in the history of mankind."
      author="Elimelech Hebrew"
      image="https://xphimedia.com/img/3.png"
      authorimage="https://xphimedia.com/img/author-img.jpg"
      price1={18.99}
      price2={12.99}
      preordertext=""
      stock="In Stock."
    />
  );
};

export default AdamBook;
