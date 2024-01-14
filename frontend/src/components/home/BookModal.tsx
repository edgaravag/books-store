import Image from "next/image";
import React from "react";
import CloseIcon from "../../../public/close.png";
import BookGif from "../../../public/book.png";
import AuthorIcon from '../../../public/author.png'
import LanguageIcon from '../../../public/language.png'
import DescriptionIcon from '../../../public/description.png'
import CreateIcon from '../../../public/create.png'
import UpdateIcon from '../../../public/update.png'
import { IBookModal } from "../../app/types";

const BookModal = ({ book, onClose }: IBookModal) => {
  const formatDate = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleString()
  }
  
  return (
    <div
      className="fixed px-3 bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade w-[600px] max-w-full h-auto bg-yellow-50 rounded-xl px-5 pt-3 pb-5 flex flex-col relative"
      >
        <div className="flex justify-between items-center">
          <div className="p-2 bg-red-400 rounded-xl">
            <p className="font-medium font-rubik">{book?.publishYear}</p>
          </div>
          <Image
            src={CloseIcon}
            alt="Close Icon"
            onClick={onClose}
            className="cursor-pointer"
            width={50}
          />
        </div>
        <div className="flex items-center gap-6 mt-6">
          <Image src={BookGif} alt="" width={40} />
          <p className="text-lg font-outfit">{book?.title}</p>
        </div>
        <div className="flex items-center gap-6 mt-6">
          <Image src={AuthorIcon} alt="" width={40} />
          <p className="text-lg font-outfit">{book?.author}</p>
        </div>
        <div className={`${book.language === "" || undefined ? "hidden" : "flex items-center gap-6 mt-6"}`}>
          <Image src={LanguageIcon} alt="" width={40} />
          <p className="text-lg font-outfit">{book?.language}</p>
        </div>
        <div className={`${book.description === "" || undefined ? "hidden" : "flex items-center gap-6 mt-6"}`}>
          <Image src={DescriptionIcon} alt="" width={40} />
          <p className="text-lg font-outfit">{book?.description}</p>
        </div>
        <div className="flex items-center gap-6 mt-6">
          <Image src={CreateIcon} alt="" width={40} />
          <p className="text-lg font-outfit">Created at: {formatDate(book?.createdAt)}</p>
        </div>
        <div className={`${formatDate(book.createdAt) === formatDate(book.updatedAt) ? "hidden" : "flex items-center gap-6 mt-6"}`}>
          <Image src={UpdateIcon} alt="" width={40} />
          <p className="text-lg font-outfit">Updated at: {formatDate(book.updatedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
