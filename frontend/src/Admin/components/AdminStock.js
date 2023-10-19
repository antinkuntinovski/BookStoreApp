import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import dummyBooks from "./AdminStockDummyBooks";
import AdminStockBooks from "./AdminStockBooks";
import styled from "styled-components";

const AdminStock = () => {
  const [books, setBooks] = useState([]);

  const BooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
  `;

  useEffect(() => {
    const getBooks = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/admin/product-manager/get-stock-books",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const data = await response.json();
      setBooks(data);
    };

    getBooks();
  }, []);

  const changeStockHandler = (book) => {};

  return (
    <div className="list">
      <SideBar />
      <div className="list-container">
        <NavBar />
        <BooksContainer>
          {books.map((item) => (
            <AdminStockBooks
              key={item._id}
              id={item._id}
              name={item.title}
              author={item.author}
              publisher={item.distributor}
              image={item.imageUrl}
              stock={item.number}
              updateStock={changeStockHandler}
            />
          ))}
        </BooksContainer>
      </div>
    </div>
  );
};

export default AdminStock;
