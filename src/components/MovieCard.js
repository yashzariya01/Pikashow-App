import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MovieCard = ({movieData}) => {
  console.log(movieData);
  return (
    <View style={styles.Contain}>
      <View style={styles.qualityLabel}>
        <Text style={styles.LabelText}>HD</Text>
      </View>

      <Image style={styles.img} source={{uri: movieData.posterUrl}} />

      <View style={styles.bottomInfo}>
        <Text style={styles.Moviename}>{movieData.name}</Text>
        <Text style={styles.Movieyear}>{movieData.year}</Text>
      </View>


    </View>
  );
};

export default MovieCard;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  Contain: {
    width: width / 3 - 14,
    height: height / 3,
    backgroundColor: '#fff',
    margin: 7,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  qualityLabel: {
    position: 'absolute',
    right: 7,
    top: 10,
    zIndex: 2,
    backgroundColor: '#000',
    padding: 3,
  },
  LabelText: {
    color: '#ffe031',
    fontSize: 12,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  Moviename: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Movieyear: {
    color: '#fff',
    fontSize: 12
  },
});
