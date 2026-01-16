"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col h-full justify-between"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        {/* Name */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input
                placeholder="Type your full name"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                placeholder="Type your email"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Message */}
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Message</FieldLabel>
              <Textarea
                placeholder="Type your message here and i will respond to your email"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button size={"lg"} className="font-bold mt-8 cursor-pointer">
        Submit
      </Button>
    </form>
  );
}
