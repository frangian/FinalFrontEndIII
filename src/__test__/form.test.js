import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Form from '../Components/Form'

describe("funcion enviar en el form", () =>{
    test("mostrar mensaje erroneo", () => {
        render(<Form />)
        const enviar = screen.getByRole("button")
        fireEvent.click(enviar)
        const textInfo = screen.getByText("Por favor verifique su informacion nuevamente")
        expect(textInfo).toBeInTheDocument();

    })
})