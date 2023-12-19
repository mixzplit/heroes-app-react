import { types } from "../../../auth/types/types";

describe('Pruebas en "Types.js"', () => {
  test('should be return this types', () => { 
    expect(types).toEqual({
      login:  '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
});