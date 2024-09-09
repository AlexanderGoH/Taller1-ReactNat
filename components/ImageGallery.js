import React, {useState} from 'react';
import { View } from 'react-native';
import ImageList from './ImageList';

const ImageGallery = () => {
  const [images] = useState([
    'https://media.tenor.com/rgJleMzUa8MAAAAM/bailes.gif',
    'https://media.tenor.com/El89itaAWsIAAAAj/maxwell.gif',
    'https://media.tenor.com/dutdoOw7PjsAAAAj/happy-cat.gif',
    'https://media.tenor.com/eqx4UXyyELQAAAAM/cat.gif',
  ]);

  return (
    <View>
      <ImageList images={images} />
    </View>
  );

};


export default ImageGallery;