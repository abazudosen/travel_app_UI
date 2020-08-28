
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons'

const Home = ({navigation}) => {
    const image = {
        uri: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?cs=srgb&dl=pexels-rakicevic-nenad-1274260.jpg&fm=jpg'
    };

    const recentImage = { uri: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?cs=srgb&dl=pexels-valentin-antonucci-1275393.jpg&fm=jpg" };

    const [gallery, setgallery] = useState([
        { image: {uri: 'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?cs=srgb&dl=pexels-jarod-lovekamp-3791466.jpg&fm=jpg'}, title: 'Calabar',  key: '1' },
        { image:{uri: 'https://images.pexels.com/photos/2304895/pexels-photo-2304895.jpeg?cs=srgb&dl=pexels-alex-qian-2304895.jpg&fm=jpg'}, title: 'New Zeland',key: '2' },
        { image:{uri: 'https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?cs=srgb&dl=pexels-pixabay-235615.jpg&fm=jpg'}, title: 'Rome',key: '3' },
        { image:{uri: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2098427.jpg&fm=jpg'}, title: 'Tahiti', key: '4' },
    ])

    const goToPost = () => {
        navigation.navigate('Post');
    }

  return (
    <View style={{flexGrow: 1, height: '100%'}}>
      <View>
          <ImageBackground
            source={image}
            style={{width: '100%', height: 270}}
            imageStyle={{borderBottomRightRadius: 65}}
          >
            <View style={styles.DarkOverlay}></View>
            <View style={styles.searchContainer}>
                <Text style={styles.UserGreet}>Hi Abaz,</Text>
                <Text style={styles.UserText}>Where u heading?</Text>
            </View>
            <View>
                <TextInput
                  style={styles.searchBox}
                  placeholder='Search Destination'
                  placeholderTextColor='#666'  
                ></TextInput>
                <Feather name='search' size={22} color='#666' style={{position: 'absolute', top: 30, right: 60, opacity: 0.6}} />
            </View>
            <Feather name='menu' size={22} color='#fff' style={{position: 'absolute', top: 40, left: 16}} />
            <Feather name='bell' size={22} color='#fff' style={{position: 'absolute', top: 40, right: 30 }} />
          </ImageBackground>
      </View>

      <ScrollView>
          <View style={{padding: 20}}>
              <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Trending</Text>
          </View>
          <View>
              <FlatList
                 horizontal={true}
                 data={gallery}
                 renderItem={({item}) => {
                    return(
                      <View style={{paddingVertical: 20, paddingLeft: 16}}>
                          <TouchableOpacity onPress={goToPost}>
                              <Image source={item.image} style={{width: 150, marginRight: 8, height: 250, borderRadius: 10}} />
                              <View style={styles.ImageOverlay}></View> 
                              <Feather name="map-pin" size={16} color='white' style={styles.imageLocationIcon} />
                              <Text style={styles.ImageText}>{item.title}</Text>
                          </TouchableOpacity>
                      </View>
                    )
                 }}
              />
          </View>
          <View style={{marginBottom: 60}}>
              <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 22, fontWeight: 'bold'}}>Recently Viewed</Text>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ff6200'}}>View All</Text>
              </View>
              <Image 
                source={recentImage}
                style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center'}}  
              />
          <View style={{position: 'absolute', bottom: 0, padding: 16}}>
              <View style={{flexDirection: 'row'}}>
                  <Feather 
                    name='map-pin' 
                    color='white' 
                    size={22} 
                    style={{marginLeft: 10, position: 'relative', top: 4}} 
                  />
                  <Text style={{fontSize: 22, color: 'white', fontWeight: 'normal', marginBottom: 10, marginHorizontal: 10}}>
                      Venice
                  </Text>
              </View>
                 <Text style={{fontSize: 14, color: 'white', fontWeight: 'normal', marginBottom: 4, opacity: '0.9', marginLeft: 16}}>
                     Venice, the capital of northern Italy's Venton Region in the Drian Arial
                 </Text>
            </View>
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
  DarkOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      height: 270,
      backgroundColor: '#000',
      opacity: 0.2,
      borderBottomRightRadius: 65
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  },
  UserText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white'
  },
  searchBox: {
      marginTop: 16,
      backgroundColor: '#fff',
      paddingLeft: 24,
      padding: 12,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      width: '90%'
  },
  ImageOverlay: {
      width: 150,
      height: 250,
      marginRight: 8,
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: '#000',
      opacity: 0.2,  
  },
  imageLocationIcon: {
      position: 'absolute',
      marginTop: 4,
      left: 10,
      bottom: 10
  },
  ImageText: {
      position: 'absolute',
      color: 'white',
      marginTop: 4,
      fontSize: 14,
      left: 30,
      bottom: 10
  }
});

export default Home
