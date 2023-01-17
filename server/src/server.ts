// Back-end API Restful
/*
* Método HTTP:
   Get - Buscar informação através de uma rota (ex: buscar uma lista);
   Post - Rota para criar alguma coisa;
   Put - Rota para atualizar um recurso por completo;
   Patch - Atualizar uma informação específica de algum recurso;
   Delete - Deletar um recurso dentro do meu Back-end;
*/

import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Runing!");
  });
