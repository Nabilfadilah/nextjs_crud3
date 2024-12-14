import React, {Suspense} from "react";
import {Spinner} from "@/components/Spinner";
import TableData from "@/components/TableData";
import Link from "next/link";
import Search from "@/components/search";

const Home = async ({searchParams}: {searchParams?: {query?: string}}) => {
  // Await for searchParams to resolve
  const query = searchParams?.query || "";

  console.log("SearchParams:", searchParams);

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">
          Next.js 15 CRUD and Search with Prisma Mysql | TailwindCSS DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
        </div>

        <Search />
        <Suspense key={query} fallback={<Spinner />}>
          <TableData query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
