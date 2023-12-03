import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import titleExtractor from "../utility/titleExtractor";
import CustomColorPicker from "./CustomColorPicker";
import { CustomFloatButton } from "./CustomFloatButton";
import { addNote, updateNote } from "./noteServices";
import GlobalVarContext from "../utility/GlobalVariables";

export default function Editor({ route,navigation }) {
    const [title, setTitle] = useState(route.params.title);
    const [description, setDescription] = useState(route.params.description);
    const [color, setColor] = useState(route.params.color);
    const { setNotes } = useContext(GlobalVarContext);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const onDescriptionChange = (text) => {
        setDescription(text);
        setTitle(titleExtractor(text));
    };

    const onSave=()=>{
        const newNote={...route.params,title:title,description:description,color:color}
        if(!route.params.id){
            addNote(newNote).then((detailedNote)=>{
                setNotes((oldNotes)=>[detailedNote,...oldNotes])
            })
        }else{
            updateNote(route.params.id,newNote).then((isUpdated)=>{
                if(isUpdated){
                    setNotes((notes) => {
                        const indexOfNoteToUpdate = notes.findIndex((note) => note.id === route.params.id);
                        const updatedNote = { ...notes[indexOfNoteToUpdate], title: newNote.title, description: newNote.description, color: newNote.color }
                        const updatedNotes = [...notes];
                        updatedNotes[indexOfNoteToUpdate] = updatedNote;
                        return updatedNotes;
                    })
                }
            })
        }
        navigation.navigate('NoteList');
    }


    return (
        <View style={styles.container}>
            <View style={styles.titleAndColorContainer}>
                <Text style={styles.titleStye}>{title}</Text>
                <CustomColorPicker color={color} setColor={setColor}/>
            </View>
            <View style={styles.inputAreaStyle}>
                <TextInput
                    style={styles.descriptionStyle}
                    multiline
                    onChangeText={onDescriptionChange} // Fixed: replaced onChange with onChangeText
                    value={description}
                    ref={inputRef}
                />
            </View>
            <CustomFloatButton title="save" onClick={onSave}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Added: to make the container take up the full screen
        backgroundColor: "#00bbbb",
        padding: 10,
    },
    titleAndColorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10, // Adjust padding as needed
        // marginTop: 20, // Adjust margin as needed
    },

    titleStye: {
        fontSize: 30,
        fontWeight: 'bold',
        // fontFamily:
    },
    inputAreaStyle: {
        flex: 1,
        borderWidth: 1,
        textAlignVertical: 'top',
        backgroundColor: "aqua",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        underlineColorAndroid: 'transparent',
        borderWidth: 0,
    },
    descriptionStyle: {
        fontSize: 24,

    },
});
