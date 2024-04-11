import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

const ModelViewer = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} scale={1} />;
};

export const Display = (props) => {
  const Items = props.downloadNow || [];

  const handleDownload = (filename) => {
    // Construct the URL based on the filename (assuming it's a relative path)
    const url = `${process.env.PUBLIC_URL}/${filename}`;
    // Create a link element
    const link = document.createElement('a');
    link.href = url;
    // Set the download attribute to force download
    link.setAttribute('download', '');
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Clean up
    document.body.removeChild(link);
  };
  return (
    <>
      <div>
        <center>
        <h1 >3D Model Viewer & Download Center</h1>
        </center>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              {Items.map((item, index) => (
                <div className='card' key={index}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <Canvas dpr={[1, 2]} style={{ width: 500, height: 500 }}>
                        <PresentationControls speed={1} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                          <Stage>
                            <color attach="background" args={["#101010"]} />
                            <ModelViewer modelUrl={item.modle} />
                          </Stage>
                        </PresentationControls>
                      </Canvas>
                    </div>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <h4 className='card-title'>{item.title}</h4>
                        <p>{item.description}</p>
                        <center><button type='button' className='btn btn-dark' onClick={() => handleDownload(item.model)}>Download Now</button></center>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


