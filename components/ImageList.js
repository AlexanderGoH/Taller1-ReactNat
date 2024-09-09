import React from 'react';
import { Image, FlatList, StyleSheet} from 'react-native';

const ImageList = ({ images }) => {
  return(
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={styles.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
});

export default ImageList;