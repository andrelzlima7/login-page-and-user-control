import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisIcon } from "lucide-react";
import ResetPasswordUser from "./reset-password-user";

interface PropsPopoverOptions {
  id: string;
}

const PopoverOptions = ({ id }: PropsPopoverOptions) => {
  return (
    <Popover>
      <PopoverTrigger>
        <EllipsisIcon />
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ResetPasswordUser id={id} />
      </PopoverContent>
    </Popover>
  );
};

export default PopoverOptions;
