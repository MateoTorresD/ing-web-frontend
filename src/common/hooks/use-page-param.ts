import { useSearchParams } from "react-router";

const DEFAULT_PAGE = 1;

export const usePageParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parsed = Number(searchParams.get("page"));
  const page =
    Number.isInteger(parsed) && parsed >= DEFAULT_PAGE ? parsed : DEFAULT_PAGE;

  const setPage = (next: number) => {
    setSearchParams((prev) => {
      prev.set("page", String(Math.max(DEFAULT_PAGE, next)));
      return prev;
    });
  };

  return { page, setPage };
};
