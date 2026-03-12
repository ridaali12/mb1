import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAlerts } from '@/contexts/AlertContext';

const AlertTestButton = () => {
  const { addHighAlert, addNormalAlert } = useAlerts();

  const testHighAlert = () => {
    addHighAlert(
      '🚨 TEST: Injured Animal',
      'This is a test high alert for injured animal reporting',
      'test-report-123'
    );
  };

  const testNormalAlert = () => {
    addNormalAlert(
      '✅ TEST: Normal Report',
      'This is a test normal alert for regular reporting'
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, styles.highAlertButton]} 
        onPress={testHighAlert}
      >
        <Text style={styles.buttonText}>Test High Alert (Red)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.normalAlertButton]} 
        onPress={testNormalAlert}
      >
        <Text style={styles.buttonText}>Test Normal Alert (Green)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    right: 16,
    gap: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  highAlertButton: {
    backgroundColor: '#FF5252',
  },
  normalAlertButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default AlertTestButton;
