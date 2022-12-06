
import Patient from "./Patient"

function ListPatients({patients, setPatient, deletePatient}){


    return (
        <div className="w-1/2 md:w-3/5">
            { patients && patients.length ? (
                <>
                    <h2 className="font-black text-2xl text-center mb-2">Patients list</h2>
                    <p className="text-base text-center font-medium mb-5">Manage your patients and 
                        <span className="text-indigo-600"> Appointments</span>
                    </p>
                    {patients.map( patient => (
                        <Patient 
                            patient = {patient} 
                            key = {patient.key} 
                            setPatient = {setPatient}
                            deletePatient = {deletePatient}
                        />
                    ) )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-2xl text-center mb-2">There is not Patients</h2>
                    <p className="text-base text-center font-medium mb-5">Add Patients 
                        <span className="text-indigo-600"> and show below</span>
                    </p>
                </>
            ) }
            
        </div>
    )
}

export default ListPatients