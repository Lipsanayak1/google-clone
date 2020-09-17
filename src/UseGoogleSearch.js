// import { useState, useEffect } from "react";
// import API_KEY from "./keys";

// const CONTEXT_KEY = "df610d6a036ac4d2a";
// //creating custom hook
// const UseGoogleSearch = (term) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//       )
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result);
//         });
//     };
//     fetchData();
//   }, [term]);
//   return { data };
// };

// export default UseGoogleSearch;
import { useState, useEffect } from "react";

const CONTEXT_KEY = "3b7d248ed38f2a460";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAsxbk97IUSpBNQ6K5KhCxgq187amii0X0&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
