import DrawingBoardContent from "../../components/useful/DrawingBoardContent";

const DrawingBoard = () => {
  return (
    <>
      <div className="app-drawing-board">
        <DrawingBoardContent />
      </div>
      <style jsx>{`
        .app-drawing-board{
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default DrawingBoard