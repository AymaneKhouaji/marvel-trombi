'use strict';

const axios = require('axios');
const crypto = require('crypto');
const libConfig = require('../../lib').config;
const config = libConfig('default');


//TODO 
 // - require axios DONE
 // - Config file handle
 // - call marvel api

module.exports = () => {
  return {
    getAllHeroes
  };

  function getAllHeroes(req, res) {
    const ts = Date.now();
    const apikey = config.marvel.apiPublicKey;
    const data = crypto.createHash('md5').update(ts+config.marvel.apiPrivateKey+apikey).digest("hex");

    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${data}`)
    .then((result) => console.log(result.status))
    .catch(err => console.log(err));
  }

};
