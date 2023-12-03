import React from "react";
import { View, TouchableOpacity, Modal, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native";

const NoteMenu = ({ isVisible, setMenuVisible, position, action}) => {
    const modalStyle = {
        bottom: Dimensions.get("window").height - position.y,
        right: Dimensions.get("window").width - position.x,
      };

    const onMenuSelected=(actionFunction,params)=>{
        setMenuVisible(false);
        actionFunction(...params);
    }

    return (
        <Modal transparent={true} animationType="slide" visible={isVisible} onRequestClose={() => setMenuVisible(false)}>
            <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                <View style={styles.overlay} />
            </TouchableWithoutFeedback>

            <View style={[styles.modalContainer, modalStyle]}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={()=>onMenuSelected(action.onDelete,[action.note.id])}>
                        <Text style={styles.modalItem}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>onMenuSelected(action.onChangeColor,[action.note.id,"red"])}>
                        <Text style={styles.modalItem}>Color</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        position: 'absolute',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },
    modalItem:{
        margin:5,
    },
});

export default NoteMenu;
