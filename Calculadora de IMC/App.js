import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const resultadoCalculo = peso / (alturaMetros * alturaMetros);

    setResultado(`Seu IMC é ${resultadoCalculo.toFixed(2)}`);

    if (resultadoCalculo < 18.5) {
      setResultado(`Abaixo do peso: ${resultado}`);
    } else if (resultadoCalculo < 25) {
      setResultado(`Peso normal: ${resultado}`);
    } else if (resultadoCalculo < 30) {
      setResultado(`Sobrepeso: ${resultado}`);
    } else if (resultadoCalculo < 35) {
      setResultado(`Obesa: ${resultado}`);
    } else {
      setResultado(`Extremamente obesa: ${resultado}`);
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Peso (em kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Altura (em cm)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      <Text>{resultado}</Text>
    </View>
  );
};

export default App;
