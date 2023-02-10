import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View, 
} from 'react-native';
import Greeting from './components/Greeting';
import { TruncatedTextView } from 'react-native-truncated-text-view';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
     
        <View>
            <Greeting />

            <View style={styles.containerSection}>              
              <TruncatedTextView
                text={"I'm MicroFrontend"}
                style={styles.sectionTitle}
                numberOfLines={2}
                enableShowLess={false}
              />
            </View> 
            
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20, 
  }, 
  containerSection: {
    borderColor: 'red', 
    borderWidth: 1,
    marginVertical: 20,
    marginTop: 100,
    marginHorizontal: 10
  },
});

export default Home;