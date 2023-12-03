import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CustomFloatButton = ({title,onClick}) => {
  return (
    <TouchableOpacity style={styles.floatingButtonStyle} onPress={onClick}>
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButtonStyle: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#0077b6',
    backgroundColor: '#90e0ef',
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
    // opacity:0.8,
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
