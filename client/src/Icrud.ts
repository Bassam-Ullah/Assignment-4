// import { User } from "./user";

export interface ICrud<T> {
  create(item: T): void;
  read(): T[];
  update(event: any, item: T): void;
  delete(item: T): void;
}
