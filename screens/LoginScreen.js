import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";


export const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = () => {
    // Verificar si el usuario y la contraseña son válidos
    if (username === 'liz' && password === '123') {
      // Si son válidos, navegar a la pantalla Home
      navigation.navigate('Home');
    } else {
      // Si no son válidos, mostrar un mensaje de error
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/zoo.jpg')} resizeMode="cover">
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Text style={styles.title}>Bienvenido al Zoológico</Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.image}>
              <Text style={styles.textWrapper}>¡Visítanos y descubre el fascinante mundo de los animales!</Text>
              <View style={styles.pagination}>
                <View style={styles.rectangle} />
                <View style={styles.div} />
                <View style={styles.div} />
                <View style={styles.div} />
              </View>
            </View>
          </View>
          <View style={styles.sectionTitle}>
            <View style={styles.text}>
              <Text style={styles.title2}>Iniciar sesión</Text>
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.title3}>Usuario</Text>
            <View style={styles.textfield}>
              <TextInput
                style={styles.text2}
                placeholder="Ingrese su usuario"
                onChangeText={text => setUsername(text)}
                value={username}
              />
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.title3}>Contraseña</Text>
            <View style={styles.textfield}>
              <TextInput
                style={styles.text2}
                placeholder="Ingrese su contraseña"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondary} onPress={handleLogin}>
              <Text style={styles.title4}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 12,
    height: 632,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "125%",
  },
  topBar: {
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: 50,
  },
  title: {
    color: "#00000",
    fontSize: 20,
    fontWeight: "bold",
  },
  
  imageContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    padding: 20,
  },
  textWrapper: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  rectangle: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height: 4,
    marginHorizontal: 2,
    width: 20,
  },
  div: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    height: 4,
    marginHorizontal: 2,
    width: 4,
  },
  sectionTitle: {
    marginTop: 50,
  },
  text: {
    flexDirection: "row",
  },
  title2: {
    color: "#00000",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    marginTop: 20,
  },
  title3: {
    color: "#00000",
    fontSize: 14,
    fontWeight: "bold",
  },
  textfield: {
    borderColor: "#000000",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 10,
  },
  text2: {
    color: "#00000",
    flex: 1,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  secondary: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    width: "48%", // Ajusta el ancho según tus necesidades
  },
  title4: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
