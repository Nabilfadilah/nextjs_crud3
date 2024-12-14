"use client";

import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {push} = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(
      searchParams as unknown as Record<string, string>
    );
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 mb-5 ml-5 mr-5">
      <input
        type="text"
        className="input input-bordered input-accent w-full"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query") || ""}
      />
    </div>
  );
};

export default Search;
