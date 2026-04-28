class ApiError extends Error {
  status: number;
  data?: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  return import.meta.env.VITE_API_URL;
};

const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const baseUrl = getBaseUrl();
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
  const response = await fetch(fullUrl, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  let data: unknown;

  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    throw new ApiError(
      (data as any)?.message || "Request failed",
      response.status,
      data,
    );
  }

  return data as T;
};

const get = <T>(url: string) => request<T>(url);

const post = <T>(url: string, body: unknown) =>
  request<T>(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

const put = <T>(url: string, body: unknown) =>
  request<T>(url, {
    method: "PUT",
    body: JSON.stringify(body),
  });

const patch = <T>(url: string, body: unknown) =>
  request<T>(url, {
    method: "PATCH",
    body: JSON.stringify(body),
  });

const remove = <T>(url: string) =>
  request<T>(url, {
    method: "DELETE",
  });

export { get, post, put, patch, remove, ApiError };
