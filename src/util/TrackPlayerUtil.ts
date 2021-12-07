import TrackPlayer, {
    Track,
    State,
} from 'react-native-track-player';


/**
 * 현재 재생중인 음악을 일시 정지하거나, 일시 정지 중인 음악을 다시 재생함
 * @returns 현재 재생중 -> 일시 정지 : false | 일시 정지 -> 현재 재생중 : true
 */
export const onPlayOrPause = async () : Promise<boolean> => {
    const _playingStatus : State = await TrackPlayer.getState();
    if (_playingStatus === State.Playing || _playingStatus ===  State.Buffering) {
        await TrackPlayer.pause();
        return false;
    } else {
        await TrackPlayer.play();
        return true;
    }
};

/**
 * 다음 곡을 재생한다 : 인자로 받은 playingState가 true면 이어서 재생, false면 일시 정지 상태로 다음 곡
 * @param playingState : 버튼 누르기 전 현재 재생 상태
 * @returns : 다음 곡의 정보 반환
 */
export const onNext = async(playingState : boolean) : Promise<Track> => {
    await TrackPlayer.skipToNext();
    if (playingState)   { await TrackPlayer.play(); }
    else    { await TrackPlayer.pause(); }

    return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
};

/**
 * 이전 곡을 재생한다 : 인자로 받은 playingState가 true면 이어서 재생, false면 일시 정지 상태로 이전 곡
 * @param playingState : 버튼 누르기 전 현재 재생 상태
 * @returns : 다음 곡 정보 반환
 */
export const onPrev = async (playingState : boolean) : Promise<Track> => {

    const position = await TrackPlayer.getPosition();

    //만약 재생한지 3초가 지났다면 현재 곡을 다시 재생한다.
    if (position >= 3) {
        await TrackPlayer.seekTo(0);

        return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
    } else {
        const isNotFirst : number = await TrackPlayer.getCurrentTrack();

        //만약 첫번째 곡이 아니라면 이전 곡을 재생
        if (isNotFirst) {
            await TrackPlayer.skipToPrevious();
            if (playingState)   { await TrackPlayer.play(); }
            else    { await TrackPlayer.pause(); }

            return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
        }
        //만약 첫번째 곡이라면 마지막 곡을 재생
        else {
            const queue = await TrackPlayer.getQueue();
            await TrackPlayer.skip(queue.length - 1);

            if (playingState)   { await TrackPlayer.play(); }
            else    { await TrackPlayer.pause(); }

            return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
        }
    }
};

/**
 * 한 곡을 현재 재생중인 목록의 바로 다음 곡으로 추가함.
 * @param track : 추가할 곡
 */
export const addNowTrackToPlayingListToNext = async(track : Track) : Promise<void> => {
    const currentTrackIndex = await TrackPlayer.getCurrentTrack();
    await TrackPlayer.add(track, currentTrackIndex);
};

/**
 * 한 곡을 현재 재생중인 목록의 마지막으로 추가함
 * @param track : 추가할 곡
 */
export const addNowTrackToPlayingListToLast = async(track : Track) : Promise<void> => {
    await TrackPlayer.add(track);
};
