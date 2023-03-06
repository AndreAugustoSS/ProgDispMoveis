import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState(''); // Armazena o valor do primeiro número digitado
  const [num2, setNum2] = useState(''); // Armazena o valor do segundo número digitado
  const [resultado, setResultado] = useState(''); // Armazena o resultado

  const multiplicar = () => {
    const resultadoMultiplicacao = Number(num1) * Number(num2); 
    setResultado(resultadoMultiplicacao.toString()); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplicador de Números</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
           <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <TouchableOpacity style={styles.button} onPress={multiplicar}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

