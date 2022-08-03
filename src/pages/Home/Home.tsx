import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Seperator } from "./styles";

export function Home (){
return(
 <HomeContainer>
  <form action="">
    <FormContainer>
    <label htmlFor="task">Vou Trabalhar em</label>
    <input id="task" />
    <label htmlFor="minutesAmount">durante</label>
    <input type="number" id='minutesAmount'/>
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
  <button>
    <Play size={24}/>
    Começar
  </button>
  </form>
 </HomeContainer>
)

}