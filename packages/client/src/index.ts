import useSWR from "swr";

export function useData() {
  return useSWR("client-hook", async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
    return "resolved-data";
  });
}
