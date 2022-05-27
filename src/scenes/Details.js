import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-web';
import { SingleRestContext } from '../../App';
import styles from '../styles';


export default function Details() {
    const { currentRest } = useContext(SingleRestContext);
    const handleRating = (newRating) => {
        fetch(``)
    }
    return(
        <View style={styles.restaurantCard}>
            {!currentRest
            ? <ActivityIndicator />
            : (
                <>
                <Image
                source={{ uri: currentRest.image }}
                style={{ width: '100%', height: 240 }} />
            <Text style={styles.restaurantsName}>{currentRest.name}</Text>
            <Text style={styles.cuisine}>{currentRest.cuisine}</Text>
            <Text style={styles.address}>{currentRest.address}</Text>
            <Text style={[styles.address, { fontWeight: '700'}]}>
                Rating: {currentRest.rating}
            </Text>
            {/* <View style ={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 24}}> */}
                {/* <Button title="1"/>
                <Button title="2"/>
                <Button title="3"/>
                <Button title="4"/>
                <Button title="5"/> */}
            {/* </View> */}
            </>
            )
            }
        </View>
    )
}