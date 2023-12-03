import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomColorPicker = ({color, setColor}) => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
  const [showColorOptions, setShowColorOptions] = useState(false);

  const handleColorPress = () => {
    setShowColorOptions(!showColorOptions);
  };

  const handleColorSelection = (color) => {
    setColor(color);
    setShowColorOptions(false);
  };

  return (
    <View style={styles.container}>
      
      {showColorOptions && (
        <View style={styles.colorOptions}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorOptionButton, { backgroundColor: color }]}
              onPress={() => handleColorSelection(color)}
            />
          ))}
        </View>
      )}
      <TouchableOpacity
        style={[styles.colorButton, { backgroundColor: color }]}
        onPress={handleColorPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'relative',
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  colorOptions: {
    position: 'absolute',
    top: 10,
    right:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    zIndex: 1, // Ensure that the color options are above the color button
  },
  colorOptionButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default CustomColorPicker;
