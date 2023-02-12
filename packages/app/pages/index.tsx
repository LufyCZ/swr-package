import { useData } from "client";
import useSWR, { SWRConfig } from "swr";

function IndexPage() {
  const fallback = {
    "app-hook": "fallback-data",
    "client-hook": "fallback-data",
  };

  return (
    <SWRConfig value={{ fallback }}>
      <_IndexPage />
    </SWRConfig>
  );
}

function _IndexPage() {
  const { data: clientData } = useData();
  const { data: appData } = useSWR("app-hook", async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
    return "resolved-data";
  });

  return (
    <div>
      <div>clientData - {clientData}</div>
      <div>appData - {appData}</div>
    </div>
  );
}

export default IndexPage;
