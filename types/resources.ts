export interface UserResource {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface ResponseTemplate<T> {
  message: string;
  data: T;
}
