import { createContext, useEffect, useState } from "react";
import { getAllNotes } from "../components/noteServices";

const GlobalVarContext = createContext()
export default GlobalVarContext;

export const GlobalVarProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const [notes, setNotes] = useState([
		{ id: 1, title: "example", desctiption: "description", color: "red", created_time: "2023/12/0" },
		{ id: 2, title: "example", desctiption: "description", color: "green", created_time: "2023/12/1" },
		{ id: 3, title: "example", desctiption: "description", color: "blue", created_time: "2023/12/1" },
	]);

	useEffect(() => {
		const fetchData = async () => {
			const notes = await getAllNotes();
            if(notes){
                setNotes(notes);
            }
		}
		fetchData();
	}, [])


    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const contextData = {
        alert,
        showAlert,
        AlertDialog,
        notes,
        setNotes
    }
    return (
        <GlobalVarContext.Provider value={contextData}>
            {children}
        </GlobalVarContext.Provider>
    );

}


export function AlertDialog(props) {
    const type={
        danger:"pink",
        sucess:"#06d6a0",
        warning:"yellow",
        info:"blue"
    }
    const alertStyle = {
        backgroundColor: type[props.type],
        padding: "1px 20px",
        margin: "10px 20px",
        fontWeight: "bold",
        borderRadius: "20px",
        fontSize: "18px"
    }
    return (
        <div style={alertStyle}>
            <p>{props.msg}</p>
        </div>
    )
}



