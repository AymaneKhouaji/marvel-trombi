'use strict';

const axios = require('axios');
const crypto = require('crypto');


//TODO 
 // - require axios DONE
 // - Config file handle
 // - call marvel api

module.exports = () => {
  return {
    getAllHeroes
  };

  function getAllHeroes(req, res) {
    //getConfig then axios

    const ts = Date.now();
    axios.get('https://gateway.marvel.com:443/v1/public/characters', {
      params: {
        apikey: "376a84fde31284991e6f72ebc2cd3072",
        ts: ts,
        hash: crypto.createHash('md5').update(data).digest("hex") //TODO md5 of ts+public+private
      }
    })
    .then((result) => console.log(result.status));
  }

};
