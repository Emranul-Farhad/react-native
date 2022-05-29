import { View, Text ,ScrollView } from 'react-native'
import React ,{ useState , useEffect } from 'react'
import Countrys from './Countrys'




export default function Country() {


    const [countrys, setCountry] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data))
    },[] )

  return (
    <View>
      <Text>Country</Text>
      <Text> total {countrys.length} </Text>
       <ScrollView>
           {
               countrys.map(country => <Countrys  key={country.id} country={country} ></Countrys> )
           }
       </ScrollView>
    </View>
  )
}