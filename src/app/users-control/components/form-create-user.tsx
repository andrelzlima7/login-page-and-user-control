"use client";

import { useForm } from "react-hook-form";
import { userSchema } from "../_user-schema/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserRole } from "../../../../generated/prisma";
import { createUser } from "../_server-actions/create-users";

const FormCreateUser = () => {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      userName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof userSchema>) {
    await createUser({
      name: values.name,
      role: values.role,
      userName: values.userName,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Exemplo: João da Silva" {...field} />
              </FormControl>
              <FormDescription>Nome Completo do Usuário</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input placeholder="Exemplo: joaosilva" {...field} />
              </FormControl>
              <FormDescription>Nome de usuário para login</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função do usuário" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={UserRole.ADMIN}>Administrador</SelectItem>
                  <SelectItem value={UserRole.MANAGER}>Gestor</SelectItem>
                  <SelectItem value={UserRole.USER}>Usuário</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Informe a função do usuário, esta servirá para definir os
                acessos do mesmo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateUser;
