import React, { useState, useReducer } from "react";

const booksData = [
  { id: 1, name: "Bangla Book" },
  { id: 2, name: "Math Book" },
  { id: 3, name: "English Book" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const reducer = (state, action) => {
    if (action.type === "ADD") {
        const allBooks = [...state.books,action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen:true
        }
    }
    if (action.type === "REMOVE") {
        
    }
  return state;
};

const Index = () => {
  //   const [books, setBooks] = useState(booksData);
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [modalText, setModalText] = useState("");

  const [bookName, setBookName] = useState("");
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  });

  const handleSubmit = e => {
      e.preventDefault();
      const newbook = { id: new Date().getTime().toString(), name: bookName };
      dispatch({type:"ADD",payload:newbook})

    // setBooks(prevState => {
    //   const newbook = { id: new Date().getTime().toString(), name: bookName };
    //   return [...prevState, newbook];
    // });
    // setIsModalOpen(true);
    // setModalText("Book is Added ");
  };

  return (
    <div>
      <h1>Book List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          id="bookName"
          value={bookName}
          onChange={e => setBookName(e.target.value)}
        />
        <button type="Submit">Add Book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map(book => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default Index;
