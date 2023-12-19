import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth";
import { PrivateRouter } from "../../router/PrivateRouter";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRouter />', () => {
  // SI no esta autenticado
  test('debe mostar el children si esta autenticado', () => { 
      
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {id: 'abc', name:'David'}
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRouter>
            <h1>Ruta privada</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  });
});