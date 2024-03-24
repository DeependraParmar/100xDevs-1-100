import { nextauth_config } from "@/lib/auth";
import NextAuth from "next-auth"

const handler = NextAuth(nextauth_config);

export const GET = handler;
export const POST = handler;