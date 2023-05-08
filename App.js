import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  // const [counter, setCounter] = React.useState(0)
  const [result, setResult] = React.useState("")
  const [secNumber, setSecnumber] = React.useState("")
  const [history, setHistory] = React.useState([])
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    if (result !== '') {
      setHistory(prevHistory => [...prevHistory, secNumber + "=" + result]);
    }
  }, [result]);


  const handleSubmit = () =>{
    setResult(eval(secNumber));
  }

  const handleAC = () =>{
    setSecnumber("")
    setResult("")
  }

  const handleBackspace = ()=>{
    setSecnumber(secNumber.substring(0,secNumber.length-1))
  }

  const handleHistory = ()=>{
    setModalVisible(true)
  }

  const handleClearHistory = ()=>{
    setHistory([])
  }



  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Calculator App</Text>
    <TextInput
        style={{height: 40}}
        placeholder="Input mathematical expression"
        onChangeText={secNumber => setSecnumber(secNumber)}
        defaultValue={secNumber}
      />
            <Text>{"Result: "+result}</Text>

        <View style={styles.buttonContainer}>

        <Button title='1'  onPress={()=>{setSecnumber(secNumber+"1")}}/>
        <Button title='2' onPress={()=>{setSecnumber(secNumber+"2")}}/>
        <Button title='3' onPress={()=>{setSecnumber(secNumber+"3")}}/>
        <Button title='4' onPress={()=>{setSecnumber(secNumber+"4")}}/>
        <Button title='5' onPress={()=>{setSecnumber(secNumber+"5")}}/>
        </View>
        <View style={styles.buttonContainer}>
        <Button title='6' onPress={()=>{setSecnumber(secNumber+"6")}}/>
        <Button title='7' onPress={()=>{setSecnumber(secNumber+"7")}}/>
        <Button title='8' onPress={()=>{setSecnumber(secNumber+"8")}}/>
        <Button title='9' onPress={()=>{setSecnumber(secNumber+"9")}}/>
        <Button title='0' onPress={()=>{setSecnumber(secNumber+"0")}}/>
        </View>
        <View style={styles.buttonContainer}>
        <Button title='+' onPress={()=>{setSecnumber(secNumber+"+")}}/>
        <Button title='-' onPress={()=>{setSecnumber(secNumber+"-")}}/>
        <Button title='*' onPress={()=>{setSecnumber(secNumber+"*")}}/>
        <Button title='/' onPress={()=>{setSecnumber(secNumber+"/")}}/>
        <Button title='^' onPress={()=>{setSecnumber(secNumber+"**")}}/>
        <Button title='(' onPress={()=>{setSecnumber(secNumber+"(")}}/>
        <Button title=')' onPress={()=>{setSecnumber(secNumber+")")}}/>
        </View>
        <View style={styles.buttonContainer}>
        <Button title='AC' onPress={handleAC}/>
        <Button title='Count' onPress={handleSubmit}/>
        <Button title='<--' onPress={handleBackspace}/>
        <Button title='History' onPress={handleHistory}/>

        </View>

        <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>HISTORY!</Text>
          {history.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <Button title="Clear history" onPress={handleClearHistory} />
        </View>
      </Modal>

        

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    display:"flex",
    flexDirection:"row",
  },
  boldText: {
    fontWeight: 'bold',
    fontSize:20
    },
  buttonStyle:{
    height:"50%",
    width:"50%"
  }

});
