import {register, passIn,observer,saveCollectionUser,emailVerification, closeSession,saveCollectionPerfil } from "../src/lib/view-controller.js";
describe(register, () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});

describe(passIn, () => {
    it('debería ser una función', () => {
      expect(typeof passIn).toBe('function');
    });
  });
  

  describe(observer, () => {
    it('debería ser una función', () => {
      expect(typeof observer).toBe('function');
    });
  });

  describe(saveCollectionUser, () => {
    it('debería ser una función', () => {
      expect(typeof saveCollectionUser).toBe('function');
    });
  });
  
  describe(emailVerification, () => {
    it('debería ser una función', () => {
      expect(typeof saveCollectionUser).toBe('function');
    });
  });
  describe(closeSession, () => {
    it('debería ser una función', () => {
      expect(typeof closeSession).toBe('function');
    });
  });

  describe(saveCollectionPerfil, () => {
    it('debería ser una función', () => {
      expect(typeof saveCollectionPerfil).toBe('function');
    });
  });