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
    const offset = req.query.offset || 0
    const limit = req.query.limit || 20;

    const ts = Date.now();
    const apikey = config.marvel.apiPublicKey;
    const data = crypto.createHash('md5').update(ts+config.marvel.apiPrivateKey+apikey).digest("hex");

    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${data}&offset=${offset}&limit=${limit}`)
    .then(result => {
      return res.status(200).json(result.data);
    })
    .catch(err => {
      return res.status(500).json({
        msg: 'Something wrong with marvel API', 
        err: err
      });
    });
  }

};
