import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageSlider  } from "react-native-image-slider-banner";


export default function ImageSliderNew() {


  return (
    <View>
   <ImageSlider 
    data={[
        { img: require('../../assets/1.jpg') },
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    localImg
    preview={false}
   showHeader
   headerCenterComponent={<Image source={require('../../assets/1.jpg')} style={{height:200,width:200,position:'absolute',top:0,marginTop:30}} />}
    headerStyle={{ padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)', }}
    caroselImageStyle={{ resizeMode: 'cover' }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const images = [
    { img: require('../../assets/1.jpg') },  
    { img: require('../../assets/1.jpg') },  
    { img: require('../../assets/1.jpg') },  
  ];
  

    
 