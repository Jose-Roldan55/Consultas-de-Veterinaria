import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';

const App = () => {
  //Los hooks se colocan en lo parte superior
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const pacienteEditar = (id) => {
    console.log('editando...', id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {''}
        <Text style={styles.titulobold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.btnnom}>No hay pacientes</Text>
      ) : (
        <Text style={styles.btnnom}>Si hay pacientes</Text>
      )}

      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          //codigo de ReactNative o un Componente
          return (
            <Paciente
              item={item}
              setModalVisible={setModalVisible}
              pacienteEditar={pacienteEditar}
            />
          );
        }}
      />
      <Formulario
        modalVisible={modalVisible} //el prop se llama modalVisible y pasamos la variable del state
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33FFFF',
    flex: 1,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titulobold: {
    fontWeight: '800',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#FF4F33',
    padding: 15,
    marginTop: 30,
    //marginLeft:20,
    //marginRight:20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAling: 'center',
    color: '#fff',
    fontsize: 18,
    fontweight: '900',
    texTransform: 'uppercase',
  },

  btnnom: {
    color: '#',
    fontFamily: '',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default App;
