import Bloglist from "./components/Bloglist";
import Navbar from "./components/Navbar";
import Post from "./blog/id";
import Index from "./blog/index";
import Usefetch from "./Usefetch";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  let {data, error, loading} = Usefetch('http://localhost:1337/api/blogs?populate=*')
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App bg-[#0C1B30]" >
      <Navbar />
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Bloglist blogs={data?data:""}/>} />
            <Route path="/blog"  element={<Index />} />
            <Route path=":blogId" element={<Post blogs={data?data:""}/>} />

    </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
