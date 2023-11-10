// WARNING: old code

import { readFileSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';

const URLs = new Set(JSON.parse(readFileSync('./db/db.json')));
const dbURLCount = URLs.size;
let totalURLCount = 0;
let validURLCount = 0;

function getRandomURL() {
  const chars = '0123456789abcdefghijklmnopqrstuwxyz';
  let id = '';

  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return `https://prnt.sc/${id}`;
}

async function fetchRandomImageURL() {
  const websiteURL = getRandomURL();
  const response = await fetch(websiteURL);
  const data = await response.text();
  const imageURL =
    data.match(/https:\/\/i\.imgur\.com\/.{1,10}\.(?:png|jpg|jpeg)/m)?.[0] ||
    // data.match(/https:\/\/image\.prntscr\.com\/image\/.{1,50}\.(?:png|jpg|jpeg)/m)?.[0] ||
    null;

  if (imageURL !== null) {
    URLs.add(imageURL);
    writeFileSync('./db/db.json', JSON.stringify([...URLs]));

    validURLCount++;
  }

  console.log(new Date().toLocaleString('en-GB'), websiteURL, '=>', imageURL);

  totalURLCount++;

  return imageURL;
}

setInterval(fetchRandomImageURL, 1000);

// ctrl+c
process.on('SIGINT', () => {
  console.log(`Fetched ${totalURLCount} URLs, out of which ${validURLCount} were valid`);
  console.log(`${dbURLCount} => ${URLs.size} URLs in database`);
  process.exit(69);
});
