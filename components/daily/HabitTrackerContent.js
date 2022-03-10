const HabitTrackerContent = () => {
  return (
    <>
      <div className="box_add">
        <button>추가</button>
      </div>
      <div className="tracker_list">
        <div className="tracker">
          <div className="title_box">
            <input type="text" defaultValue="코딩하기" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                <path d="M 3 1.4921875 C 2.172 1.4921875 1.5 2.1641875 1.5 2.9921875 L 1.5 20.992188 C 1.5 21.390187 1.6584531 21.770734 1.9394531 22.052734 C 2.2214531 22.333734 2.602 22.492187 3 22.492188 L 20.994141 22.492188 C 21.394141 22.492188 21.777594 22.333781 22.058594 22.050781 C 22.340594 21.767781 22.497141 21.383375 22.494141 20.984375 C 22.482141 18.636375 22.451172 12.988281 22.451172 12.988281 C 22.449172 12.712281 22.223266 12.491188 21.947266 12.492188 C 21.671266 12.494188 21.449172 12.718141 21.451172 12.994141 C 21.451172 12.994141 21.482141 18.640281 21.494141 20.988281 C 21.495141 21.121281 21.443609 21.250703 21.349609 21.345703 C 21.255609 21.439703 21.127141 21.492187 20.994141 21.492188 L 3 21.492188 C 2.867 21.492188 2.7404844 21.438703 2.6464844 21.345703 C 2.5534844 21.251703 2.5 21.125187 2.5 20.992188 L 2.5 2.9921875 C 2.5 2.7161875 2.724 2.4921875 3 2.4921875 L 12 2.4921875 C 12.276 2.4921875 12.5 2.2681875 12.5 1.9921875 C 12.5 1.7161875 12.276 1.4921875 12 1.4921875 L 3 1.4921875 z M 17.464844 1.6289062 C 17.067844 1.6289062 16.685297 1.7854063 16.404297 2.0664062 L 14.28125 4.1894531 L 8.2109375 10.259766 C 7.9299375 10.540766 7.7714844 10.923312 7.7714844 11.320312 L 7.7714844 15.855469 C 7.7714844 16.131469 7.9954844 16.355469 8.2714844 16.355469 L 12.808594 16.355469 C 13.205594 16.355469 13.586188 16.198969 13.867188 15.917969 L 19.939453 9.8457031 L 22.060547 7.7246094 C 22.341547 7.4436094 22.5 7.0610625 22.5 6.6640625 C 22.5 6.2660625 22.341547 5.8845156 22.060547 5.6035156 L 18.525391 2.0664062 C 18.244391 1.7854062 17.862844 1.6289062 17.464844 1.6289062 z M 17.464844 2.6289062 C 17.597844 2.6289062 17.724359 2.6813906 17.818359 2.7753906 L 21.353516 6.3105469 C 21.446516 6.4045469 21.5 6.5310625 21.5 6.6640625 C 21.5 6.7960625 21.446516 6.9235781 21.353516 7.0175781 L 19.585938 8.7851562 L 15.34375 4.5429688 L 17.111328 2.7753906 C 17.205328 2.6813906 17.332844 2.6289063 17.464844 2.6289062 z M 14.636719 5.25 L 18.878906 9.4921875 L 13.160156 15.210938 C 13.066156 15.303937 12.940594 15.355469 12.808594 15.355469 L 8.7714844 15.355469 L 8.7714844 11.320312 C 8.7714844 11.188313 8.8259219 11.060797 8.9199219 10.966797 L 14.636719 5.25 z"></path>
              </svg>
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
          <button className="button_delete">삭제</button>
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
        .title_box button svg{
          width: 10px;
          height: 10px;
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