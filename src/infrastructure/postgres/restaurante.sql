-- old to be updated
-- public.categoria definition

CREATE TABLE public.categoria (
	id serial4 NOT NULL,
	nombre varchar(255) NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT categoria_pkey PRIMARY KEY (id)
);

-- public.orden definition

CREATE TABLE public.orden (
	id serial4 NOT NULL,
	precio int4 NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT orden_pkey PRIMARY KEY (id)
);

-- public.plato definition

CREATE TABLE public.plato (
	id serial4 NOT NULL,
	nombre varchar(255) NOT NULL,
	descripcion varchar(255) NOT NULL,
	precio int4 NOT NULL,
	categoria int4 NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT plato_pkey PRIMARY KEY (id)
);

-- public."platosOrdenes" definition

CREATE TABLE public."platosOrdenes" (
	id serial4 NOT NULL,
	"platoId" int4 NULL,
	"ordenId" int4 NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "platosOrdenes_pkey" PRIMARY KEY (id)
);

-- public."platosOrdenes" foreign keys

ALTER TABLE public."platosOrdenes" ADD CONSTRAINT "platosOrdenes_ordenId_fkey" FOREIGN KEY ("ordenId") REFERENCES public.orden(id);
ALTER TABLE public."platosOrdenes" ADD CONSTRAINT "platosOrdenes_platoId_fkey" FOREIGN KEY ("platoId") REFERENCES public.plato(id);