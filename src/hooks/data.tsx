import React, { createContext, ReactNode, useContext, useState } from 'react'

interface DataProviderProps {
  children: ReactNode
}

interface Punctuation {
  number: number
}

interface DataContextPros {
  punctuation: number
  setPunctuation: () => void
}

const DataContext = createContext<DataContextPros>({} as DataContextPros)

function DataProvider({ children }: DataProviderProps) {
  const [punctuation, setPunctuation] = useState(66)

  return (
    // @ts-ignore
    <DataContext.Provider value={{ punctuation, setPunctuation }} >
      {children}
    </DataContext.Provider>
  )
}

function useData() {
  const context = useContext(DataContext)

  return context
}

export { DataProvider, useData }