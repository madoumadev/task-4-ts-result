/** @format */
import { IComponent } from "./types";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = <T>(url: string): Promise<T> => {
  const config = { method: "GET" };
  return fetch(url, config).then<T>((response) => response.json());
};

getData<IComponent[]>(COMMENTS_URL).then((data) => {
  if (data.length > 0) {
    data.forEach((comment) =>
      console.log("ID: ", comment.id, "Email: ", comment.email)
    );
  }
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
