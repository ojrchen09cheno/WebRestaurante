export class OrdenApplicationError extends Error {
    __proto__ = Error
  
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, OrdenApplicationError.prototype);
    }
  
  }