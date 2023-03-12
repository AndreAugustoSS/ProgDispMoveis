import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const App = () => {
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const resultadoCalculo = etanol / gasolina;

    if (resultadoCalculo < 0.7) {
      setResultado('Abasteça com etanol');
    } else {
      setResultado('Abasteça com gasolina');
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Preço do litro do etanol"
        value={etanol}
        onChangeText={setEtanol}
      />
      <TextInput
        placeholder="Preço do litro da gasolina"
        value={gasolina}
        onChangeText={setGasolina}
      />
      <Button title="Calcular" onPress={calcular} />
      <Text>{resultado}</Text>
    </View>
  );
};

export default App;
