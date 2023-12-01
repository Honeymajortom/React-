import './App.css';
import React, { useEffect, useRef } from "react";
import { data } from "./data";
import Navbar from './Navbar';



function App() {

  const GroupRef = useRef([]);

  const onScroll = (eL) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect()

        return { group, rect };
      }).find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.txtcolor;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, []);

  return (
    <>
      <div className='App'>
        <Navbar />

        {data.map((group, i) => (
          <div
            ref={(eL) => (GroupRef.current[i] = eL)}
            style={{ height: '100vh' }}
            data-bgcolor={group.theme.background}
            data-txtcolor={group.theme.text}
          >
            <h1>{group.title}</h1>
            <p>{group.paragraph}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;