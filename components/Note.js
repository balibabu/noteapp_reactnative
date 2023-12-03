import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import convertUtcToLocal from "../utility/AutoLocalTime";

export default function Note(props) {
	const onNoteClick=()=>{
		props.navigation.navigate('Editor',{...props.note});
	}
	return (
		<TouchableWithoutFeedback onPress={onNoteClick} onLongPress={()=>props.onDelete(props.note.id)}>
			<View style={[styles.noteCard, { backgroundColor: props.note.color }]}>
				<Text style={styles.title}>{props.note.title}</Text>
				<Text style={styles.createdTime}>{convertUtcToLocal(props.note.created_time)}</Text>
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
