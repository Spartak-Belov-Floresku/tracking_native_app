import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

function TrackListScreen({navigation}) {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View>
      {/**
       * NavigationEvents is called once when navigation events fire.
       */}
      <NavigationEvents onWillFocus={fetchTracks} />
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>
                  navigation.navigate('TrackDetail', {_id: item._id})
                }
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            )
          }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

TrackListScreen.navigationOptions = () => {
  return {
    title: 'Tracks',
  };
};

export default TrackListScreen;