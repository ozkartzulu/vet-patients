import { useState, useEffect } from 'react'
import Header from "./components/Header"
import ListPatients from "./components/ListPatients"
import Form from "./components/Form"

function App() {
  let initialState = JSON.parse(localStorage.getItem('patients')) ?? []
  const [patients, setPatients] = useState(initialState)
  const [patient, setPatient] = useState({})

  useEffect( () => {
    const recoverPatientsLS = () => {
      initialState = JSON.parse(localStorage.getItem('patients')) ?? []
      setPatients(initialState)
    }
    recoverPatientsLS()  
  }, [] )

  useEffect( () => {
    localStorage.setItem('patients', JSON.stringify(patients) )
  },[patients] )

  const deletePatient = key => {
      const listUpdate = patients.filter( patientCurrent => patientCurrent.key !== key )
      setPatients(listUpdate)
  }

  return (
    <div className="App py-4 px-3">
      <Header />
      <div className="flex">
        <Form 
          patients = {patients}
          setPatients = {setPatients}
          patient = {patient}
          setPatient = {setPatient}
        />
        <ListPatients 
          patients = {patients}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
        />
      </div>
    </div>
  )
}

export default App
