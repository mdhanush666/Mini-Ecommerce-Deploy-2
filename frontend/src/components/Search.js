import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Search() {

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchHandler = () =>{
    if(keyword){
      navigate('/search?keyword='+keyword);   
    }
    else{  
      navigate('/');
    }
  }

  const getSearch = (e) =>{
    if(e.target.value){      
      setKeyword(e.target.value)
      navigate('/search?keyword='+e.target.value);
    }
    else{
      setKeyword('');
      navigate('/');
    }
  }  

  return <div className="col-12 col-md-6 mt-2 mt-md-0">
    <div className="input-group">
      <input
        type="text"
        id="search_field"
        onChange={getSearch}
        className="form-control"
        placeholder="Enter Product Name ..."
      />
      <div className="input-group-append">
        <button id="search_btn" className="btn" onClick={searchHandler}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
}