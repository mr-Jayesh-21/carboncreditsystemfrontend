import "./chunk-J4B6MK7R.js";

// src/app/features/auth/auth.routes.ts
var authRoutes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-WXKEF6OX.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-FELMKN7T.js").then((m) => m.RegisterComponent)
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-QLVGANMU.js.map
