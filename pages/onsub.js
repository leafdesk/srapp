import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css';

export default function Onm() {
    const router = useRouter();
    const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    let PLAYLIST_ID = "";
    let on_title = "";
    if(router.query.flag==1) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ONMORMING;
        on_title = "온특새";
    } else if(router.query.flag==2) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ON3MINUTES;
        on_title = "온삼분";
    } else if(router.query.flag==3) {
        PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ONBIBLE;
        on_title = "온성경";
    }
    const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;
    const [datas, setDatas] = useState([]);

    const getData = async () => {
        const api_data = await axios.get(API_URL);
        setDatas(api_data.data.items);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/onmain"); }}>{on_title}</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {datas.map((data, i) => (
                        <div className={styles.card} key={i}>
                            <a href={`https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`}>
                                <p>
                                    <img width={data.snippet.thumbnails.medium.width} height={data.snippet.thumbnails.medium.height} src={data.snippet.thumbnails.medium.url} alt="" />
                                </p>
                                <p>{data.snippet.title}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}