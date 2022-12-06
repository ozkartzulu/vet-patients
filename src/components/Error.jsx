
function Error({children}){
    return(
        <div className="bg-red-700 text-white rounded-md py-1 px-2 mb-2 text-center">
            <p>{children}</p>
        </div>
    )
}

export default Error