import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard';
import {Data} from '../utlis/BollywoodMovieList';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Bollywood = ({navigation}) => {
  return (
    <View style={styles.Contain}>

      <View style={styles.header}> 
      <Text style={styles.heaserText}>Bollywood</Text>
     </View>
          
        <View style={styles.ContainTwo}>
           <FlatList 
            data={Data}
            numColumns={3}
            renderItem={List => {
              return <MovieCard movieData={List.item} />
            }}
           
           />
        </View>

        
      <TouchableOpacity style={styles.sarchBottomContainer} onPress={() => navigation.navigate('Search', {
        data: Data
      })} >
        <Ionicons name='search'size={25} color="#ffe030" style={styles.SearchIcon} />
      </TouchableOpacity> 

    </View>
  )
}

export default Bollywood

const styles = StyleSheet.create({
  Contain : {
    flex: 1,
    backgroundColor: "#000000",
  },
  heaserText: {
    color: '#ffe031',
    textAlign: 'center',
    fontSize: 20,
  },
  ContainTwo: {
    marginBottom: 50
  },
  header: {
    marginTop: 20
  },
  sarchBottomContainer: {
    backgroundColor: '#111111',
    position: 'absolute',
    height: 60,
    width: 60,
    right: 10,
    bottom: 10,
    borderRadius: 50,
   alignItems: 'center',
   justifyContent: "center",
 },
})