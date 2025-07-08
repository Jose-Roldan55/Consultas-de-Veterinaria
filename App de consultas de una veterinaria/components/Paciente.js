import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const Paciente = ({ item, setModalVisible, pacienteEditar }) => {
  const { paciente, fecha, id } = item;
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  };
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
      <View style={styles.botones}>
        <Pressable
         style={styles.btnEditar}
          onLongPress={() => {
            setModalVisible(true);
            pacienteEditar(id);
          }}>
          <Text style={styles.textoB}>EDITAR</Text>
        </Pressable>
        <Pressable style={styles.btnEliminar}>
          <Text style={styles.textoB}>ELIMINAR</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidrh: 1,
  },
  botones: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  textoB: {
    color: '#FBFBFD',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  btnEditar: {
    backgroundColor: '#FA4427',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  btnEliminar: {
    backgroundColor: '#FA4427',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default Paciente;
