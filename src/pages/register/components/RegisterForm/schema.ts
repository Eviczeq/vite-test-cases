import z from "zod";

export const schema = z.object({
  userName: z.string().max(4),
  email: z.string(),
});

export type FormType = z.infer<typeof schema>;
