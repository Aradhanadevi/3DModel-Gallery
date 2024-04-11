import React from 'react';
import  { useState, useEffect } from 'react';
import Data from "./Data.json";
import { useNavigate } from 'react-router-dom';
import './Css/Home.css'; 

export const Home = (props) => {
  const [model, setModel] = useState([]);
  const navigate = useNavigate();
  const downloadNowBtn = (index)=>{
    const downloadNow1 = Data[index];
    const item = (Data[index]).title;
    console.log(item);
    props.downloadNow(downloadNow1);
    navigate('/display')
  }
  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await fetch('/blend');
        const data = await response.json();
        setModel(data);
      } catch (error) {
        console.error('Error fetching modles:', error);
      }
    };

    fetchModel();
  }, []);
  return (
    <div className='container-fluid home-container'>
      <div className='row justify-content-center'>
        {model.map((item, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3"> {/* Adjust column width for different screen sizes */}
            <div className="card h-100">
              <h4 className="card-title text-center">{item.title}</h4>
              <div className="text-center">

                 {/* Fetch image URL from Data.json based on some identifier */}
                 <img src={Data.find(dataItem => dataItem.title === item.title)?.url} alt={item.title} className="card-img" style={{ maxWidth: '100%', height: "100%" }} />
              </div>
            
              <div className="card-body">
                <p className="card-text">Downloads: {item.downloads} </p>
                <p className="card-text">Likes: {item.likes} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg> </p>
                <button className='btn btn-info btn-block' onClick={()=>downloadNowBtn(index)} >Download </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
