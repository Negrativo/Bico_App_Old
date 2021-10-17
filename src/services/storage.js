import * as FileSystem from 'expo-file-system';
import { AsyncStorage } from 'react-native';

const DOCUMENT_FOLDER = `${FileSystem.documentDirectory}`

const storage = ({
    setItem: async (key, value) => {
        const writtenContents = 
            await AsyncStorage.setItem(
                `${DOCUMENT_FOLDER}/${key}`, 
                value
            )
        return writtenContents
    },

    getItem: async (key) => {
        try {
          const value = 
            await AsyncStorage.getItem(`${DOCUMENT_FOLDER}/${key}`)
          return value
        } catch (error) {
          return null
        }
    },

    removeItem: async (key) => {
        await AsyncStorage.removeItem(`${DOCUMENT_FOLDER}/${key}`)
    },

    getAllKeys: async () => {
        const keys = 
            await AsyncStorage.getAllKeys()
        return keys
    },

});

export default storage;