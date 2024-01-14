import { useState } from "react";
import Image from "next/image";
import EyeGif from "../../../public/eye.gif";
import EyeIcon from "../../../public/eye.png";
import BookGif from "../../../public/book.gif";
import BookIcon from "../../../public/book.png";
import EditGif from "../../../public/edit.gif";
import EditIcon from "../../../public/edit.png";
import DeleteGif from "../../../public/delete.gif";
import DeleteIcon from "../../../public/delete.png";
import DollarGif from "../../../public/dollar.gif";
import DollarIcon from "../../../public/dollar.png";
import Link from "next/link";
import BookModal from "./BookModal";
import { IBook } from "../../app/types";

const BookSingleCard = ({ book }: IBook) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="border-2 border-slate-400 px-4 py-3 rounded-xl bg-white shadow-myInner animate-fade">
      <div className="flex justify-between items-center gap-40">
        <p className="text-2xl font-cairo">{book?.title}</p>
        <div className="w-auto p-2 bg-red-400 rounded-xl">
          <p className="font-medium font-rubik">{book?.publishYear}</p>
        </div>
      </div>
      <div className="flex mt-5 items-center gap-6">
        <Image
          src={isHovered ? BookGif : BookIcon}
          alt="Book"
          width={40}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <p className="text-lg font-outfit">{book?.author}</p>
      </div>
      <div className="flex mt-6 gap-2 ml-3">
        <p className="text-xl font-bold font-money">{book?.price}</p>
        <Image
          src={isHovered ? DollarGif : DollarIcon}
          alt="Book"
          width={30}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="flex justify-around mt-5 mb-2">
        <Image
          src={isHovered ? EyeGif : EyeIcon}
          alt="Eye icon"
          width={35}
          className="cursor-pointer hover:scale-125 transition ease-in-out delay-50"
          onClick={() => setShowModal(!showModal)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <Link href={`/books/edit/${book?._id}`}>
          <Image
            src={isHovered ? EditGif : EditIcon}
            alt="Book"
            width={35}
            className="hover:scale-125 transition ease-in-out delay-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />{" "}
        </Link>
        <Link href={`/books/delete/${book?._id}`}>
          <Image
            src={isHovered ? DeleteGif : DeleteIcon}
            alt="Book"
            width={35}
            className="hover:scale-125 transition ease-in-out delay-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />{" "}
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
