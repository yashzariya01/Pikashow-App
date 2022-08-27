import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SwiperData from '../utlis/SwiperData';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import { bottomrow1 , bottomrow2, bottomOptionList} from '../utlis/BottomRowData';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

  const Navigation = useNavigation();

 const HandleNavigation = (navigationName) => {
   try {
      Navigation.navigate(navigationName)
      console.log(navigationName);
   } catch (error) {
      console.log(error);
   }
 }

  return (
    <View style={styles.containEr}>
      {/* <StatusBar  backgroundColor={"#000000"} translucent={true} /> */}

      {/* Swiper  */}

      <SwiperFlatList
        autoplay
        autoplayDelay={4}
        autoplayLoop
        data={SwiperData}
        renderItem={({item}) => (
         <View style={styles.HeaderContain}>

           <TouchableHighlight onPress={() => console.log(item)}>
          <Image style={styles.img} source={{uri: item.posterUrl}} />
          </TouchableHighlight>
         </View>
        )}
      />  

      {/* bottom Menu */}
      <View style={styles.BottomMenu}>
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          style={styles.linearGradient}> 
      
       <View style={{height: '30%'}}></View>
        
         {/* This is Bottom Row container */}

        <View style={styles.BottomRowContainer}>
          <View style={styles.buttomRow}>
            {bottomrow1.map((row , index) =>  {
              return(
                <TouchableOpacity key={index}  onPress={() => row.onIconPress()} >
                <Image source={{uri: row.logoUrl}} 
                 style={styles.bottomRowBtn}
                />
                </TouchableOpacity>
              )
            })}
          </View>
          {/*  */}
          <View style={styles.buttomRow}>
            {bottomrow2.map((row , index) =>  {
              return(
                <TouchableOpacity key={index} onPress={() => row.onIconPress()}>
                <Image source={{uri: row.logoUrl}} 
                 style={styles.bottomRowBtn}
                />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>

        {/*  */}
        <View style={styles.bottomOptionContainer}>
          {bottomOptionList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => HandleNavigation(item.navigationName)} >
              <Text style={styles.bottomOptionText}>{ item.name}</Text>
               </TouchableOpacity>
            )
          })}
        </View>
       
        </LinearGradient>
      </View>
    </View>
  );
};

export default Home;

const {width , height} = Dimensions.get('window');
// console.log(width);

const styles = StyleSheet.create({
  containEr: {
    flex: 1,
    position: 'relative',
  },
  HeaderContain: {
    width: width,
  },
  img: {
    height: '100%',
  },
  BottomMenu: {
    position: 'absolute',
    bottom: 0,
    right:0,
    left:0,
    height: '45%',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'space-around'
  },
  buttomRow: {
    flexDirection: 'row',
    justifyContent: "center",
    marginBottom: 15
  },
  bottomRowBtn: {
    height: width/8,
    width: width/8,
    marginLeft: 15,
  },
  bottomOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottomOptionText: {
    color: 'yellow',
  },
});
