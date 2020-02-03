import {loginGoogle, loginFacebook} from "../src/lib/controllerAuth.js";
describe(loginGoogle, () => {
  it('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe(loginFacebook, () => {
    it('debería ser una función', () => {
      expect(typeof loginGoogle).toBe('function');
    });
  });
  