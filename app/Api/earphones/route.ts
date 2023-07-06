import { NextResponse } from "next/server";
import data from "./earphones.json";

export async function GET() {
    return NextResponse.json(data);
}