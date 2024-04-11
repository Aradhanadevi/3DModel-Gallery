import React from 'react'
import Data from './Data.json'
import { useNavigate } from 'react-router-dom';
export const Free = (props) => {
    const navigate = useNavigate();

    const downloadNowBtn = (index)=>{
  
      const downloadNow1 = Data[index];
      const item = (Data[index]).title;
      console.log(item);
      props.downloadNow(downloadNow1);
      navigate('/display')
    }
    return (
      <>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
              {Data.map((item, index) => (
                <div key={index} className="col-md-3 mb-3">
                    <div className="card h-100">
                      <h4 className="card-title"><center>{item.title}</center></h4>
                      <center>
                      <img src={item.url} alt={item.title} className="card-img-top" style={{ width: '250px', height: '250px' }}  />
                      </center>
                        <div className="card-body">
                              <p className="card-text">Downloads: {item.downloads} Rs</p>
                              <p className="card-text"> <p className="card-text">{item.likes} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg> </p>
</p>
                              <button className='btn btn-warning' onClick={()=>downloadNowBtn(index)} >Download </button>
                        </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
      </>
    );
  };
