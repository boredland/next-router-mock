// NOTE: this path works with Next v11.1.0+
import { RouterContext } from "next/dist/shared/lib/router-context";
import React, { FC, useMemo } from "react";

import { useMemoryRouter, MemoryRouter, Url } from "../index";
import { MemoryRouterEventHandlers } from "../useMemoryRouter";

export type MemoryRouterProviderProps = {
  /** The initial URL to render */
  url?: Url;
  async?: boolean;
} & MemoryRouterEventHandlers;

export const MemoryRouterProvider: FC<MemoryRouterProviderProps> = ({ children, url, async, ...eventHandlers }) => {
  const singletonRouter = useMemo(() => new MemoryRouter(url, async), []);
  const router = useMemoryRouter(singletonRouter, eventHandlers);
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
};
