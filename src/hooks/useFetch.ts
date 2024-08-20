import { useState } from "react";

interface UseFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: object | null;
}

export const useFetch = (url: string, options?: UseFetchOptions) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<object | null>(null);

  const submit = async (customOptions?: UseFetchOptions) => {
    setIsLoading(true);
    setError(null);

    const {
      method = "POST",
      headers = {'Content-Type': 'application/json' },
      body = null,
    } = {
      ...options,
      ...customOptions,
    };

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Un error desconocido ha ocurrido."));
      }
    } finally {
      setIsLoading(false);
    }

    return { data, error };
  };

  return { submit, error, isLoading, data };
};
