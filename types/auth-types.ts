import type { UserResource } from '~/types/resources';

export interface IUserStore {
  id?: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  token: string | null;
}

export interface ILoginFormData {
  username: string;
  password: string;
}

export interface ILoginResponse {
  data: {
    user: UserResource;
    token: string;
  };
  message: string;
}
