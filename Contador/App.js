import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('0');

  const increment = () => {
  setCount(count + 1); // Define quantos numeros o contador irá somar
  };

  const decrement = () => {
    if (count > 0) {
    setCount(count - 1); // Define quantos numeros o contador irá diminuir
    }
  };

  const reset = () => {
    setCount(0); // Altera o valor do numero pricipal da tela
    setInputValue('0'); // Altera o valor do box onde fica o 0
  };

  const handleInputChange = (text) => {
  const value = parseInt(text, 10);
  if (isNaN(value) || value <= 0) {
      setInputValue('0');
      setCount(0);
    } else {
      setInputValue(text);
      setCount(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={handleInputChange}
        maxLength={5}
      />
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="+" color="#0526fc" onPress={increment} />
        </View>
        <View style={styles.button}>
          <Button title="-" color="#000000" onPress={decrement} />
        </View>
        <View style={styles.button}>
          <Button title="Zerar" color="#fc052e" onPress={reset} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff2d3',
  },
  title: {
    fontSize: 28,
    fontWeight: 'arial',
    marginBottom: 20,
  },
  input: { 
    height: 40,
    width: 120,
    borderWidth: 1,
    borderColor: '#fc052e',
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  }, 
  count: {
    fontSize: 80,
    marginBottom: 40,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
