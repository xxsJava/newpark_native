import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [avatarSource, setAvatarSource] = useState(null);

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const selectImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {avatarSource ? (
        <Image source={avatarSource} style={{ width: 200, height: 200, borderRadius: 100 }} />
      ) : (
        <Image source={require('../../../../assets/images/defaultheader.png')} style={{ width: 200, height: 200, borderRadius: 100 }} />
      )}
      <Button title="Select Image" onPress={selectImage} />
    </View>
  );
};

export default App;
