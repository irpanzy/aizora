"use server";

import { schemaSignIn, schemaSignUp } from "@/lib/schema";
import { ActionResult } from "@/types";
import bcrypt from "bcrypt";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import prisma from "../../../../../lib/prisma";

export async function signIn(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = schemaSignIn.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    return {
      error: validate.error.errors[0].message,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
      role: "customer",
    },
  });

  if (!existingUser) {
    return {
      error: "Email not found",
    };
  }

  const comparePassword = bcrypt.compareSync(
    validate.data.password,
    existingUser.password
  );

  if (!comparePassword) {
    return {
      error: "Password is incorrect",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return {
    error: "",
    success: true,
  };
}

export async function signUp(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = schemaSignUp.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: parse.data.email },
    });

    if (existingUser) {
      return {
        error: "Email already registered. Please use another email.",
      };
    }

    const hashPassword = bcrypt.hashSync(parse.data.password, 12);

    await prisma.user.create({
      data: {
        email: parse.data.email,
        name: parse.data.name,
        password: hashPassword,
        role: "customer",
      },
    });

    return {
      error: "",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Failed sign up.",
    };
  }
}
