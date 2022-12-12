import { Text, View, Image, StyleSheet } from 'react-native';


export const Detail = ({ navigation, route }) => {
    const { project } = route.params;

    navigation.setOptions({ title: project.titulo });

    return (
        <View style={Styles.container}>
            <View style={Styles.titleContainer}>
                <Text style={Styles.titleText}>Detalle: {project.titulo }</Text>

                <View style={Styles.titleImageContainer}>
                    <Image style={Styles.titleImage} source={{ uri: project.imagen }} />
                </View>
            </View>

            <Text style={Styles.property}>Presupuesto: {project.presupuesto }</Text>

            <Text style={Styles.property}>Estatus: {project.estatus }</Text>
            
            <Text style={Styles.property}>Lista de Planos</Text>
            {
                project.planos.map(item => (
                    <View style={Styles.listItemContainer}>
                        <Text style={Styles.listItemText}>{item.nombre}</Text>
                        <Image style={Styles.listItemImage} source={{ uri: item.imagen }}/>
                    </View>
                ))
            }
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
    },
    titleImageContainer: {
        flex: 1,
        alignItems: 'center'
    },
    titleImage: {
        height: 100,
        width: 100
    },
    property: {
        fontSize: 16,
        marginBottom: 20
    },
    listItemContainer: {
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    listItemText: {
        fontSize: 14,
        marginBottom: 8
    },
    listItemImage: {
        width: 200,
        height: 50
    }
});