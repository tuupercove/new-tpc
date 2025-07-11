import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintained = process.env.isMaintained === "true";
  const isMaintenancePage = request.nextUrl.pathname === "/maintainance";

  // Always redirect to /maintainance if isMaintained is true
  if (isMaintained && !isMaintenancePage) {
    return NextResponse.redirect(new URL("/maintainance", request.url));
  }

  // Add other redirect logic below if needed

  return NextResponse.next();
}