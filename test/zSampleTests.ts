import { PlatoApplicationService }  from '../src/application/serviceApplication/PlatoApplicationService'

describe("guardar platos", () => {
  it("deberia guardar un nuevo plato si es valido", async () => {
    const agregar = {
      id: 3,
      nombre: "arroz super",
      precio: 2,
      categoria: 1
    }

    const result = await platoApplicationService.crearPlato(agregar);

    expect(result).toEqual(agregar);
    expect(platoRepositoryMock.guardar).toHaveBeenCalledWith(agregar);
  })

  it("deberia de no guardar un plato si el precio es menor a 1", async () => {


    expect(async () => {
      await platoApplicationService.crearPlato(agregarInvalido);
    }).rejects.toThrow();
  })

  it("deberia de no guardar un plato si el nombre esta vacio", async () => {
    const agregarInvalido = {
      id: 4,
      nombre: "",
      precio: 100,
      caegoria: 1
    }

    expect(async () => {
      await platoApplicationService.crearPlato(agregarInvalido);
    }).rejects.toThrow();
  })

  it("deberia de no guardar un plato si la categoria no existe", async () => {
    const agregarInvalido = {
      id: 4,
      nombre: "chop suey",
      precio: 1,
      caegoria: 5
    }

    expect(async () => {
      await platoApplicationService.crearPlato(agregarInvalido);
    }).rejects.toThrow();
  })
})

describe("ver platos", () => {
  
})

describe("ver plato por id", () => {
  
})



const datosPlatos = [
  {
    id:1,
    nombre:"arroz",
    precio:"1",
    categoria:1
  },
  {
    id:2,
    nombre:"chop suery",
    precio:"2",
    categoria:2,
  }
]

const datosCat = {
    nombre: "arroz",
    id: "1",
  }
;

const agregarInvalido = {
  id: 4,
  nombre: "chop suey",
  precio: 0,
  caegoria: 1
}

const platoRepositoryMock = {
  guardar: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn().mockResolvedValue(datosPlatos),
}

const categoriaRepositoryMock = {
  guardar: jest.fn(),
  findById: jest.fn().mockResolvedValue(datosCat),
  findAll: jest.fn(),
}

const platoApplicationService = new PlatoApplicationService(platoRepositoryMock, categoriaRepositoryMock);