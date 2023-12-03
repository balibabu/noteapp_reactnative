import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import NoteMenu from "./.recyclebin/NoteMenu";
import { useState } from "react";

export default function Note(props) {
	const [isMenuVisible, setMenuVisible] = useState(false);
	const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });


	const handleLongPress = (event) => {
		const { pageX, pageY } = event.nativeEvent;
		setMenuPosition({ x: pageX, y: pageY });
		setMenuVisible(true);
	  };



	return (
		<TouchableWithoutFeedback onLongPress={handleLongPress}>

			<View style={[styles.noteCard, { backgroundColor: props.note.color }]}>
				<Text style={styles.title}>{props.note.title}</Text>
				<Text style={styles.createdTime}>{props.note.created_time}</Text>
				<NoteMenu
					isVisible={isMenuVisible}
					setMenuVisible={setMenuVisible}
					position={menuPosition}
					action={props}
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}


const styles = StyleSheet.create({
	noteCard: {
		padding: 10,
		margin: 5,
		height: 60,
		marginHorizontal: 20,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	createdTime: {
		fontSize: 10,
		color: 'grey',
		marginTop: 10,
	},
});
