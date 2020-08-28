import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons'


const Post = ({navigation}) => {
    const image = {uri: 'https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?cs=srgb&dl=pexels-pixabay-235648.jpg&fm=jpg'}

    const [gallery, setgallery] = useState([
        { image: {uri: 'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?cs=srgb&dl=pexels-jarod-lovekamp-3791466.jpg&fm=jpg'}, title: 'Calabar',  key: '1' },
        { image:{uri: 'https://images.pexels.com/photos/2304895/pexels-photo-2304895.jpeg?cs=srgb&dl=pexels-alex-qian-2304895.jpg&fm=jpg'}, title: 'New Zeland',key: '2' },
        { image:{uri: 'https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?cs=srgb&dl=pexels-pixabay-235615.jpg&fm=jpg'}, title: 'Rome',key: '3' },
        { image:{uri: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2098427.jpg&fm=jpg'}, title: 'Tahiti', key: '4' },
    ])

    const goBack = () => {
        navigation.goBack();
    }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
      >

      <Text style={styles.Tagline}>Discover Africa</Text>
      <Text style={styles.Placename}>Explore the beautiful scenery</Text>

      <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40}}>
        <Feather name='arrow-left' size={24} color='#fff' /> 
      </TouchableOpacity>

      <TouchableOpacity style={{position: 'absolute', right: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40}}>
        <Feather name='heart' size={22} color='#fff' /> 
      </TouchableOpacity>

      </ImageBackground>

      <TouchableOpacity style={styles.bookTicketBtn}>
          <Text style={styles.bookTicketText}>Book Now</Text>
      </TouchableOpacity>

      <ScrollView style={{backgroundColor: 'white'}}>
          <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
              About the place
          </Text>
          <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
            Democratic Republic of the Congo, country located in central Africa. Officially known as the Democratic Republic of 
            the Congo, the country has a 25-mile (40-km) coastline on the Atlantic Ocean but is otherwise landlocked. It is the 
            second largest country on the continent; only Algeria is larger. 
          </Text>
          <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
          The country is often referred to by its acronym, the DRC, or called Congo (Kinshasa), with the capital added parenthetically, 
          to distinguish it from the other Congo republic, which is officially called the Republic of the Congo and is often referred to as Congo (Brazzaville).
          </Text>
          <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
          Congo is rich in natural resources. It boasts vast deposits of industrial diamonds, cobalt, and copper; one of the largest forest reserves in Africa; 
          and about half of the hydroelectric potential of the continent.
          </Text>

        <View>
            <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                Suggested Places
            </Text>
            <FlatList 
                data={gallery}
                horizontal={true}
                renderItem={({item}) => {
                    return(
                        <View style={{paddingBottom: 40}}>
                            <View>
                                <Image 
                                  source={item.image} 
                                  style={{width: 150, height: 150, marginHorizontal: 10, borderRadius: 10}} 
                                />
                                <View style={styles.darkOverlay}></View>
                                <Feather name='map-pin' size={16} color='white' style={{marginHorizontal: 14, marginTop: 4, position: 'absolute', left: 10, bottom: 10}} />
                                <Text style={{marginHorizontal: 14, marginTop: 4, position: 'absolute', left: 30, bottom: 10, color: 'white', fontSize: 14, }}>
                                    {item.title}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      height: 380,
      justifyContent: 'flex-end',
  },
  Tagline: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      paddingHorizontal: 14, 
      marginVertical: 6
  },
  Placename: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 14,
      marginBottom: 30
  },
  bookTicketBtn: {
      position: 'absolute',
      right: 12,
      top: 350,
      backgroundColor: '#ff6200',
      padding: 16,
      borderRadius: 40,
      elevation: 5
  },
  bookTicketText: {
      color: 'white',
      fontSize: 14
  },
  darkOverlay: {
      width: 150,
      height: 150,
      position: 'absolute',
      backgroundColor: '#000',
      opacity: 0.2,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: 10,
      marginHorizontal: 10
  }
});

export default Post;
 