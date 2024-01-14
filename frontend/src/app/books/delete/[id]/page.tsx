"use client";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

const DeleteBook = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios.delete(`${process.env.NEXT_PUBLIC_MY_API_URL}/${id}`).catch((error) => {
      console.error(error);
      setIsError(true);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen p-5">
      <BackButton />
      <div className="flex flex-col gap-7 animate-fade mt-4">
        <h1 className="text-5xl text-center font-semibold font-bungee">
          Delete Book
        </h1>
        <div className="w-full md:w-[40rem] flex flex-col gap-5 mx-auto pt-8 pb-6 px-6 h-auto border-4 border-dotted border-slate-500 rounded-2xl bg-white shadow-myInner">
          <h3 className="text-2xl text-center font-outfit">
            Are you sure you want to delete this book?
          </h3>
          <Link
            href={isError ? "" : "/"}
            className="flex justify-center bg-red-400 mt-8 mb-4 w-full p-4 rounded-2xl text-white font-outfit"
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
