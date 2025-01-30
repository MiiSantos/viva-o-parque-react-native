import { Text, View, Image, StyleSheet } from 'react-native';

function Events(props) {
    return (
        <View>
            {
                props.dados.map((post, index) => {
                    return <View style={styles.card} key={index}>
                        <Text style={styles.title}>{post.title}</Text>
                        <Image style={styles.image} source={post.image}></Image>
                        <Text style={styles.organization}>Organização: {post.organization}</Text>
                        <Text style={styles.description}>{post.content}</Text>
                        <View style={styles.box}>
                            <Image style={styles.icon}
                                source={require('../../assets/logos/person.png')} />
                            <Text style={styles.confirmed}>{post.confirmation} pessoas confirmadas</Text>
                            <Text style={styles.date}> Data: {post.date}</Text>
                        </View> 
                    </View>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 5,
        backgroundColor: '#f5f5f0',
        borderRadius: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
    },
    organization: {
        fontWeight: 'bold',
        paddingLeft: 8,
        marginTop: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 10,
    },
    image: {
        width: 330,
        height: 200,
        resizeMode: 'cover',
    },
    icon: {
        width: 20,
        height: 15,
    },
    confirmed: {
        marginLeft: 2,
    },
    description: {
        padding: 10,
    },
    date: {
        paddingLeft: 8
    }
});

export default Events;