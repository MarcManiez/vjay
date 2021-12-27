import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { fetchPlaylist, PlaylistItem } from "../vlc";
import { Playlist } from "../components/Playlist";
import { Library } from "../components/Library";
import { enqueueItem } from "../vlc/enqueueItem";

const Home: NextPage<{ videos: PlaylistItem[] }> = ({ videos }) => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  useEffect(() => {
    const interval = setInterval(async () => {
      const VLCPlaylist = await fetchPlaylist();
      setPlaylist(VLCPlaylist);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Vjay</title>
        <meta name="description" content="This is for Deniz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Playlist playlistItems={playlist} />
        <Library
          libraryItems={videos}
          onEnqueue={async (item) => await enqueueItem(item)}
        />
      </main>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { data } = await axios.get(`http://${req?.headers.host}/api/videos`);
  return { videos: data };
};

export default Home;
