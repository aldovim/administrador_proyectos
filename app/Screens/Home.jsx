import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const Home = ({ navigation }) => {
    const proyectos = [
        {
            id: 1,
            titulo: 'Proyecto 1',
            imagen: 'https://via.placeholder.com/150',
            presupuesto: '$250,000',
            estatus: 'Activo',
            planos: [
                { nombre: 'Planta Baja', imagen: 'https://via.placeholder.com/150' },
                { nombre: 'Alzado Frontal', imagen: 'https://via.placeholder.com/150' }
            ]
        },
        {
            id: 2,
            titulo: 'Proyecto 2',
            imagen: 'https://via.placeholder.com/150',
            presupuesto: '$400,000',
            estatus: 'Terminado',
            planos: [
                { nombre: 'Planta Alta', imagen: 'https://via.placeholder.com/150' },
                { nombre: 'Alzado Interior', imagen: 'https://via.placeholder.com/150' }
            ]
        },
        {
            id: 3,
            titulo: 'Proyecto 3',
            imagen: 'https://via.placeholder.com/150',
            presupuesto: '$820,000',
            estatus: 'Pendiente',
            planos: [
                { nombre: 'Planta Baja', imagen: 'https://via.placeholder.com/150' },
                { nombre: 'Planta Alta', imagen: 'https://via.placeholder.com/150' },
                { nombre: 'Seccion Transversal', imagen: 'https://via.placeholder.com/150' }
            ]
        },
        {
            id: 4,
            titulo: 'Proyecto 4',
            imagen: 'https://via.placeholder.com/150',
            presupuesto: '$360,000',
            estatus: 'Activo',
            planos: [
                { nombre: 'Planta Baja', imagen: 'https://via.placeholder.com/150' },
                { nombre: 'Planta de Azotea', imagen: 'https://via.placeholder.com/150' }
            ]
        },
    ];

    const renglones = [];

    for (let i = 0; i < proyectos.length; i=i+2) {
        renglones.push([proyectos[i], proyectos[i+1]])
    }

    return (
        <View style={{ paddingTop: 32 }}>
            {
                renglones.map((renglon, index) => (
                    <View style={{ flexDirection: 'row' }} >
                        {
                            renglon.map((project, indexProject) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', { project: project })} style={ProyectLayout.container} key={indexProject}>
                                    <Image source={{ uri: project.imagen }} style={ProyectLayout.image}/>
                                    <Text>{project.titulo}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

const ProyectLayout = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 32,
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        marginBottom: 20
    }
});