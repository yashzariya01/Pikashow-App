import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React,{useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Category} from '../utlis/Category';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const route = useRoute();
  const {data} = route.params;
  // console.log(data);

  // using UseState
  const [Searchtext, setSearchtext] = useState('');
  const [tempData, setTempData] = useState([]);

  // using Useeffect
  useEffect(() => {
        if (Searchtext.length > 0) {
          filterSearchData()
        }
  }, [Searchtext]);

  // getting the Random Color
  const randomColor = () => {
    var color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
    return color;
  };

  // Filtering the data using search
   const filterSearchData = () => {
     const tempResult =  data.filter((item) => {
       const nameLower = item.name.toLowerCase();
       const searchLower = Searchtext.toLowerCase()
         if (nameLower.indexOf(searchLower) != -1 || 
             item.category.includes(Searchtext) ) {
            return item 
         }
      })
      // console.log(tempResult);
      setTempData(tempResult);
      // console.log(tempData);
   }

  return (
    <View style={styles.contain}>
      {/* Search input */}
      <View style={styles.SearchInputContain}>
        <Ionicons
          name="search"
          size={25}
          color="#ffe031"
          style={styles.SearchIcon}
        />
        <TextInput
          style={styles.searchinput}
          value={Searchtext}
          placeholder="Search here..."
          onChangeText={(text) => setSearchtext(text)}
          placeholderTextColor="grey"
          color="#fff"
        />
        <Ionicons
          name="mic"
          size={25}
          color="#ffe031"
          style={styles.SearchIcon}
        />
      </View>

    {/* using Terenary conditon */}
    {
      Searchtext < 1 ? (
            
        <View style={styles.CategoryCard}>
        {Category.map((item,index) => {
          const textcolor = randomColor();
          return (
            <TouchableOpacity style={styles.CategoryStyle } key={item.id} onPress={() => setSearchtext(item.name)}>
              <Text style={[styles.textName, {color: textcolor}]}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>  ) : 
  ( 
  <View style={{marginBottom: 50, flexDirection: 'row'}} >
     <FlatList 
     data={tempData}
     renderItem={Lisr => {
       return(
           <MovieCard movieData={Lisr.item} />
       )
     }}
    /> 
  </View>
   )}
     
      <View></View>
      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#000000',
    // justifyContent: 'space-between'
  },
  SearchInputContain: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: '#111111',
    borderRadius: 12,
  },
  searchinput: {
    width: '80%',
    textAlign: 'center',
  },
  CategoryStyle: {
    backgroundColor: '#111111',
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 7
  },
  textName: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20
  },
  CategoryCard: {
    flexWrap: 'wrap',
    flexDirection: 'row', 
    justifyContent: 'center'
  },
});
