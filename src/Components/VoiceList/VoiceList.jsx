import React from "react";
import VoiceItem from "../VoiceItem/VoiceItem";
import mp3_100reasons from '../../Musics/100reason.mp3'
import mp3_fiolet from '../../Musics/fiolet-romantic.mp3'
import mp3_hb from '../../Musics/happy_birthday.mp3'
import mp3_trevor from '../../Musics/trevor_daniels-falling.mp3'

function VoiceList() {
  return (
    <div>
      <VoiceItem name={'100 причин'} mp3={mp3_100reasons}/>
      <VoiceItem name={'Хэппи бёздей'} mp3={mp3_hb}/>
      <VoiceItem name={'Для настроения'} mp3={mp3_fiolet}/>
      <VoiceItem name={'Для настроения 2'} mp3={mp3_trevor}/>
    </div>
  )
}

export default VoiceList;
