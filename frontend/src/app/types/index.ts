export interface IApiData {
  author: string;
  createdAt: string;
  description?: string;
  language?: string;
  price: number;
  publishYear: number;
  title: string;
  updatedAt: string;
  _v?: number;
  _id?: string;
}

export interface IBookModal {
  book: IApiData;
  onClose: () => void;
}

export interface IBook {
  book: IApiData;
}

export type FormData = {
  title: string;
  author: string;
  publishYear: number;
  price: number;
  description?: string;
  language?: string;
};
