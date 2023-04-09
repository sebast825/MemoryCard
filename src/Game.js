import React from 'react';
import './App.scss';
import { useEffect, useState } from 'react';
import Box from './Box';
import Header from './Header';
import DotLoader from "react-spinners/DotLoader";

const clientId = 'BTtUfQ1wl6hb1I3inmzidGfF0qFLvvN71JApPdcu1EQ'

function Game(props) {
  const { category, setPreviousGame, setShowTab } = props
  const [numberClicked, setNumberClicked] = useState([])
  const [level, setlevel] = useState(1)
  const [points, setPoints] = useState(0)
  const [seFinish, setSeFinish] = useState(null)
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState({
    1: [],
    2: [],
    3: [],
    4: []
  })


  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
    }, 500);
  
  },[level])

  useEffect(()=>{
    if(!loading)  changeLayout()

  },[loading])

  const apiRequest = () => {
    const randomNumber = Math.floor(Math.random() * 80) + 1;
    const endPoint = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${category}&per_page=30&page=${randomNumber}`;

    fetch(endPoint)
      .then((response) => response.json())
      .then((jsonData) => {
        setImg({
          1: jsonData.results.slice(0, 3),
          2: jsonData.results.slice(3, 9),
          3: jsonData.results.slice(9, 18),
          4: jsonData.results.slice(18)
        });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };


  useEffect(() => {
    if (img[1] == "") apiRequest()

  }, [])


  useEffect(() => {

    if (seFinish) {
      console.log('sefinish')
      setPreviousGame([true, points])
      setShowTab('endGame')
      resetStats()

    }
    else if (seFinish === false) {
      console.log('sigue', seFinish)
      setPreviousGame([false, points])
      resetStats()
      setShowTab('endGame')

    }
  }, [seFinish])

  const boxClicked = (e) => {
    imgSort()
    let imgClicked = wasImageClicked(e.id);
    if (imgClicked != undefined) { setSeFinish(false); return } else addImageClicked(e.id);

    let nextLevel = isNextLevel()
    nextLevel ? setNextLevel() : console.log('no next level');
    /* pasa los niveles con un solo click */
    /*   if (nextLevel || !nextLevel) {
         setNextLevel();
       } else {
         console.log('no next level')
       };
   */
  }

  const changeLayout = () => {
    let containerImg = document.querySelector('.App-header');
    var childCount = containerImg.children.length;
    
    containerImg.classList.remove('ninePhotos');
    containerImg.classList.remove('treePhotos');
    containerImg.classList.remove('sixPhotos');
    containerImg.classList.remove('tewelvePhotos');

    if (childCount <= 3) {
      containerImg.classList.add('treePhotos');
    } else if (childCount > 3 && childCount <= 6) {
      containerImg.classList.add('sixPhotos');
      console.log('arg')
    }
    else if (childCount > 6 && childCount <= 9) {
      containerImg.classList.add('ninePhotos');
    }
    else if (childCount > 9) {
      containerImg.classList.add('tewelvePhotos');
    }
    else {
      console.log('error')
    }
  }

  const wasImageClicked = (number) => {
    const alreadyClicked = numberClicked.find(elem => elem == number);
    return alreadyClicked
  }

  const addImageClicked = (e) => {
    setNumberClicked([...numberClicked, e])
    incrementPoint()
  }

  const incrementPoint = () => {
    setPoints(points + 1)
  }

  const wasLastLevel = () => {
    return level == Object.keys(img).length
  }


  const resetStats = () => {
    setlevel(1)
    setNumberClicked([])
    setPoints(0)
  }
  const goMenu = () => {
    resetStats()
    setShowTab('category')

  }
  const isNextLevel = () => {
    const valueLength = img[level].length;
    // is +1 because the updated value reflect after, and if use useffect, will render 1 time before and will activate setNextLevel
    const numberClickedLength = numberClicked.length + 1
    return valueLength == numberClickedLength

  }

  const setNextLevel = () => {
    let lastLevel = wasLastLevel();
    console.log(lastLevel)
    if (lastLevel) return setSeFinish(true)
    setlevel(level + 1)
    setNumberClicked([])
  }

  const imgSort = () => {
    //don't need to use setImg because useState allow re order but not modify element
    const newData = img[level].sort(() => Math.random() - 1)
  }

  return (
    <div >
      {
        loading ?
          <div className="loading">

            <DotLoader
              color={"#fff"}
              loading={loading}
              speedMultiplier={1.5}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h2>Level {level}</h2>
            <h2>Level {level}</h2>

          </div>
          :
          <div className="App ">
            <Header points={points} goMenu={goMenu} />

            <div className='App-header treePhotos' onUpdate={changeLayout} >

              {img[level].map((elem) => {
                return <Box val={elem} level={level} key={+new Date() + elem.id} boxClicked={boxClicked} />
              })}
            </div>
          </div>
      }
    </div>
  );
}

export default Game;