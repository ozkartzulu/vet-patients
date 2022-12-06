function Patient({patient, setPatient, deletePatient}){
    const {name, owner, email, date, symptoms, key} = patient

    const handleDelete = () => {
        const messageConfirm = confirm("Are you sure of delete this object ?")
        if(messageConfirm){
            deletePatient(key)
        }
    }

    return (
        <div className="bg-white rounded-md ml-2 mb-2 px-3 py-4">
            <p className="text-sm text-gray-700 uppercase font-bold mb-1">Name: 
                <span className="normal-case font-normal"> {name}</span>
            </p>
            <p className="text-sm text-gray-700 uppercase font-bold mb-1">Owner: 
                <span className="normal-case font-normal"> {owner}</span>
            </p>
            <p className="text-sm text-gray-700 uppercase font-bold mb-1">Email: 
                <span className="normal-case font-normal"> {email}</span>
            </p>
            <p className="text-sm text-gray-700 uppercase font-bold mb-1">Discharge Date: 
                <span className="normal-case font-normal"> {date}</span>
            </p>
            <p className="text-sm text-gray-700 uppercase font-bold mb-1">Symptom: 
                <span className="normal-case font-normal"> {symptoms}</span>
            </p>
            <div className="flex justify-between">
                <button
                    className="bg-indigo-600 py-1 px-3 w-28 text-white rounded-md hover:bg-indigo-800 mt-2 uppercase font-bold text-sm"
                    onClick={ () => setPatient(patient) }
                >Edit
                </button>
                <button
                    className="bg-red-600 py-1 px-3 w-28 text-white rounded-md hover:bg-red-800 mt-2 uppercase font-bold text-sm"
                    onClick={ handleDelete }
                >Delete</button>
            </div>
        </div>
    )
}

export default Patient