import { PropsWithChildren } from "../../types/global";

interface PageContentProps extends PropsWithChildren {}

export const PageContent = ({ children }: PageContentProps) => (
  <article>{children}</article>
);
