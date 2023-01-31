import { useState } from "react";
import { TarefasConcluidas } from "../TarefasConcluidas/TarefasConcluidas";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaTarefaConcluida, setListaTarefaConcluida] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const enterTarefa = (e) => {
    if (e.key === "Enter") {
      adicionaTarefa();
    }
  };

  const removeTarefa = (tarefa, index) => {
    const listaFiltrada = lista.filter((item, indice) => indice !== index);
    const listaTarefaConcluida2 = lista.filter((item, indice) => indice === index);
    setListaTarefaConcluida([...listaTarefaConcluida, listaTarefaConcluida2]);
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={(e) => enterTarefa(e)}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa, index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <TarefasConcluidas listaTarefaConcluida={listaTarefaConcluida}/>
    </ListaTarefasContainer>
  );
}
