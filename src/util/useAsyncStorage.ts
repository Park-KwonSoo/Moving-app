import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//asyncStorage에 값이 저장되어 있다면 해당 값을 리턴, 아니라면 initialValue로 설정
const useAsyncStorage = (key : string, initialValue : string) : [string, (value : any) => void] => {

    const [storedValue, setStoredValue] = useState<string>(initialValue);

    useEffect(() => {
        AsyncStorage.getItem(key)
            .then((value : string | null) => {
                if (value)   {return value;}
                return initialValue;
            })
            .then((value : string) => {
                setStoredValue(value);
            });

    }, [key, initialValue]);

    const setValue = (value : any) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        AsyncStorage.setItem(key, value);
    };

    return [storedValue, setValue];

};

export default useAsyncStorage;
