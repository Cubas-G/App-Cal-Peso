import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [peso_Id, setTupeso] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    const estatura = parseFloat(tamaño) / 100;
    const peso = parseFloat(peso_Id);

    const imc = peso / (estatura * estatura);
    if (imc < 18.5) {
      return setResult(
        'Tu IMC: ' + imc +':Estas muy bajo de peso'
      );
    } else if (imc > 18.5 && imc < 24.9) {
      return setResult(
        'Tu IMC: ' + imc + ':Tu peso esta correcto'
      );
    } else if (imc > 25.0 && imc < 29.9) {
      return setResult(
        'Tu IMC: ' + imc + ': Nesecitas hacer dieta'
      );
    } else if (imc > 30.0) {
      return setResult(
        'Tu IMC: ' + imc +  ': Necesitas hacer ejercicio'
      );
    }
  };

  return (
    <View style={styles.firtscontainer}>
      <Text style={styles.tittle}>Calculadora de IMC</Text>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>Favor digite su peso en Kg</Text>
        <TextInput
          style={styles.input}
          value={peso_Id}
          keyboardType="number-pad"
          onChangeText={(e) => setTupeso(e)}
        />

        <Text style={styles.text}>
          Favor digite su tamaño en "Cm"
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={tamaño}
          onChangeText={(e) => setTamaño(e)}
        />
      </View>
      <Button
        title="Realizar Operacion"
        color="green"
        border-radius="5px"
        onPress={() => calculateIMC()}
      />
      <TextInput
        style={styles.mostrarResultado}
        value={result}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  firtscontainer: {
    flex: 6,
    backgroundColor: "#EBF0EB",
    alignItems: "center",
    paddingTop: 70,
  },
  secondContainer: {
    width: 650,
    height: "40%",
    backgroundColor: "#7F857F",
    justifyContent: "center",
    alignItems: "center",
  },
 
  text: {
    color: "#0C0B0C",
    fontSize: 20,
  },

  input: {
    backgroundColor: "#5C5A58",
    height: 40,
    width: "90%",
    fontSize: 17,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  mostrarResultado: {
    height: 120,
    width: 650,
    backgroundColor: "#78DE78",
    color: "#0C08F0",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },

});

