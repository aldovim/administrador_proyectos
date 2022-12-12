import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputStyles } from '../Styles/TextInputStyle';
import { LabelTextInputStyles } from '../Styles/LabelTextInputStyle';
import { ButtonStyles, ButtonTextStyles } from '../Styles/ButtonStyles';
import { register } from '../Servicios/RegisterService';

export const Register = ({ navigation }) => {
    let telefono = '';
    let email = '';
    let nombreEmpresa = '';
    let password = '';

    function submit() {
        register(email, telefono, nombreEmpresa, password)
        .then((response) => {
            navigation.navigate('Home')
        })
        .catch(error => {
            Alert.alert("Error", "Usuario ya Existe");
        });
    }

    return (
        <View>            
            <Text style={{ textAlign: 'center', marginVertical: 40, fontSize: 24 }}>Creacion de Cuenta</Text>

            <Text style={LabelTextInputStyles}>Nombre de Empresa</Text>
            <TextInput style={TextInputStyles} onChangeText={(text) => {nombreEmpresa = text; }}/>

            <Text style={LabelTextInputStyles}>Correo Electronico</Text>
            <TextInput style={TextInputStyles} onChangeText={(text) => {email = text; }}/>

            <Text style={LabelTextInputStyles}>Telefono</Text>
            <TextInput style={TextInputStyles} onChangeText={(text) => {telefono = text; }} />

            <Text style={LabelTextInputStyles}>Password</Text>
            <TextInput style={TextInputStyles} onChangeText={(text) => {password = text; }} secureTextEntry={true}/>

            <TouchableOpacity onPress={() => submit() }>
                <View style={ButtonStyles}>
                    <Text style={ButtonTextStyles}>Crear Cuenta</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};