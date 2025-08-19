"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserStatus } from "../../../../generated/prisma";
import { UpdateStatus } from "../_server-actions/update-status";

const FormSchema = z.object({
  status: z.enum(UserStatus),
});

interface PropsFormUpdateStatus {
  id: string;
}

const FormUpdateStatus = ({ id }: PropsFormUpdateStatus) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await UpdateStatus(data.status, id);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um novo status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={UserStatus.ACTIVE}>
                    Ativar Usuário
                  </SelectItem>
                  <SelectItem value={UserStatus.INACTIVE}>
                    Inativar Usuário
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Atualizar</Button>
      </form>
    </Form>
  );
};

export default FormUpdateStatus;
