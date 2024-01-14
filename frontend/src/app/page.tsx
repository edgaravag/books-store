"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import PlusIcon from "../../public/plus.png";
import BookSingleCard from "@/components/home/BookSingleCard";
import { IApiData } from "./types";

export default function Home() {
  const [books, setBooks] = useState<IApiData[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_MY_API_URL}`)
      .then((res) => setBooks(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative min-w-[425px] flex flex-col gap-10 px-5 py-5 sm:px-12">
      <div className="flex justify-around items-center gap-5">
        <h1 className="text-5xl font-semibold my-6 font-bungee">Book List</h1>
        <Link href="/books/create">
          <Image src={PlusIcon} alt="Plus Icon" width={55} height={55} className="animate-pulse" />
        </Link>
      </div>
      <div className="flex flex-wrap justify-around w-full h-auto gap-14 p-14 border-4 border-dotted border-slate-500 rounded-2xl">
        {books &&
          books.map((item: IApiData) => {
            return (
              <BookSingleCard key={item._id} book={item} />
            );
          })}
      </div>
      
    </div>
  );
}
