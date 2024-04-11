import { Route, Routes } from "react-router-dom";
import  Home  from "./comp/Home"
import { About } from "./comp/About";
import { Contact } from "./comp/Contact";
import { Navbar } from "./comp/Navbar";
import { Free } from "./comp/Free";
import { useState } from "react";
import Footer from "./comp/Footer";
import { Display } from "./comp/Display";
import FAQPage from "./comp/FAQPage";
import BlogPage from "./comp/BlogPage";
import { Login } from "./comp/Login";
import { Profile } from "./comp/Profile";
import {Signup} from "./comp/Signup";

const App = (props) => {
  const [downloadModle, setDownloadModle] = useState([]);

  const downloadNowFunc = (items) => {
    const temp = [...downloadModle, items];
    setDownloadModle(temp);
    console.log(downloadModle);
  }

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home downloadNow={downloadNowFunc} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free" element={<Free downloadNow={downloadNowFunc} />}/>
        <Route path="/display" element={<Display downloadNow={downloadModle} />} />
        <Route path="/que" element={<FAQPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
// environment={"sunset"}