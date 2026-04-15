import {render, screen} from "@testing-library/react";

describe("Home", () =>{
    it("Should render button", () => {
        render(
            <>
            <button>clique aqui</button>
            </>
        );
        screen.logTestingPlaygroundURL();
        expect(1).toBe(1);
    });
});
