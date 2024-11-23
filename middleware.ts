import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {

    try {
      // Call the backend API to validate the user session
      const apiResponse = await fetch(
        "http://localhost:8000/api/v1/auth/protected-route",
        {
          method: "GET",
          headers: {
            cookie: req.headers.get("cookie") || "", // Forward cookies for authentication
          },
          credentials: "include", // Ensure cookies are sent with the request
        }
      );

      if (apiResponse.ok) {
        // User is authenticated, allow access to the protected route
        return NextResponse.next();
      } else {
        // User is not authenticated, redirect to the login page
        const loginUrl = req.nextUrl.clone();
        loginUrl.pathname = "/login";
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      console.error("Error validating user:", error);

      // Redirect to login on error
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/login";
      return NextResponse.redirect(loginUrl);
    }

}

export const config = {
  matcher: ["/dashboard"], // Add any protected routes here
};
