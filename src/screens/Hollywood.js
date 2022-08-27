import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard';
import {Data} from '../utlis/HollywoodMovieList';


const Hollywood = () => {
  return (
    <View style={styles.Contain}>
      <Text style={styles.heaserText}>Hollywood</Text>
          
        <View style={styles.ContainTwo}>
           <FlatList 
            data={Data}
            numColumns={3}
            renderItem={List => {
              return <MovieCard movieData={List.item} />
            }}
           
           />
        </View>

    </View>
  )
}

export default Hollywood

const styles = StyleSheet.create({
  Contain : {
    flex: 1,
    backgroundColor: "#000000",
  },
  heaserText: {
    color: '#ffe031',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  ContainTwo: {
    marginBottom: 50
  },
})