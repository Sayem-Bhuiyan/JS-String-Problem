const lyrics = 'Tumi bondu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada.';

const word = lyrics.split(' ');
console.log(word);

const sentence = lyrics.split('.');
console.log(sentence);

const char = lyrics.split('');
console.log(char);

const partial = lyrics.slice(5, 9);
console.log(partial);




const song = [
    'Tumi bondu kala pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'kala kala sada sada',
    ''
  ]

const newSong = song.join('. ');
console.log(newSong);

const lines = ['ajke ami', 'bari jabo', 'na'];
const newLines = lines.join(' ');
console.log(newLines);