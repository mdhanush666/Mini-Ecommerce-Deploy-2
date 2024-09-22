
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function Home() {

// when reload navigate to index............
  window.addEventListener('load', function() {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // If the page was reloaded, navigate to a new URL
        window.location.href = "/"; // Change to your desired URL
    }
});


  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);


  //First Load................
  useEffect(() => {
    fetch(`https://mini-ecommerce-backend-three.vercel.app/?` + searchParams)
      .then(res => res.json())
      .then(res => setProducts(res.products))
  }, [searchParams])


  // window scroll bottom..........fetch again.........
  const fetchMoreData = () => {
    setTimeout(()=>{
      axios
      .get(`https://mini-ecommerce-backend-three.vercel.app/?page=${page}`)
      .then((res) => {
        setProducts((prevproducts) => [...prevproducts, ...res.data.products]);

        res.data.products.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setPage((prevpage) => prevpage + 1);
    },1000)
  };

  return <InfiniteScroll
    dataLength={products.length}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={
      <div className={"spinner-grow fade my-5"} role="status">
        <span className={"sr-only"}>Loading...</span>
      </div>
    }
  >

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map((product, index) => <ProductCard product={product} key={index} />)}
      </div>
    </section>
  </InfiniteScroll>
}
