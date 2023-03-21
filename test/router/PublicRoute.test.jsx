import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <PublicRoute/>", () => {
  test("si no esta autenticado debe mostrar el children", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("ruta publica")).toBeTruthy();
  });

  test("debe de navegar si esta autenticad0", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Gio",
        id: "abc",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pagina marvel")).toBeTruthy();
  });
});
