import type { UserResource } from '~/types/resources';

export interface ILoginFormData {
  password: string;
  email: string;
}

export interface ILoginResponse {
  data: {
    user: UserResource;
    token: string;
  };
  message: string;
}
