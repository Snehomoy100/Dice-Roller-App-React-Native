import React, {useState} from 'react';
import {View,
        StyleSheet,
        Text,
        Image, 
        TouchableOpacity,
        Pressable, 
        // Pressable & TouchableOpacity are same thing but used for suddle touch response
        StatusBar
      } from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png'; 


const App = () => {

  const [uri, setUri] = useState(DiceOne); // uri stands for universal resource information

  const [uri2, setUri2] = useState(DiceTwo); // for another dice

  const buttonTouched = () => {

    let randomNumber = Math.floor(Math.random() * 6);

    switch(randomNumber){
      case 1:
        setUri(DiceOne)
        break;
      case 2:
        setUri(DiceTwo)
        break;
      case 3:
        setUri(DiceThree)
        break;
      case 4:
        setUri(DiceFour)
        break;
      case 5:
        setUri(DiceFive)
        break;
      case 6:
        setUri(DiceSix)
        break;

      default:
        setUri(DiceOne)
        break;
    }


    let anotherRandomNumber = Math.floor(Math.random() * 6);

    switch(anotherRandomNumber){
      case 1:
        setUri2(DiceTwo)
        break;
      case 2:
        setUri2(DiceOne)
        break;
      case 3:
        setUri2(DiceThree)
        break;
      case 4:
        setUri2(DiceFour)
        break;
      case 5:
        setUri2(DiceFive)
        break;
      case 6:
        setUri2(DiceSix)
        break;

      default:
        setUri2(DiceTwo)
        break;
    }

  }

  return (
    <>
      <StatusBar style={styles.statusbar}></StatusBar>
      <View style={styles.container}>
        <Image style={styles.image} source={uri2} />
        <Image style={styles.image} source={uri}/>
        <TouchableOpacity onPress={buttonTouched}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  )
};


const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: "#222831"
  },
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: "bold"
  }

})


export default App;
