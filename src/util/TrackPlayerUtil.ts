import TrackPlayer, {
    Track,
    State,
    PitchAlgorithm,
} from 'react-native-track-player';


/**
 * 현재 재생중인 음악을 일시 정지하거나, 일시 정지 중인 음악을 다시 재생함
 * @returns 현재 재생중 -> 일시 정지 : false | 일시 정지 -> 현재 재생중 : true
 */
export const onPlayOrPause = async () : Promise<State> => {
    const _playingStatus : State = await TrackPlayer.getState();
    if (_playingStatus === State.Playing || _playingStatus ===  State.Buffering) {
        await TrackPlayer.pause();
        return State.Paused;
    } else {
        await TrackPlayer.play();
        return State.Playing;
    }
};

/**
 * 다음 곡을 재생한다 : 인자로 받은 playingState가 true면 이어서 재생, false면 일시 정지 상태로 다음 곡
 * @param playingState : 버튼 누르기 전 현재 재생 상태
 * @returns : 다음 곡의 정보 반환
 */
export const onNext = async(playingState : State) : Promise<Track> => {

    //마지막 곡이라면 다음 곡을 재생함
    const isLast : boolean = await TrackPlayer.getCurrentTrack() === (await TrackPlayer.getQueue()).length - 1;
    await TrackPlayer.pause();
    if (!isLast) {
        await TrackPlayer.skipToNext();
        if (playingState === State.Playing || playingState === State.Buffering)   { await TrackPlayer.play(); }
        else    { await TrackPlayer.pause(); }

        return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
    } else {
        //마지막곡이면 첫번쨰 곡 재생
        await TrackPlayer.skip(0);
        if (playingState === State.Playing || playingState === State.Buffering)   { await TrackPlayer.play(); }
        else    { await TrackPlayer.pause(); }

        return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
    }


};

/**
 * 이전 곡을 재생한다 : 인자로 받은 playingState가 true면 이어서 재생, false면 일시 정지 상태로 이전 곡
 * @param playingState : 버튼 누르기 전 현재 재생 상태
 * @returns : 다음 곡 정보 반환
 */
export const onPrev = async (playingState : State) : Promise<Track> => {

    const position : number = await TrackPlayer.getPosition();
    await TrackPlayer.pause();

    //만약 재생한지 3초가 지났다면 현재 곡을 다시 재생한다.
    if (position >= 3) {
        await TrackPlayer.seekTo(0);

        return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
    } else {
        const isNotFirst : number = await TrackPlayer.getCurrentTrack();

        //만약 첫번째 곡이 아니라면 이전 곡을 재생
        if (isNotFirst) {
            await TrackPlayer.skipToPrevious();
            if (playingState === State.Playing || playingState === State.Buffering)   { await TrackPlayer.play(); }
            else    { await TrackPlayer.pause(); }

            return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
        }
        //만약 첫번째 곡이라면 마지막 곡을 재생
        else {
            const queue : Track[] = await TrackPlayer.getQueue();
            await TrackPlayer.skip(queue.length - 1);

            if (playingState === State.Playing || playingState === State.Buffering)   { await TrackPlayer.play(); }
            else    { await TrackPlayer.pause(); }

            return await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
        }
    }
};

/**
 * 특정 곡 한개를, 플레이리스트에서 삭제한다.
 * @param index : 재생목록에서 삭제할 음악 index 번호
 */
export const onDeleteOneTrack = async(index : number) : Promise<void> => {
    const nowPlaying = await TrackPlayer.getCurrentTrack();
    // const playingState = await TrackPlayer.getState();
    if (index === nowPlaying) {
        await TrackPlayer.skipToNext();
        await TrackPlayer.remove(index);
    } else {
        await TrackPlayer.remove(index);
    }
};


/**
 * 한 곡을 현재 재생중인 목록의 바로 다음 곡으로 추가함.
 * 같은 곡 추가시 index 번호를 붙여 구분한다.
 * @param track : 추가할 곡
 */
export const addTrackToPlayingListToNext = async(track : Track) : Promise<void> => {
    //같은 트랙들을 찾는다.
    const { title, artist, album  } = track;
    const queue : Track[] = await TrackPlayer.getQueue();
    const sameTrackList : Track[] = await Promise.all(queue.filter((item : Track) => {
        return (
            item.title === title
            && item.artist === artist
            && item.album === album
        );
    }));

    //index값 추가하여 track에 추가함
    const currentTrackIndex : number = await TrackPlayer.getCurrentTrack();

    if (currentTrackIndex === queue.length - 1) {
        await TrackPlayer.add({
            ...track,
            index : sameTrackList.length,
            pitchAlgorithm : PitchAlgorithm.Music,
        });
    } else {
        await TrackPlayer.add({
            ...track,
            index : sameTrackList.length,
            pitchAlgorithm : PitchAlgorithm.Music,
        }, currentTrackIndex + 1);
    }

};

/**
 * 한 곡을 현재 재생중인 목록의 마지막으로 추가함
 * 같은 곡 추가시 index 번호를 붙여 구분한다.
 * @param track : 추가할 곡
 */
export const addTrackToPlayingListToLast = async(track : Track) : Promise<void> => {
    //같은 트랙들을 찾는다.
    const { title, artist, album  } = track;
    const queue : Track[] = await TrackPlayer.getQueue();
    const sameTrackList : Track[] = await Promise.all(queue.filter((item : Track) => {
        return (
            item.title === title
            && item.artist === artist
            && item.album === album
        );
    }));

    await TrackPlayer.add({
        ...track,
        index : sameTrackList.length,
        pitchAlgorithm : PitchAlgorithm.Music,
    });


};

/**
 * 현재 재생중인 목록에 새로운 플레이리스트를 추가한다.
 * @param trackList : 추가할 목록
 * @param insertedIndex : 추가될 위치 = 없으면 마지막으로 추가
 */
export const addTrackListToPlayingList = async(trackList : Track[], insertedIndex? : number | undefined) : Promise<void> => {
    await TrackPlayer.add(trackList,insertedIndex);
};

/**
 * 현재 재생중인 목록을 한 곡으로만 바꾼다.
 * @param track
 */
export const changePlayListByOneTrack = async(track : Track) : Promise<void> => {
    //현재 음악을 멈추고, 초기화를 진행함
    await TrackPlayer.reset();

    await TrackPlayer.add(track);
    await TrackPlayer.play();
};

/**
 * 현재 플레이리스트를 모두 교체함
 * @param trackList : 새로운 트랙 리스트
 */
export const changePlayListByPlayList = async(trackList : Track[], currentTrackIndex? : number) : Promise<void> => {
    //현재 음악을 멈추고, 초기화를 진행함
    await TrackPlayer.reset();
    await TrackPlayer.add(trackList);
    if (currentTrackIndex !== undefined) {
        await TrackPlayer.skip(currentTrackIndex);
    }
    await TrackPlayer.play();
};
