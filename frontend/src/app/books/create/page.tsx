"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import BackButton from "@/components/BackButton";
import { FormData } from "@/app/types";

const CreateBook = () => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid, touchedFields } } = useForm<FormData>();
  const router = useRouter()

  const handleSaveBook = (data: FormData) => {
    axios.post(`${process.env.NEXT_PUBLIC_MY_API_URL}`, data)
    .catch((error) => {
      console.error(error);
    });
  };

  const onSubmitHandler: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      await handleSaveBook(data);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-5">
      <BackButton />
      <div className="flex flex-col gap-7 animate-fade">
        <h1 className="text-5xl text-center font-semibold font-bungee">
          Create Book
        </h1>
        <div className="w-full md:w-[40rem] mx-auto pt-8 pb-6 px-6 h-auto border-4 border-dotted border-slate-500 rounded-2xl bg-white shadow-myInner">
          <form 
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold font-money">Title*</label>
              <input
                {...register("title", { required: 'This is required', maxLength: {value: 25, message: 'Max length is 25'} })}
                type="text"
                maxLength={25}
                className={`border-2 ${errors.title?.message && "border-red-400" || "border-slate-400"} px-4 py-2 rounded-xl bg-white text-lg font-semibold shadow-myInner outline-none`}
              />
              {!errors.title?.ref?.value && <p className="text-lg font-semibold text-red-400">{errors.title?.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold font-money">Author*</label>
              <input
                {...register("author", { required: 'This is required', maxLength: {value: 25, message: 'Max length is 25'} })}
                type="text"
                maxLength={25}
                className={`border-2 ${errors.author?.message && "border-red-400" || "border-slate-400"} px-4 py-2 rounded-xl bg-white text-lg font-semibold shadow-myInner outline-none`}              />
              {!errors.author?.ref?.value && <p className="text-lg font-semibold text-red-400">{errors.author?.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold font-money">Publish Year*</label>
              <input
                {...register("publishYear", { required: 'This is required', max: {value: new Date().getFullYear(), message: 'Max length is 4'} })}
                type="number"
                max={new Date().getFullYear()}
                className={`border-2 ${errors.publishYear?.message && "border-red-400" || "border-slate-400"} px-4 py-2 rounded-xl bg-white text-lg font-semibold shadow-myInner outline-none`}
              />
              {!errors.publishYear?.ref?.value && <p className="text-lg font-semibold text-red-400">{errors.publishYear?.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold font-money">Price*</label>
              <input
                {...register("price", { required: 'This is required', max: {value: 99999, message: 'Max length is 5'} })}
                type="number"
                max={99999}
                className={`border-2 ${errors.price?.message && "border-red-400" || "border-slate-400"} px-4 py-2 rounded-xl bg-white text-lg font-semibold shadow-myInner outline-none`}
              />
              {!errors.price?.ref?.value && <p className="text-lg font-semibold text-red-400">{errors.price?.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold font-money">
                Description
              </label>
              <input
                {...register("description", { required: false, maxLength: {value: 100, message: 'Max length is 100'} })}
                type="text"
                maxLength={100}
                className="border-2 border-slate-400 px-4 py-2 rounded-xl bg-white text-lg font-semibold shadow-myInner outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold font-money">Language</label>
              <input
                {...register("language", { required: false, maxLength: {value: 13, message: 'Max length is 13'} })}
                type="text"
                maxLength={13}
                className="border-2 border-slate-400 px-4 py-2 rounded-xl bg-white text-lg font-semibold shadow-myInner outline-none"
              />
            </div>
            <div className="mt-2 mx-auto">
              <button 
                type="submit"
                className={`py-2 px-20 text-white text-xl font-extrabold rounded-xl ${
                  (!isDirty || !isValid || Object.keys(touchedFields).length === 0) ? 'bg-red-400' : 'bg-green-400'
                } transition-all duration-700`}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
