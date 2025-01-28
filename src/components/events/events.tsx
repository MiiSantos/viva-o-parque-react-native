import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

function Events(props) {
    return (
        <View>
            <ScrollView>
                {
                    props.dados.map((post, index) => {
                        return <View style={styles.card} key={index}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Image style={styles.image} source={post.image}></Image>
                            <Text style={styles.description}>{post.content}</Text>
                            <Text style={styles.date}> Data: {post.date}</Text>
                        </View>
                    })
                }
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 5,
        backgroundColor: '#DCDCDC',
        borderRadius: 20,
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
    description: {
        padding: 10,
    },
    date: { 
        fontWeight: 'bold', 
        paddingLeft: 8 
    }
});

export default Events;