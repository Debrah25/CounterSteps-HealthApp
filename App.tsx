import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,StyleProp} from 'react-native';
import Records from './src/components/Records';
import RingProgress from './src/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>

<RingProgress progress={0.5}/>



 <View style={styles.Values}>
  <Records label="steps" value="12351"/>
  <Records label="Distance" value="0.6823km"/>
  <Records label="flights Climbed" value="22"/> 
</View>









      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({

Values:{
flexDirection:'row',
gap:25,
flexWrap:"wrap"
,
marginTop:110,
  },
container: {
    flex: 1,
    backgroundColor: "black",
    padding:12,
    justifyContent: 'center',
  },
});


