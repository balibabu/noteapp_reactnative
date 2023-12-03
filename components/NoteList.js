import { useContext } from "react";
import Note from "./Note";
import { deleteNote } from "./noteServices";
import { Alert, StyleSheet, ScrollView, View } from "react-native";
import { CustomFloatButton } from "./CustomFloatButton";
import GlobalVarContext from "../utility/GlobalVariables";
import currentDateToColor from "../utility/MonthlyColor";

export default function NoteList({ navigation }) {
	const { notes, setNotes } = useContext(GlobalVarContext);


	const onDelete = async (id) => {
		const confirmDelete = await new Promise((resolve) => {
			Alert.alert(
				"Confirm Delete",
				"Are you sure you want to delete this note?",
				[
					{ text: "Cancel", style: "cancel", onPress: () => resolve(false) },
					{ text: "Delete", onPress: () => resolve(true) },
				],
				{ cancelable: true }
			);
		});

		if (!confirmDelete) return;
		const isDeleted = await deleteNote(id);
		if (isDeleted) {
			setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
		} else {
			// console.log("Failed to delete note.");
		}
	}

	const onAddClick = () => {
		navigation.navigate('Editor', { title: "Take a note", description: "", color: currentDateToColor() });
	}



	return (
		<View style={styles.container}>
			<ScrollView>
				{notes.map((note) => (
					<Note key={note.id} note={note} onDelete={onDelete} navigation={navigation} />
				))}
			</ScrollView>
			<CustomFloatButton title="Add" onClick={onAddClick} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1a1a2e',
		flex: 1,
	},
});