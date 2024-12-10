import { Play } from "phosphor-react"
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles"
import { useForm } from 'react-hook-form'

export function Home() {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {

  }

  const task = watch('task');
  const isSubmitDisable = !task;

    return (

        <HomeContainer>
          <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
            <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>
                <TaskInput 
                id="task" 
                list="task-suggestions"
                placeholder="Dê um nome para seu projeto"
                {...register('task')}
                />

                <datalist id="task-suggestions">
                  <option value="Projeto 1" />
                  <option value="Projeto 2" />
                  <option value="Projeto 3" />
                </datalist>

                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register('minutesAmount', {valueAsNumber: true} )}
                />
                <span>minutos.</span>
            </FormContainer>

             <CountDownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
             </CountDownContainer>

            <StartCountDownButton disabled={isSubmitDisable} type="submit">
                <Play size={24}/>
                Começar
            </StartCountDownButton>
          </form>

        </HomeContainer>  
    )
}