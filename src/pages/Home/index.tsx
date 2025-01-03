import { HandPalm, Play } from "phosphor-react"
import { HomeContainer, StartCountDownButton, StopCountDownButton } from "./styles"
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { createContext, useEffect, useState } from "react"
import { differenceInSeconds } from "date-fns"
import { NewCycleForm } from "./components/NewCycleForm"
import { CountDown } from "./components/CountDown"

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate: Date
}

interface CyclesContextData {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextData);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles(state => (state.map((cycle) => {
      if (cycle.id == activeCycleId) {
        return {...cycle, finishedDate: new Date() }
      } else {
        return cycle;
      }
    })))
  }

  // function handleCreateNewCycle(data: NewCycleFormData) {
  //   const id = String(new Date().getTime());

  //   const newCycle: Cycle = {
  //     id,
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date(),
  //     finishedDate: new Date()
  //   }

  //   setCycles((state) => [...state, newCycle])
  //   setActiveCycleId(id)
  //   setAmountSecondsPassed(0)

  //   reset();
  // }

  function handleInterruptCycle() {
    setCycles(state => state.map((cycle) => {
      if (cycle.id == activeCycleId) {
        return {...cycle, interruptedDate: new Date() }
      } else {
        return cycle;
      }
    }));
    setActiveCycleId(null)
  }

  // const task = watch('task');
  // const isSubmitDisable = !task;

  /**
   * prop Drilling -> Quando nós temos MUITAS propriedades APENAS para fazer a comnicação entre componentes.
   * Context API -> É utilizado para compartilhar informações entre VÁRIOS componentes ao mesmo tempo.
   */

    return (
        <HomeContainer>
          <form /* onSubmit={handleSubmit(handleCreateNewCycle)}*/> 
            <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
            >
              {/* <NewCycleForm /> */}
              <CountDown />
            </CyclesContext.Provider>

             {activeCycle ? (
              <StopCountDownButton type="button">
                <HandPalm size={24}
                onClick={handleInterruptCycle}
                />
                Interromper
            	</StopCountDownButton>
             ) : (

              <StartCountDownButton /*disabled={isSubmitDisable}*/ type="submit">
                <Play size={24}/>
                Começar
              </StartCountDownButton>
             )}
          </form>
        </HomeContainer>  
    )
}