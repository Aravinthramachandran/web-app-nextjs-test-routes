"use server"; // don't forget to add this!

import { prisma } from "@/lib/prisma";
import { actionClient } from "@/lib/safe-action";

export const user = actionClient.action(async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "test@test.com",
    },
  });

  if (user) {
    return {
      success: user,
    };
  }

  return { failure: "Incorrect credentials" };
});
