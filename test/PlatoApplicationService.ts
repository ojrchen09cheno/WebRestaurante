import { PlatoApplicationService }  from '../src/application/services/PlatoApplicationService'

describe("guardar platos", async () => {
  it("deberia guardar un nuevo plato si es valido", async () => {
    const agregar = {
      id: 3,
      nombre: "arroz super",
      precio: "2",
      categoria:"1"
    }

    const result = await platoApplicationService.crearPlato(agregar);

    expect(result).toEqual(agregar);
    expect(platoRepositoryMock.guardar).toHaveBeenCalledWith(agregar);
  })

  describe("deberia de no guardar un plato si es invalido", async () => {
    // Todo
  })
})

describe("ver platos", async () => {
  
})

describe("ver plato por id", async () => {
  
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

const datosCat = [
  {
    nombre: "arroz",
    id: "1",
  },
  {
    nombre: "chop",
    id: "2",
  }
];

const platoRepositoryMock = {
  guardar: jest.fn(),
  findById: jest.fn().mockResolvedValue(datosPlatos),
  findAll: jest.fn().mockResolvedValue(datosPlatos),
}

const categoriaRepositoryMock = {
  guardar: jest.fn(),
  findById: jest.fn().mockResolvedValue(datosCat),
  findAll: jest.fn(),
}

const platoApplicationService = new PlatoApplicationService(platoRepositoryMock, categoriaRepositoryMock);