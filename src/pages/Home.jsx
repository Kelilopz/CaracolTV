import React, { useEffect, useState } from 'react';
import { ApiService } from '../services/api';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AudioPlayer } from '../components/AudioPlayer';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    ApiService.fetchData().then(setData);
  }, []);

  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <Header logo={data.logo[0]} />
      <Breadcrumbs items={data.breadcrumbs} />
      <HeroSection headline={data.headline} subHeadline={data.subHeadline} image={data.lead[0].image} />
      <AudioPlayer audio={data.audioPlayer[0]} />
    </div>
  );
};