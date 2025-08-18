"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Loader } from "lucide-react";
import { authSchema } from "../_auth-schema/auth-schema";
import { auth } from "../_server-actions/auth";

type FormAuthValues = z.infer<typeof authSchema>;

export function FormAuth() {
  const form = useForm<FormAuthValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: FormAuthValues) => {
    try {
      await auth(values.userName, values.password);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro inesperado.");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel >
                Username
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground drop-shadow-md"
                  type="text"
                  placeholder="Digite seu usuário"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Senha
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground drop-shadow-md"
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-center font-bold text-white uppercase">{error}</p>
        <Button
          type="submit"
          className="text-primary-foreground w-full cursor-pointer font-bold drop-shadow-md"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </Form>
  );
}