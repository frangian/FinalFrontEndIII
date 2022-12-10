import React from "react";
import { screen, render } from "@testing-library/react";
import Home from '../Routes/Home'
import ContextProvider from "../Components/utils/global.context";


describe("renderizado de cards en home", () =>{
    test("renderizar cards", () => {
        render(<ContextProvider>
            <Home/>
        </ContextProvider>)
        const card = screen.getByText("Home")
        expect(card).toBeInTheDocument();
    })
})