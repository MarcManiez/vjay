import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { fetchPlaylist, VLCPlaylist } from "../vlc";

interface Video {
  name: string;
  url: string;
}

const Home: NextPage<{ videos: Video[] }> = ({ videos }) => {
  const [playlist, setPlaylist] = useState<VLCPlaylist>();
  useEffect(() => {
    const interval = setInterval(async () => {
      const VLCPlaylist = await fetchPlaylist();
      setPlaylist(VLCPlaylist);
    });
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Vjay</title>
        <meta name="description" content="This is for Deniz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>test</main>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { data } = await axios.get(`http://${req?.headers.host}/api/videos`);
  return { videos: data };
};

export default Home;
