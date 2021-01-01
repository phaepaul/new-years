import React, {useState, useEffect} from 'react';

const Marquee = () => {
  const [shuffle, setShuffle] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      let newShuffle = !shuffle;
      setShuffle(newShuffle);
    }, 500);
    // Cleanup on dismount.
    return () => clearTimeout(timeout);
  });

  const SendIt = () => {
    let color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lime', 'indigo'];
    return( ([...Array(60)].map((_, i) => {
      let index = Math.floor(Math.random() * 8);
      let h = ['happy', 'new', 'year!'];
      let classNm = ''
      classNm = (shuffle ? 'mrq ' + color[index] : 'mrq')
      return(<span className={classNm} key={i}>&nbsp;{h[i%3]}&nbsp;</span>);
    })));
  }

  return (
    <div className="mrq-container">
      {SendIt()}
    </div>
  )
}

export default Marquee;