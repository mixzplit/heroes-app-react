import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../router/PublicRouter";
import { AuthContext } from "../../auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRouter>', () => { 
  // SI no esta autenticado
  test('debe mostar el children si no esta autenticado', () => { 
    
    const contextValue = {
      logged: false
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Ruta publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta publica')).toBeTruthy();
      
  });

  test('should be navigate if autenticated', () => { 

    const contextValue = {
      logged: true,
      user: {
        name: 'mixplit',
        id: '123'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        
        <MemoryRouter>
          <Routes>
            <Route  path="login" element={
              <PublicRouter>
                <h1>Ruta publica</h1>
              </PublicRouter>
            } />
            <Route  path="/" element={ <h1>Pagina Marvel</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    ) 

    expect(screen.getByText('Pagina Marvel')).toBeTruthy();
  
  })

})