import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../ui/components/Navbar";

const  mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Prueba en <Navbar />', () => { 

    const contextValue = {
      logged: true,
      user: {id: 'abc', name:'David'},
      logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('should be show username logged', () => { 
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      )

      expect(screen.getByText('David')).toBeTruthy();
      
    });

    test('should call navigate function when click button', () => { 
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </AuthContext.Provider>
      );

      const logoutBtn = screen.getByRole('button');
      fireEvent.click(logoutBtn);

      expect( contextValue.logout).toHaveBeenCalled();
      expect( mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true});


    });

 })