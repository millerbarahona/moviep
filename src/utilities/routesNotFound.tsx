import { Route, Routes } from "react-router-dom"

interface Props {
  children: JSX.Element[] | JSX.Element
}
export function RoutesNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>Not Found</>}/>

    </Routes>
  )
}
