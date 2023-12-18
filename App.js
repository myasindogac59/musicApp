import { StyleSheet, Text, View, FlatList } from "react-native";
import musicData from "./music-data.json";
import SongCard from "./src/components/songCard/SongCard";
import SearchBar from "./src/components/searchBar/SearchBar";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(musicData)
  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeparator = () => <View style={styles.separator}></View>;
  const onSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList)
  }
  return (
    <View style={styles.container}>
      <SearchBar onSearch = {onSearch} />
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
