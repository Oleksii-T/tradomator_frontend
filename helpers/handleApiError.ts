import type { AxiosError } from 'axios';
import type { AxiosErrorResponse, AxiosErrors } from '~/types/axios-types';

interface ErrorHandlerResponse {
  errors: AxiosErrors | null;
  message: string | null;
}

export const handleApiError = (error: any): ErrorHandlerResponse => {
  const axiosError = error?.cause as AxiosError;
  let errors: AxiosErrors | null = null;
  let message: string | null = null;

  if (axiosError?.response) {
    const errorData = axiosError?.response?.data as AxiosErrorResponse;

    if (errorData.message) {
      message = errorData?.message;
    }

    if (errorData?.errors) {
      errors = errorData?.errors as AxiosErrors;
    }
  }

  return { errors, message };
};
