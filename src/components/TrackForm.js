import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

export default function TrackForm() {

    const {
        state : {
            name,
            recording,
            locations
        },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();


    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Entry name" />
            </Spacer>
            <Spacer>
                {
                    recording
                        ? <Button title="Stop" onPress={stopRecording}/>
                        : <Button title="Start Recording" onPress={startRecording}/>
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length
                        ? (<Button title="Save Recording" onPress={saveTrack}/>)
                        : null
                }
            </Spacer>
        </>
    )
}