import React, { useState } from "react";

const booksData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanto" },
];
const UseRudcer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(e.target.value);
  };
  return (
    <div>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
      </form>
      <button type="submit">Add Book</button>
      {books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default UseRudcer;
