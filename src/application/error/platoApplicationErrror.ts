export class PlatoApplicationError extends Error {
    __proto__ = Error
  
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, PlatoApplicationError.prototype);
    }
  
  }