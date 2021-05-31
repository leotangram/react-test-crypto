import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "../../components/Formulario";
import { monedas } from "../../__mocks__/criptomonedas";

beforeEach(() => render(<Formulario />));

test("should <useCriptomonedas />", () => {
  const monedasDropdown = screen.getByTestId("select-monedas");
  expect(monedasDropdown.children.length).toEqual(monedas.length + 1);
});
