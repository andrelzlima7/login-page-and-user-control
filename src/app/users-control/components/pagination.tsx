"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PropsPagination {
  page: number;
  totalPages: number;
  route: string;
}

const Pagination = ({ page, totalPages, route }: PropsPagination) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    router.push(`/${route}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant={"outline"}
        onClick={() => goToPage(1)}
        disabled={currentPage <= 1}
      >
        <ChevronsLeft />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <ChevronLeft />
      </Button>
      <span className="mx-4">{`Página ${page} / ${totalPages}`}</span>
      <Button
        variant={"outline"}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => goToPage(totalPages)}
        disabled={currentPage >= totalPages}
      >
        <ChevronsRight />
      </Button>
    </div>
  );
};

export default Pagination;
