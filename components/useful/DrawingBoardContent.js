import { Canvas, ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef, useState, useEffect } from 'react';

const DrawingBoardContent = () => {
  const drawingBoard = useRef();
  const [strokeColor, setStrokeColor] = useState('black');
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [canvasColor, setCanvasColor] = useState('white');
  const [eraserWidth, setEraserWidth] = useState(5);
  const [toolSizeLayer, setToolSizeLayer] = useState(false);
  const [toolColorLayer, setToolColorLayer] = useState(false);
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
            <button className="button_clear" onClick={()=>{drawingBoard.current.clearCanvas()}}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACT0lEQVR4nO2az2oUQRCHv4jmoBLwFjF7CYho3iBnPcej+CLrM0kgJ/Guz6BHWZD8gWgSE0RNJPEw07Bpe7anqqenszv1QcGkt7u66je1nd6eAcMwDMPIzQjYBk6Bq4idAjvAkyKRZmAEfCeeuG9H9di5Zxt58s7eFoi3c9qUfZP9yB3cUu4JqBKRzCntn8StnM7ngdsd+XkArAMbwLP6eh14Gujr3+EY58BX4Ettn4FP9fUEuNSFXCEpL5ekM5fsY2AlJYgE/gC7XBfFibTXxoFEAOmdK02r3Aa/BgxeAGPoaDYZP4G7wG/gV93mrkNtfX7u+mRlgn5rm9sm0mQ0i+ChYkxfiGPTCPBNMaYvehHgJleA+OYsmgD2FZAO6LIC3gFrVMdY7yM+zoEx8Ki2N3XbLNr47+XmbBH+F7Q21WfU0MfZOOB3HBnTxv/LDvKLstkw+R2v36xkHgb8rkbGTLPc0GdTmkyXa8A9gY/9QNuBYHzTXEXXAIkAqRQV4AS4CLSXFuACxSmyRoArqgcdPqUFcA9fRGgPREKlVloA1QZNK0BoIRyUAKHJ7it9aQjNVVyAwVdAaQFU22BbA5QB3MQKMAE0jhZJAFsDNI5SBPC3nSUFaNqeR9EK8JfqR9E0JTdCx1QxiUl5OOqXXMkKUB/UmgAJQfgLYUkB1IehVgEJQZgA3t9z+RVIeU3On9QdVbdB88LVrDFFKkD8LD4jRWJZptqAlH4p4oj/H8r0xusWAea2V9mzjPAC+Aic0V/SZ8AH4HkP+RmGYRiGsaD8A7Akcmw24fq5AAAAAElFTkSuQmCC"/>
            </button>
            <button className="button_save" 
                    onClick={()=>{drawingBoard.current.exportImage('png').then(data => {
                      console.log(data);
                    })
                    .catch(e => {
                      console.log(e);
                    });}
            }>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAs0lEQVRIie2WPQ6DMAxGXzJwqIrerN3pORi7cqWwtjegQymyUlMZCIlU8UleIvt7cv4BKuAG9MCQIJ7ABfBEapTkU5xkVC087mMTk4ICskqrkWOdhGntpwJ9OvNuxtgtAMU1mt81F+iRC/S9BfdScVBtrHciAM6/Epds59UqPnW7KMUdp0nee0O8RtbzY9Xk/X9rdIAOUBlQn4ETPNCKAevzYJF8Mlp4f4ca9G/X1gijd/UCDStihJWAousAAAAASUVORK5CYII="/>
            </button>
          </div>
          <div className="tools">
            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADTklEQVRoge3azYscRRyH8c/OutFRiSaiqHgwRgWRgJCLkFwV0YN6FPRfUMGj4M2Td18g4tst+IKooHlRFDG+JCJGVDxoDupFTEAQlxAyHqqGecn0TL9VTa/OA8XMdlfPfB+qtvrX081/k9vxFv6O7XXcuNRECenjDwym2mlbVHofDuAb/IjDeByXx/0b+M6FwgMczB22CZfgJbNFBvgd+2Pf6/DDjD6n80auTw8fKJYdtn9wTzxmlvSfWVM3YDs2LRaelr7WpPSbWVM35AGcVU/6pLCQ3ZY3cjX6wunkCHbGbXWlN4Q1oLP0hdV3GP4EdsR9VaX35Qxehz4OuTD8cfWkf8Nl+eJX56Di8HWlH80Xvzrvmh/+K1wZ+5aVfj9f/HL0cFV8vx3HzBf4UjXp73NIlKUvFBVn8VDc1rb08QwepZhejc/h4bivjPQJo1PWvYqLk+fSqyymaDU+p9pIf44rYv+ikb4zuc0CimRTSB9IbrOARbJtSW8Ka8NSK6yysnWlj8V+w/691ELzmF6gqkhXWcjGi5OlUXVkm470Z0YjnZ2mslWkP8Qv8f17WEstN01bsmWkD8fv24Uzcdt9if0maFu2SPod4YKjP/bdT8a+2U5JqWRnSc/ifqNpPUGKZbuPt3FXgs8eso5XjMrKae6Ir78mzID0IzveDpk9YLfir9jn7vYVR+SUPWLyf3bILcKoDvBG+4oj6hYVddrHZv9kMy77idGdiNZZySZqK1kr2TSsZBO1layVbBr+V7Lb5CsXh9ez04zLfoRLW7ccY39Diaayu2SUJVyNvFYheJuy8JgMshfjeTwR/17HqyWCty1L+E35wQV9GvPCWKCn47YU0otks7AX500GSyHdCVnCXbZZAduU7owsfKs4aBvSnZJdE556mRf4mdh3HS8v6DvdioqKpXG9csGH0j3lpTsnS7Uio4p0J2XhEdWmaBnpzsrCU6ovQvOkOy3L/GeRq0p3XpZQr9YRHj9l9YRnG7flDF6XU+oLD4xq704zvDezgRsaftbuhsdnZbf6I3sez9oi0/ii+HpTxeM28RM+xYv4us1QKVnD1TiKPVP7zuDngnZKGNktyRfC1Dwp3E+92RaZnnU5KjyZes2yg+TgX2wYmlrH5YYAAAAAAElFTkSuQmCC"/>
            </button>
            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACg0lEQVRYhdXXTYhOURgH8N/MJJLJdz4mUyxYKIOJxISNz8iGEIpplIWNLKVGWbFhYUFGspCJskCKja/kI5KV5JuNj0TDNONrLM59c92573vvO8bIv07de885z/9/nuc55zyX/xgjovZPMBAf8R1nMak3jddgEVZgJgYl+odH39vRFbUO7ERVuWQVsedZ2IX3uC+ssAb1Edke3MZ5PIvmNiXsXcSayEZZWCi4clSR/hocwj1hxZ2Yjza/vFBoj5UZkipcw+CMcavwI0Z0ARtTBHThNablFVCPAxljJktf7Q4cLiLiA6bnETADu0v0D8HDIiTfsETIjWKemJgloFqIfxoqcSZh9BOext7fYS4eFBHxFGOzRLRId1dzwtgNzMYmIdsLOfESDXhRRMQlGVt0XDRoZOzbcuGgiRtaLYTjKLb73fUPIhHFwtWc5YU6XBGydyjepBjZJri7FctSVvw86r+TMvcb5iRJKxLvY3AwMnQatZgi5MIzXMd4IcObsDJlIW+xDo1CmOK4KRx4JdEaU/1KOPnO4Ra+pqwsrXUK3tqMz4m+KaXIF+QkyNvOCHlx0q+E7RaGOPb1soDCgdQcCalPElYm3su+zXJgMLZEXHeyBi/V+x64IVxmuXGsF8kPoX855NAPp/6QuEPYAUlMyCuiCsd7SP5K+l6vE7bk1r8p4ipGp9gaJhQqXfiCeXlFlBOO/dH4NCRtvNS91uyxiHasLzF/cZF5e/MKKIg4kWLkCaZmzL1cQnhWGdgNG4Tj9aJQhlfnmNOGI3iUIqKhXAE9wV2hgG0Uqqm4gNq+ELA2IjsuXOEF8pa+IC9gi3ApdQmFyQHh965PMUD4YRna18Ql8RPM4HDbaPDQWQAAAABJRU5ErkJggg=="/>
            </button>
            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACH0lEQVR4nO3Zy2rUUBzH8Y94QWfrFX0GN64EFQulgriqG59BX8IHEAXRhSsFd6Jv0OrKbRdeS/sIXSgo3sFx0QyNZS7JJDknSc8X/jDMMIf/95eT/wmERCKRSCQSicTeZF/sBgpyFhdxECtYj9tOOAZ4jGGu/uIB9kfsKwgDrPpfPl/PcCBadw0zS77XIRSV72UIZeV7FcK88r0Ioap8p0OoS76TIdQt36kQmpLvRAgDvNSc/KieauHjfij5Ud0Mo1WM0PJDrAUxK0AM+SG2QsjNIpb8EK8D+E0lpvwQN5pXnExs+XvNK06m6XN+Vj0S8QhM8jMaTPINVVR5WMBvceTvi3zlT2WfrwsfQnT5VWziTPbdNfy0B7b97nt+E6ez30KEEFX+iPEDb0OYEKLLr0xprukQWi3fdAhR5Q8rd85/tHM6LKt+OkSd9vBwTFNFQjiZ/b9KCNHlD+GX+Zr/oFoI0eXZfkdfZfu+x4lsrTIhtEIejqo+wNbtzIQigzH6s/1u1lQP4R2OZ+tN2wmtufJ5zuGr6iG8NT2EVsqPuKCeEPJHZP52aN22H8cCvqkewhscy9Zcxl0dkB9xST07IR9C51jEd9VDuB268TpZUi2EVr/FLcoSfigv/1wP5EdcUS6EF1ogP2ninsflOdZbtL0bZvEFd/Cn5Pqf8WSO/5VmQ/XB1lRdrVN00ha8pdiVDM0nvIrdRCKRSCQSiX7wD5UaAPetd7aGAAAAAElFTkSuQmCC"/>
            </button>
            <div className="tool_option">
              {toolColorLayer && <div className="tool_color"></div>}
              {toolSizeLayer && <div className="tool_size"></div>}
            </div>
          </div>
        </div>
        <ReactSketchCanvas
          width="100%"
          height="100%"
          style={canvasStyles}
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
          eraserWidth={eraserWidth}
          canvasColor={canvasColor}
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
      .step button img{
        vertical-align: middle
      }
      .button_clear{
        width: 50px;
        height: 40px;
        margin: 0 5px 0 20px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      .button_clear img{
        height: 36px;
        vertical-align: middle;
      }
      .tools{
        position:absolute;
        top: 0;
        right: 0;
        padding: 5px;
      }
      .tools button{
        width: 50px;
        height: 40px;
        border:1px solid gray;
        border-radius: 5px;
        vertical-align: top;
        margin-left: 5px;
        background-color: #FFDFD3;
      }
      .tools img{
        height: 34px;
      }
      `}</style>
    </>
  )
}
export default DrawingBoardContent