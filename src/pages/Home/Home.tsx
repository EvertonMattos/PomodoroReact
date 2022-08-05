import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Seperator, StartCountdownButton, TaskInput } from "./styles";

export function Home (){
return(
 <HomeContainer>
  <form action="">
    <FormContainer>
    <label htmlFor="task">Vou Trabalhar em</label>
    <TaskInput id="task"list='task-suggestions' />
    <datalist id='task-suggestions'>
      <option value="Projeto1"/>
      <option value="Projeto2"/>
      <option value="Projeto3"/>
      <option value="Bananinha"/>

    </datalist>
    <label htmlFor="minutesAmount">durante</label>
    <MinutesAmountInput
     type="number"
      id='minutesAmount'
      placeholder="00"
      step={5}
      min={5}
      max={60}
       />
    <span>minutos.</span>
    </FormContainer>

  <CountdownContainer>
    <span>0</span>
    <span>0</span>
    <Seperator>
    :
      </Seperator> 
    <span>0</span>
    <span>0</span>
  </CountdownContainer>
  <StartCountdownButton disabled type="submit">
    <Play size={24}/>
    Começar
  </StartCountdownButton>
  </form>
 </HomeContainer>
)

}