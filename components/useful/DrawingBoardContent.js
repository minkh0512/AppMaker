import { Canvas, ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef, useState, useEffect } from 'react';

const DrawingBoardContent = () => {
  const drawingBoard = useRef();
  const [strokeColor, setStrokeColor] = useState('black');
  useEffect(()=>{
    
  },[]);

  const canvasStyles = {
    border: 0,
    borderRadius: 0,
  }
  return(
    <>
      <div className="drawing-board">
        <div className="controller">
          <div className="step">
            <button onClick={()=>{drawingBoard.current.undo()}}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABP0lEQVRIic3UvyvFYRTH8de9FAsDSpTFyiIZTYrJX2Cx8Dcog8nkHxAli9Ugs1UG5EdhkUEpIhT5eRnu9/JN33t5vtdXPnXqqef59O6c85zDP1MO9VlDWrGGwywhvTjBG66zgozjMYJkAqrHfAyQCagDGwmQqkG52HkIS2gu87aAY9zgDrc4wH4UO3j9DjaJF8mZ/DQuMIuucqCFKgFf4xVzaIhD8lFJflN5jGEd7fGLHCZUX7qk2JawUQZwXsFUwBWeAmFTSWmHfO8W9GEEMzgq47tMygrqFH9PmjnqxmKUfdw7XMk0ivtAUEmD0fuSd/o7Q4/ikKbZDP0++7n0E0MTVrAXCKLYuzeshphqUoDa8IzlfICp4h4rozNs4qY2hTlUuzhNU45QdeI4pHRp9YCtvwCdKo5I5mr8C8iH3gFHhKuBlRQI1QAAAABJRU5ErkJggg=="/>
            </button>
            <button onClick={()=>{drawingBoard.current.redo()}}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABRUlEQVRIidXVzysEcRjH8Ze1xRJKykEujn4kBwc5Kmd3F/8F5eSi5B+gyEG5KgfFwd1BkhIHklwQcZHf6zC7mbbZ3dllp3zqqTm8v9/3PE/PNPyTNKIuCdEp9tBZa9EjsrjGSBKiLN4xnYQoX+toSkKUxSF6wmC5janHIAbQh160oBltuctSRc7eYxI7pQT9WMZdkTeOWx+YjWqoFSv4/KWgsFbTIUkXdnPj+etk8w8ZHP1xF/nRzQiNbq7CC97wgK8SzC3Gwm1lcoei4DMsCrZnGB0FIym23vvoLpzfRAH0hTXBOpdLlGgJDVHwfAh6xHgMQZToGVOl4A0/cx+tQBIWXWCoHLydgxcqlMAxttAeB94UdFPNP6U+LpjCEw5wU4XoMy6YxiVeqpBUlDROBN9RTZMSjO01CdE5rmotyqc1KVHN8w3j7KVdtNpz2wAAAABJRU5ErkJggg=="/>
            </button>
          </div>
        </div>
        <ReactSketchCanvas
          width="100%"
          height="100%"
          style={canvasStyles}
          strokeWidth={4}
          strokeColor={strokeColor}
          ref={drawingBoard}
        />
      </div>
      <style jsx>{`
      .drawing-board{
        position: relative;
        height: 100%;
        padding-top: 50px;
        border: 5px solid gray;
      }
      .controller{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        border-bottom: 1px dotted gray;
      }
      .step{
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
      }
      .step button{
        width: 50px;
        height: 40px;
        border: 1px solid gray;
        border-radius: 5px;
        background:#E0BBE4
      }
      .step button:first-child{
        margin-right: 5px;
      }
      `}</style>
    </>
  )
}
export default DrawingBoardContent