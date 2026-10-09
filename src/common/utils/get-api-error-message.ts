import { isAxiosError } from "axios";

const FALLBACK_MESSAGE = "Unexpected error. Try again later.";

export const getApiErrorMessage = (error: unknown): string => {
  if (!isAxiosError<{ message?: string | string[] }>(error)) {
    return FALLBACK_MESSAGE;
  }

  if (!error.response) {
    return "Failed to connect with server.";
  }

  const message = error.response.data?.message;

  if (Array.isArray(message)) return message.join(". ");

  return message ?? FALLBACK_MESSAGE;
};
