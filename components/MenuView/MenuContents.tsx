import React, { forwardRef, useImperativeHandle,useEffect, useState, useRef } from "react";
import {InlineIcon} from "@iconify/react";
import {useGlobalState} from "state-pool";
import DownloadFormats from "../Tools/DownloadFormats";
import {MenuProps} from "./Menu";
import {Song} from "../../api/interfaces";
import {useNative} from "../Hooks/useNative";



interface MenuContentProps extends MenuProps {
    innerRef: React.MutableRefObject<any>
    collapsed: boolean
    songs: Song[]
}


const MenuContents:React.FC<MenuContentProps> = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(props.collapsed)
    const [defaultDownloadFormat] = useGlobalState('defaultDownloadFormat')
    const native = useNative()
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          });
        }
      };
      const pauseAudio = () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      };
      


    useEffect(() => {
        setCollapsed(props.collapsed)
    }, [props.collapsed])

    const buttons = {
        "Copy Link": {
            callback: () => {
              if (props.linkToCopy) {
                // Play the audio
                playAudio();
          
                // Copy the link to the clipboard
                navigator.clipboard.writeText(props.linkToCopy).then(() => {
                  console.log(`Copied Link ${props.linkToCopy} to Clipboard ${props.songname}`);
                });
              }
            },
            icon: "ph:link-simple-bold",
          },          
        "Download": {
            callback: () => {
                console.log("Downloaded")
                const songId = props.linkToCopy.match(/song=(\d+)/);
        if (songId && songId[1]) {
          if (props.songname) {
            const downloadUrl = `${songId[1]}.m4a`; // Adjust the extension as needed
            const anchor = document.createElement("a");
            anchor.href = downloadUrl;
            anchor.download = `${props.songname}.m4a`; // Use props.songname for the file name
            anchor.click();
            console.log("Downloaded song with ID:", props.songname);
          } else {
            console.log("Song name not provided or invalid.");
          }
        } else {
          console.log("Song ID not found in the URL.");
        }
            },
            icon: "ph:download-simple-bold"
        }
    }
    let jsx = []
    for (let option of props.options) {
        jsx.push(
            <button key={option} onClick={() => {setCollapsed(true); buttons[option].callback()}} className={(props.fullAlbumMode? 'h-8':'h-6') + ' w-full px-2 flex items-center hover:bg-blue-500 hover:bg-opacity-25 dark:hover:bg-opacity-40 text-sm rounded-md'}>
                <div className={'space-x-2'}>
                    <InlineIcon className={"inline text-primary"} icon={buttons[option].icon}/>
                    <a className={'inline font-light'}>{option}
                        {option==='Download'? <span className={'ml-2 italic text-xs font-light text-secondary dark:text-secondary'}>
                            {DownloadFormats[defaultDownloadFormat].title}{" "}
                            {DownloadFormats[defaultDownloadFormat].quality}
                        </span>: null}            
                    </a>
                </div>
            </button>
            
        )
    }

    return (
        <div ref={props.innerRef} key={collapsed? 'hidden' : 'visible'} className={'absolute -top-1 -right-2 ' + (props.fullAlbumMode? 'w-60' : 'w-48') + ' bg-white dark:bg-dark-50 bg-opacity-50 bg-clip-padding rounded-lg p-1 shadow-md backdrop-blur z-20' + (collapsed? ' hidden' : '')}>
            {jsx}
        </div>
    )
}

export default MenuContents
