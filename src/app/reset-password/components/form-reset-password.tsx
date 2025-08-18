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
import { Loader } from "lucide-react";
import { resetPasswordSchema } from "../_password-schema/reset-password-schema";
import { resetPassword } from "../_server-actions/reset-password";

type FormResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export function FormResetPassword() {
  const form = useForm<FormResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: FormResetPasswordValues) => {
    await resetPassword(values.confirmPassword);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nova Senha
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground drop-shadow-md"
                  type="password"
                  placeholder="Digite sua nova senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Confirme sua nova senha
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground drop-shadow-md"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-primary-foreground w-full cursor-pointer font-bold drop-shadow-md"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            "Alterar Senha"
          )}
        </Button>
      </form>
    </Form>
  );
}