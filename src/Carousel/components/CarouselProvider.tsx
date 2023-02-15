import { createContext, Dispatch, SetStateAction, useState } from "react"

type CarouselType = {
  index: number,
  setIndex: Dispatch<SetStateAction<number>>,
};
export const CarouselContext = createContext<CarouselType>({
  index: 0,
  setIndex: () => {
    alert("setIndex ainda não configurado.");
  }
})
interface Props{
  children: React.ReactNode,
  initialValue: number
}

export default function CarouselProvider({children, initialValue}: Props){
  const [index, setIndex] = useState<number>(initialValue);

  return(
    <CarouselContext.Provider value={{
      index: index,
      setIndex: setIndex
    }}>
      {children}
    </CarouselContext.Provider>
  )
}