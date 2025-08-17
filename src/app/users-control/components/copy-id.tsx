"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface PropsCopyId {
  id: string;
}

const CopyId = ({ id }: PropsCopyId) => {
  const copyText = () => {
    navigator.clipboard.writeText(id);
    toast.success(`ID ${id} -- copiado com sucesso!`);
  };
  return (
    <Button variant={"link"} onClick={() => copyText()}>
      <Copy />
    </Button>
  );
};

export default CopyId;
