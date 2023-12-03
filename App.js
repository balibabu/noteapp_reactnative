import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import NoteList from './components/NoteList';
import Editor from './components/Editor';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalVarProvider } from './utility/GlobalVariables';

const Stack = createStackNavigator();
export default function App() {
  return (
    <GlobalVarProvider>
      <View style={styles.container}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="NoteList">
            <Stack.Screen name="NoteList" component={NoteList} />
            <Stack.Screen name="Editor" component={Editor} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </GlobalVarProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1a1a2e',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
