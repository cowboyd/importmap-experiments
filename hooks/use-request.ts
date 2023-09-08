import { createContext, type Operation } from "effection";

export const RequestContext = createContext<Request>('request');

export function useRequest(): Operation<Request> {
  return RequestContext;
}
