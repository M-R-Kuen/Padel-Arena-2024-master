import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decode } from "jsonwebtoken";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";
const tokenCookieName = "token";

export async function middleware(request: NextRequest) {
  const googleUserCookie = request.cookies.get(googleUserKey)?.value;
  const regularUserCookie = request.cookies.get(regularUserKey)?.value;
  const userToken = request.cookies.get(tokenCookieName)?.value;
  let user = null;
  let role = null;

  if (googleUserCookie && userToken) {
    try {
      user = JSON.parse(googleUserCookie);
      role = user.role; // Extraer el rol del usuario para comparar
    } catch (error) {
      console.error("Error al analizar la cookie de Google User:", error);
    }
  } else if (regularUserCookie && userToken) {
    try {
      user = JSON.parse(regularUserCookie);
      role = user.role; // Extraer el rol del usuario
    } catch (error) {
      console.error("Error al analizar la cookie de Regular User:", error);
    }
  }

  // Rutas públicas permitidas sin autenticación
  const publicRoutes = [
    "/login",
    "/register",
    "/",
    "/home",
    "/news",
    "/tournaments",
  ];

  const currentPath = request.nextUrl.pathname;

  // Si el usuario está autenticado
  if (user) {
    // Verificar rol del usuario
    if (role === "admin") {
      // Rutas prohibidas para administradores
      const userRestrictedRoutes = ["/dashboard/user"];

      if (userRestrictedRoutes.some((route) => currentPath.startsWith(route))) {
        return NextResponse.redirect(
          new URL("/dashboard/admin/profile", request.url)
        );
      }

      // Permitir acceso a otras rutas administrativas
      if (
        currentPath.startsWith("/dashboard/admin") ||
        publicRoutes.includes(currentPath)
      ) {
        return NextResponse.next();
      }
    } else if (role === "user" || role === "jugador") {
      // Rutas prohibidas para usuarios regulares o jugadores
      if (currentPath.startsWith("/dashboard/admin/")) {
        return NextResponse.redirect(new URL("/dashboard/user", request.url));
      }

      // Permitir acceso a rutas públicas y a su propio dashboard
      if (
        publicRoutes.includes(currentPath) ||
        currentPath.startsWith("/dashboard/user") ||
        currentPath.startsWith("/chat")
      ) {
        return NextResponse.next();
      }
    }
  }

  // Si el usuario no está autenticado y la ruta no es pública
  if (!user && !publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Permitir el acceso si no se cumplen las condiciones de restricción

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/register",
    "/login",
    "/home",
    "/news",
    "/tournaments",
    "/",
    "/dashboard/:path*",
    "/auth/:path*",
    "/chat",
  ],
};
