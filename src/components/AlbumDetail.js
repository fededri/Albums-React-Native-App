import React from 'react'
import {Text, View, Image , Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button'


const AlbumDetail = ({album}) => {

    const {title,
         artist,
          thumbnail_image,
          image,
          url
        } = album;

    return (
        <Card>
            <CardSection style={styles.headerContentStyle}> 
             <View style = {styles.thumbnailContainerStyle}> 
                <Image  
                style = {styles.thumbnail_style}
                source = { {uri: thumbnail_image}} 
                />
            </View>

             <View style={styles.headerContentStyle}> 
             <Text style={styles.headerTextStyle} > {title} </Text>
             <Text> {artist} </Text>
             </View>
          

             </CardSection>

            <CardSection>
            <Image
            style = {styles.imageStyle}
            source = {{uri: image}}
             />
            </CardSection>


            <CardSection>
                <Button  onPress= {() => Linking.openURL(url)}>
                    Buy now
                </Button>
            </CardSection>

        </Card>

    );

}

const styles = {
    headerContentStyle : {
        justifyContent: 'space-around',
        flexDirection: 'column',
      
    },

    thumbnail_style: {
        height: 50,
        width: 50,
    },

    headerTextStyle: {
        fontSize: 18,
        color: '#ff0000'
    },

    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
     

    }
}



export default AlbumDetail;
