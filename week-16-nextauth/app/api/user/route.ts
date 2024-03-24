import { nextauth_config } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(nextauth_config);

    return NextResponse.json({
        session,
    })
}