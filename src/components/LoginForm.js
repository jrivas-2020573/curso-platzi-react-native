import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
    return (
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Contrasena"/>
            <Button title="Enviar" onPress={() => console.log("Enviado")}></Button>
        </View>
    ) 
}