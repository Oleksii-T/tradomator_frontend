export interface AxiosErrors {
    [key: string]: string[];
}

export interface AxiosErrorResponse {
    message?: string;
    errors?: AxiosErrors;
}