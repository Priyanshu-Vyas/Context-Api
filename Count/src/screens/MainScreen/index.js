import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useCountContext } from '../../../context/countContextProvider';

export default function Mainscreen() {
  const countContext = useCountContext();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 200, color:'blue'}}>{countContext.count}</Text>
      <TouchableOpacity style={{display: 'flex',flexDirection: 'row'}} onPress={()=> countContext.setCount(countContext.count+1)}>
        <Text style={{fontSize:50, color:'green'}}>Count</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex',flexDirection: 'row'}} onPress={()=> countContext.setCount(0)}>
        <Text style={{fontSize:50, color:'red'}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
