import { NextResponse, NextRequest, MiddlewareConfig } from "next/server";

const publicRoute = "/";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const authToken = request.cookies.get("login-page-and-user-control");

  // se o usuário esta acessando uma rota publica e não tem tokem, pode seguir
  if (!authToken && pathname === publicRoute) {
    return NextResponse.next();
  }

  // se o usuário não tem tokem e está acessando uma rota privada, é redirecionado.
  if (!authToken && pathname != publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = publicRoute;

    return NextResponse.redirect(redirectUrl);
  }

  // se o usuário já está autenticado e tenta acessar uma rota publica ele é redirecionado
  if (authToken && pathname === publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/users-control";

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};