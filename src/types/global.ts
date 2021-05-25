import { ReactNode } from "react";

export interface PropsWithChildren<TChildren = ReactNode> {
  children?: TChildren;
}
