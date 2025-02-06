import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native-web';

// Class to manage collection points, routes, and collection days
class WasteManager {
  constructor() {
    this.collectionPoints = [];
    this.routes = {};
    this.collectionDays = {}; // Store collection days
  }

  addCollectionPoint(point, day) {
    if (!this.collectionPoints.includes(point)) {
      this.collectionPoints.push(point);
      this.collectionDays[point] = day; // Assign a collection day
    }
  }

  addRoute(start, end, distance) {
    if (!this.routes[start]) {
      this.routes[start] = {};
    }
    this.routes[start][end] = distance;
  }

  optimizeRoutes() {
    const optimizedRoute = [];
    const visited = new Set();
    let currentPoint = this.collectionPoints[0]; // Start from the first point

    while (visited.size < this.collectionPoints.length) {
      optimizedRoute.push(currentPoint);
      visited.add(currentPoint);
      let nextPoint = null;
      let minDistance = Infinity;

      for (const [neighbor, distance] of Object.entries(this.routes[currentPoint] || {})) {
        if (!visited.has(neighbor) && distance < minDistance) {
          minDistance = distance;
          nextPoint = neighbor;
        }
      }

      currentPoint = nextPoint || null;
    }

    return optimizedRoute;
  }

  getCollectionDay(point) {
    return this.collectionDays[point] || 'Not Assigned';
  }
}

const WasteCollection = () => {
  const [manager] = useState(new WasteManager());
  const [optimizedRoute, setOptimizedRoute] = useState([]);
  const [day, setDay] = useState('');
  const [point, setPoint] = useState('');

  // Only allow these collection points and days
  const collectionPoints = ['kotto', 'logbessou', 'makepe'];
  const collectionDays = ['Monday', 'Thursday', 'Saturday'];

  const addCollectionPoint = () => {
    if (point && day) {
      manager.addCollectionPoint(point, day);
      setPoint('');
      setDay('');
    }
  };

  const addRoute = (start, end, distance) => {
    manager.addRoute(start, end, distance);
  };

  const optimizeRoutes = () => {
    const optimized = manager.optimizeRoutes();
    setOptimizedRoute(optimized);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waste Collection Route Optimization</Text>

      {/* Collection Point and Day Inputs */}
      <View style={styles.collectionInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Collection Point (kotto, logbessou, makepe)"
          value={point}
          onChangeText={setPoint}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Collection Day (Monday, Thursday, Saturday)"
          value={day}
          onChangeText={setDay}
        />
        <Button title="Add Collection Point" onPress={addCollectionPoint} />
      </View>

      <Text style={styles.collectionListTitle}>Collection Points and Days:</Text>
      <FlatList
        data={manager.collectionPoints}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.routeItem}>
            {item} - {manager.getCollectionDay(item)}
          </Text>
        )}
      />

      <View style={styles.routeContainer}>
        <TouchableOpacity style={styles.button} onPress={() => addRoute("makepe", "kotto", 5)}>
          <Text style={styles.buttonText}>Add Route from makepe to kotto (5 km)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addRoute("makepe", "logbessou", 10)}>
          <Text style={styles.buttonText}>Add Route from makepe to logbessou (10 km)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addRoute("kotto", "logbessou", 2)}>
          <Text style={styles.buttonText}>Add Route from kotto to logbessou (2 km)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optimizeContainer}>
        <Button title="Optimize Routes" onPress={optimizeRoutes} />
      </View>

      <Text style={styles.optimizedRouteTitle}>Optimized Route:</Text>
      <FlatList
        data={optimizedRoute}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.routeItem}>{item}</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  collectionInputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  collectionListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
  },
  routeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  optimizeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  optimizedRouteTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
    textAlign: 'center',
  },
  routeItem: {
    fontSize: 18,
    padding: 8,
    marginVertical: 5,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    marginBottom: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50',  // Green background
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // White text on the green button
    fontSize: 16,
    textAlign: 'center',
  }
});


export default WasteCollection;
