import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, {useState} from 'react'

// Components
import { Collapse } from './svgs/Collapse'
import { Expand } from './svgs/Expand'


const ExpandStories = ({shrinked}) => {
    
  return (
    <View style={styles.container} >
        <Text>{shrinked ? "Expand" : "Collapse"} Stories</Text>
        
        {shrinked ? <Expand/> : <Collapse/>}
        
    </View>
  )
}

export default ExpandStories

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    text:{
        fontSize:12,
        fontWeight: 'normal'
    }
})