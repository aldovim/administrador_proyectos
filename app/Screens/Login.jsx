import { Alert, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { TextInputStyles } from '../Styles/TextInputStyle';
import { LabelTextInputStyles } from '../Styles/LabelTextInputStyle';
import { ButtonStyles, ButtonTextStyles } from '../Styles/ButtonStyles';
import { login } from '../Servicios/LoginService';

export const Login = ({ navigation }) => {
    let email = '';
    let password = '';

    function submit() {
        login(email, password)
        .then((response) => {
            Alert.alert(
                "Bienvenido", "",
                [{ text: "OK", onPress: () => navigation.navigate('Home') }]
            );
        })
        .catch(error => {
            Alert.alert("Error", "Usuario o Contraseña Invalida");
        });
    }

    return (
        <View>
            <View style={{ backgroundColor: '#0279FF', height: 150 }} />
            
            <View>
                <Text style={{ textAlign: 'center', marginVertical: 40, fontSize: 24 }}>Bienvenido</Text>

                <Text style={{ textAlign: 'center', marginBottom: 32, fontSize: 20 }}>Iniciar Sesión</Text>

                <Text style={LabelTextInputStyles}>Correo electronico</Text>
                <TextInput style={TextInputStyles} onChangeText={(text) => {email = text; }}/>

                <Text style={LabelTextInputStyles}>Contraseña</Text>
                <TextInput style={TextInputStyles} onChangeText={(text) => {password = text; }} secureTextEntry={true}/>

                <TouchableOpacity onPress={() => submit() }>
                    <View style={ButtonStyles}>
                    <Text style={ButtonTextStyles}>Log in</Text>
                    </View>
                </TouchableOpacity>

                <Button title='Crear Cuenta' onPress={() => navigation.navigate('Register')} />
            </View>
        </View>
    );
  };