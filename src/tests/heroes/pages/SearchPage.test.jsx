import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages/SearchPage";

describe('Pruebas en <SearchPage />', () => { 

  test('should show values default correctly', () => { 
      const {container} = render(
        <MemoryRouter>
          <SearchPage />
        </MemoryRouter>
      );

      expect(container).toMatchSnapshot();
   }); 

 })