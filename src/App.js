import { useEffect } from "react"
import RutesScreen from "./navigations/RutesScreen"
import { useDispatch } from "react-redux"
import { setToken } from "./redux/actions/action"

function App() {
  const dispatch = useDispatch();


  return (
    <RutesScreen />
  )
}

export default App
