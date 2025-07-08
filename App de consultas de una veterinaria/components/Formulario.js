import React,{useState} from 'react' 
import {Modal,Text,SafeAreaView,StyleSheet,TextInput,View,ScrollView,Pressable,Alert} from 'react-native'
import DatePicker from '@dietime/react-native-date-picker';

const Formulario = ({modalVisible,setModalVisible,pacientes,setPacientes}) =>{
  const[paciente,setPaciente]=useState('')
  const[propietario,setPropietario]=useState('')
  const[email,setEmail]=useState('')
  const[telefono,setTelefono]=useState('')
  const[sintomas,setSintomas]=useState('')
  const[fecha,setFecha]=useState(new Date())  
  const handleCita = ()=>{
    console.log('Presione Agregar Paciente')
    if([paciente,propietario,email,fecha,sintomas].includes('')){
      console.log('Faltan campos por llenar')
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        [{text:'Aceptar'}]
      )
    }
    const nuevoPaciente={
      id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas
    }
    console.log(nuevoPaciente)
   setPacientes(nuevoPaciente)
    setPacientes([...pacientes,nuevoPaciente])
    setModalVisible(!modalVisible)
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setFecha(new Date())
    setSintomas('')
  }
  return(
    <Modal
    animationType='slide'
    visible={modalVisible}//en lugar de true o false se coloca la constante del state
    >
  <SafeAreaView
  style={styles.contenido}
  >
  <ScrollView>
  <Text
  style={styles.titulo}
  >Nueva{''}
  <Text
  style={styles.tituloBold}
  >Cita </Text>
  </Text>
  <Pressable 
  onLongPress={()=>setModalVisible(false)}
  style={styles.btnCancelar}>
  <Text style={styles.btnCancelarTexto}>
  X Cancelar
  </Text>
  </Pressable>
<View style={styles.campo}>
<Text style={styles.label}>Nombre Paciente:
</Text>
<TextInput
style={styles.input}
placeholder='Nombre del Paciente'
placeholderTextColor={'#666'}
value={paciente}
onChangeText={setPaciente}/>
</View>

<View style={styles.campo}>
<Text style={styles.label}>Nombre Propietario:
</Text>
<TextInput
style={styles.input}
placeholder='Nombre del Propietario'
placeholderTextColor={'#666'}
value={propietario}
onChangeText={setPropietario}
/>
</View>

<View style={styles.campo}>
<Text style={styles.label}>Email Propietario:
</Text>
<TextInput
style={styles.input}
placeholder='Email del Propietario'
placeholderTextColor={'#666'}
value={email}
onChangeText={setEmail}
/>
</View>
<View style={styles.campo}>
<Text style={styles.label}>Telefono Propietario:
</Text>
<TextInput
style={styles.input}
placeholder='Telefono del Propietario'
placeholderTextColor={'#666'}
keyboardType='number-pad'
value={telefono}
onChangeText={setTelefono}
maxLength={10}
/>
</View>
<View style={styles.campo}>
<Text style={styles.label}>fecha alta:
</Text>
<Text>{fecha? fecha.toDateString():"Seleccione fecha..."}</Text>
<DatePicker
value={fecha}
onChange={(value)=>setFecha(value)}
format="yyyy-mm-dd"
/>
</View>
<View style={styles.campo}>
<Text style={styles.label}>Sintomas:
</Text>
<TextInput
style={[styles.input,styles.sintomasInput]}
placeholder='Sintomas'
placeholderTextColor={'#666'}
value={sintomas}
onChangeText={setSintomas}
multiline={true}
numberOfLines={4}
/>
</View>
<Pressable 
style={styles.btnNuevaCita}
onPress={handleCita}
>
<Text style={styles.btnNuevaCitaTexto}>
Nueva Cita 
</Text>
</Pressable>
</ScrollView>
</SafeAreaView>
</Modal>
  )
}

const styles=StyleSheet.create({
  contenido:{
    backgroundColor:'#26F6E0',
    flex:1
  },
  titulo:{
    fontSize:30,
    fontWeight:'600',
    textAlign:'center',
    marginTop:30,
    color:'#FFF'
  },
    btnCancelar:{
    marginVertical:30,
    marginHorizontal:30,
    backgroundColor:'#FF4F33',
    padding:15,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#FFF'
  },
  btnCancelarTexto:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'900',
    fontSize:16,
    textTransform:'uppercase'
  },
  btnNuevaCita:{
    marginVertical:15,
    marginHorizontal:30,
    backgroundColor:'#FF4F33',
    padding:15,
    borderRadius:10,
  },
  btnNuevaCitaTexto:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'900',
    textTransform:'uppercase',
    fontSize:16
  },
  tituloBold:{
    fontWeight:'900'
  },
  campo:{
    marginTop:10,
    marginHorizontal:30,
  },
  input:{
    backgroundColor:'#FFF',
    padding:15,
    borderRadius:10,
  },
  label:{
    color:'#FFF',
    marginBottom:10,
    marginTop:15,
    fontSize:20,
    fontWeight:'600'
  },
sintomasInput:{
  height:100
}

})

export default Formulario

