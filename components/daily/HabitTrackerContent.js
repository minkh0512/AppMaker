import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

const HabitTrackerContent = () => {
  return (
    <>
      <div className="box_add">
        <button>추가</button>
      </div>
      <div className="tracker_list">
        <div className="tracker">
          <div className="title_box">
            <input type="text" value="코딩하기" />
            <button>
              
            </button>
          </div>
          <ul className="list_days">
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>6</button>
            </li>
            <li>
              <button>7</button>
            </li>
            <li>
              <button>8</button>
            </li>
            <li>
              <button>9</button>
            </li>
            <li>
              <button>10</button>
            </li>
            <li>
              <button>11</button>
            </li>
            <li>
              <button>12</button>
            </li>
            <li>
              <button>13</button>
            </li>
            <li>
              <button>14</button>
            </li>
            <li>
              <button>15</button>
            </li>
            <li>
              <button>16</button>
            </li>
            <li>
              <button>17</button>
            </li>
            <li>
              <button>18</button>
            </li>
          </ul>
          <p className="complete">달성율 0 %</p> 
        </div>
      </div>
      <style jsx>{`
        .box_add{
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 5px;
          text-align: center;
        }
        .box_add button{
          width: 100%;
          font-size: 15px;
          height: 36px;
          color: #fff;
          border-radius: 5px;
          margin-right: 0.5%;
          background-color: #4caf50;
        }
        .tracker_list{
          padding: 5px;
        }
        .tracker{
          position: relative;
        }
        .title_box{
          border: 1px solid #ccc;
          border-bottom: 0;
        }
        .title_box input{
          display: block;
          border: 0;
          width: 100%;
          height: 100%;
          padding: 0 30px 0 10px;
        }
        .list_days{
          display: flex;
          flex-flow: row wrap;
          border-top: 1px solid #ccc;
          border-right: 1px solid #ccc;
          position: relative;
        }
        .list_days li{
          flex: 0 1 calc(14.26%);
          position:relative;
        }
        .list_days li:after{
          content: '';
          display: block;
          position: absolute;
          top:0;
          right: 0;
          bottom: 0;
          left:0;
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
        .list_days li:nth-child(7n){
          flex: 0 1 calc(14.32%);
        }
        .list_days li:last-child:after{
          right: -1px;
          border-right: 1px solid #ccc;
        }
        .list_days button{
          width: 100%;
          height: 50px;
          text-align: center;
        }
        .complete{
          position: relative;
          top: -1px;
          border: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}

export default HabitTrackerContent;