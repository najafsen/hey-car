import { PageHeader } from "../pageHeader/pageHeader";

export const NetworkRequestFailed = () => {
  return (
    <PageHeader>
      Polls app need to access internet in order to work. Check your network
      connection.
    </PageHeader>
  );
};
