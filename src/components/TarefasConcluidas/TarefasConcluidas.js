import React from "react";
import { ListaContainer, TarefaConcluida } from "./styled";

export function TarefasConcluidas({ listaTarefaConcluida }) {
  return (
    <ListaContainer>
      <ul>
        {listaTarefaConcluida.map((tarefa, index) => {
          return (
            <TarefaConcluida key={index}>
              <p>{tarefa}</p>
            </TarefaConcluida>
          );
        })}
      </ul>
    </ListaContainer>
  );
}
