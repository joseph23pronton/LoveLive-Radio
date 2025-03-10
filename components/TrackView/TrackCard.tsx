import React from "react";
import {Artist, Song} from "../../api/interfaces";
import {useBaseURL} from "../Hooks/useBaseURL";
import {useNative} from "../Hooks/useNative";
import Image from "next/image";
import {getLocalizedTitle} from "../Tools/Localization";
import Link from "next/link";
import Menu from "../MenuView/Menu";
import RenderArtist from "../Tools/RenderArtist";

interface TrackCardProps {
    track: Song
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
    const baseURL = useBaseURL()
    const native = useNative()

    if (!track) return null

    const title = getLocalizedTitle(track.titleNat, track.titleRom, native)
    const inAlbumTitle = getLocalizedTitle(track.inAlbum.titleNat, track.inAlbum.titleRom, native)
    const artists: Artist[] = track.artists.length > 0? track.artists : track.inAlbum.artists
    const imgUrl = `/cds/${track.inAlbum.id}.jpg`
    const trackUrl = `/cds/${track.inAlbum.id}?song=${track.id}`

    return (
        <div className={'h-24 w-96 mb-6 mr-6 bg-gray-100 dark:bg-dark-100 transition duration-300 shadow-lg rounded-2xl flex flex-row'}>
            <div className={'h-20 w-20 m-2 relative flex-shrink-0'}>
                <Image src={imgUrl} className={'rounded-xl'} layout={'fill'} objectFit={"cover"} alt={'Album Cover'}/>
            </div>
            <div className={"w-72 pl-2 pr-4 py-3"}>
                <div className={'max-w-full inline-flex w-full text-lg align-middle mb-1'}>
                    <span className={'inline-block flex-grow mr-2 truncate'}>
                        <p className={'hover:underline inline-block'}>
                            <Link href={trackUrl}>{title}</Link>
                        </p>
                    </span>
                    <Menu className={'flex-none text-md inline-block'} options={['Copy Link', 'Download']} linkToCopy={`${baseURL}${trackUrl}`} songname={""}/>
                </div>
                <div className={'space-x-1 max-w-full text-sm truncate'}>
                    <p className={'text-secondary dark:text-secondary truncate max-w-full min-w-0'}>
                        Song by <span className={'text-primary dark:text-primary'}>{<RenderArtist artists={artists}/>}</span>
                    </p>
                </div>
                <div className={'space-x-1 text-sm truncate'}>
                    <p className={'inline-block text-secondary dark:text-secondary'}>From</p>
                    <p className={'inline-block text-secondary dark:text-secondary hover:underline'}>
                        <Link href={'/cds/[id]'} as={`/cds/${track.inAlbum.id}`}>{inAlbumTitle}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TrackCard
