import { useState, useEffect } from "react"
import Error from "./Error"

function Form( { patients, setPatients, patient, setPatient } ){

    const [name, setName] = useState("")
    const [owner, setOwner] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [symptoms, setSymptoms] = useState("")

    const [error, setError] = useState(false)

    const generateKey = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // validation of form
        if([name, owner, email, date, symptoms].includes("")){
            setError(true)
            return
        }
        setError(false)

        // Create a object of Patient for add to array
        const objectPatient = {
            name,
            owner,
            email,
            date,
            symptoms
        }

        if(patient.key){
            objectPatient.key = patient.key
            const listUpdate = patients.map( patientState => patientState.key === patient.key ? objectPatient : patientState )

            setPatients(listUpdate)
            setPatient({})
        }else{
            objectPatient.key = generateKey()
            setPatients([...patients, objectPatient])
        } 

        // Reset all value to ""
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
    } 

    useEffect( () => {
        if( Object.keys(patient).length > 0 ){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }
    }, [patient] )
    

    return(
        <div className="w-1/2 md:w-2/5">
            <h2 className="font-black text-2xl text-center mb-2">Patients follow-ups</h2>
            <p className="text-base text-center font-medium mb-5">Add Patients and 
                <span className="text-indigo-600"> Manage them</span>
            </p>
            <form className="bg-white rounded-md shadow-md py-5 px-3" onSubmit={handleSubmit}>
            { error && <Error>All fields are required</Error> }
                <div className="mb-3">
                    <label className="block mb-1 text-gray-700 font-bold uppercase" htmlFor="pet">Pet Name</label>
                    <input className="text-sm w-full border placeholder-gray-200 rounded-sm font-bold py-1 px-2" 
                        id="pet" 
                        type="text" 
                        placeholder="Pet Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 text-gray-700 font-bold uppercase" htmlFor="owner">Owner Name</label>
                    <input className="text-sm w-full border placeholder-gray-200 rounded-sm font-bold py-1 px-2" 
                        id="owner" 
                        type="text" 
                        placeholder="Owner Name"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 text-gray-700 font-bold uppercase" htmlFor="email">Email</label>
                    <input className="text-sm w-full border placeholder-gray-200 rounded-sm font-bold py-1 px-2" 
                        id="email" 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 text-gray-700 font-bold uppercase" htmlFor="date">Discharge date</label>
                    <input className="text-sm w-full border placeholder-gray-200 rounded-sm font-bold py-1 px-2" 
                        id="date" 
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 text-gray-700 font-bold uppercase" htmlFor="symptoms">Symptoms</label>
                    <textarea className="text-sm w-full border placeholder-gray-200 rounded-sm font-bold py-1 px-2" 
                        id="symptoms" 
                        type="textarea" 
                        placeholder="Describe the symptoms"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <input className="bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold w-full p-2 rounded-md transition-all cursor-pointer" 
                    type="submit" 
                    value={ patient.key ? "Edit Patient" : "Add Patient"}
                />
            </form>
        </div>
    )
}

export default Form