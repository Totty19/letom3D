import { useState } from "react"

const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState ('')

    const [phone, setPhone] = useState ('')

    const [Dni, setDni] = useState ('')


const handleConfirm = () => {
    
    const userData = {
        name,phone,Dni
    } 

    onConfirm(userData)
}

return ( 
    <div className="">
        <form onSubmit={handleConfirm} className="form">
                <input className="input"
                        placeholder="Nombre y Apellido"  
                        type="text" 
                        value={name}
                        onChange={({target}) => setName (target.value)} />

                <input className="input"
                        placeholder="Numero de telefono"
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)} />

                <input className="input"
                        placeholder="Su Dni..."
                        type="Dni"
                        value={Dni}
                        onChange={({target}) => setDni(target.value)} />

                <button type="submit" className="btn order"> Crear orden </button>
        </form>
    </div>
)}

export { CheckOutForm }