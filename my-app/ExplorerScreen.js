import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', title: 'Pizza', image: require('./assets/pizza.jpg') },
  { id: '2', title: 'Burgers', image: require('./assets/burger.jpg') },
  { id: '3', title: 'Steak', image: require('./assets/steek.jpg') },
];

const items = [
  { id: '1', name: 'Food 1', author: 'By Viet Nam', price: '1$', image: require('./assets/food1.jpg') },
  { id: '2', name: 'Food 2', author: 'By Viet Nam', price: '3$', image: require('./assets/food2.jpg') },
];

export default function ExplorerScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="location-outline" size={20} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
        <Ionicons name="search" size={20} color="black" />
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.title}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.headerRow}>
        <Text style={styles.title}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.name}</Text>
            <Text>{item.author}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#F5F5F5' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderRadius: 10, padding: 10, backgroundColor: '#fff', borderColor: '#ccc' },
  searchInput: { flex: 1, marginHorizontal: 10 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  filterText: { color: 'orange' },
  categoryItem: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 80, height: 80, borderRadius: 10, marginBottom: 5 },
  viewAllText: { color: 'orange' },
  itemCard: { width: 150, padding: 10, marginRight: 15, backgroundColor: 'white', borderRadius: 10, elevation: 3 },
  itemImage: { width: '100%', height: 100, borderRadius: 10, marginBottom: 10 },
});