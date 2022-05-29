import { View, Text ,ScrollView , StyleSheet,  TextInput  } from 'react-native'
import React ,{ useState , useEffect } from 'react'
import Countrys from './Countrys'




export default function Country() {


    const [countrys, setCountry] = useState([])
    const [search , setSeacrh] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            setSeacrh(data)
            setCountry(data)})
    },[] )

    const byname = text => {
        const bb = countrys.filter( names => names.name.common.includes(text))
        setSeacrh(bb)
    }

  return (
    <View>
      <Text>Country</Text>
      <Text> total {search.length} </Text>

      <TextInput
      style={styles.input}
      placeholder = "type country Name"
      onChangeText={byname}
      ></TextInput>

       <ScrollView>
           {
               search.map(country => <Countrys  key={country.id} country={country} ></Countrys> )
           }
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   input : {
       height : 40,
       margin : 12,
       borderWidth : 1,
       padding : 10,
   }
})