import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'


// Components
import { InstaIcon} from '../../../assets/svgs/InstaIcon'
import ExpandStories from './ExpandStories'

const Header = () => {
    const [shrinked, setShrinked] = useState(true)

    const toggleShrink = () => {
        setShrinked(!shrinked)
    }

  return (
    <View style={styles.container}>
        <InstaIcon/>
        <TouchableOpacity onPress={toggleShrink} activeOpacity={0.35}>
            <ExpandStories shrinked={shrinked}/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal:13,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})