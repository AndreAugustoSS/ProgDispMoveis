import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [valorMinimo, setValorMinimo] = useState(1);
  const [valorMaximo, setValorMaximo] = useState(100);
  const [numeroAleatorio, setNumeroAleatorio] = useState(
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
  );
  const [tentativas, setTentativas] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [input, setInput] = useState('');

  const reiniciarJogo = () => {
    setValorMinimo(1);
    setValorMaximo(100);
    setTentativas(0);
    setMensagem('');
    setNumeroAleatorio(
      Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo
    );
  };

  const verificarNumero = () => {
    const tentativa = parseInt(input);

    if (isNaN(tentativa)) {
      setMensagem('Digite um número válido');
      return;
    }

    setTentativas(tentativas + 1);

    if (tentativa === numeroAleatorio) {
      setMensagem(`Parabéns! Você acertou em ${tentativas} tentativas.`);
      return;
    }

    if (tentativa < numeroAleatorio) {
      setMensagem('O número é maior');
      setValorMinimo(tentativa + 1);
    } else {
      setMensagem('O número é menor');
      setValorMaximo(tentativa - 1);
    }

    setInput('');
  };

  return (
    <View>
      <Text>Escolha um número entre {valorMinimo} e {valorMaximo}:</Text>
      <TextInput
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
      />
      <Button
