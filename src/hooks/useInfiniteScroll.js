// import { useCallback, useEffect, useRef, useState,RefObject } from "react";

// function useInfiniteScroll(target.current) {
//   const [intersecting, setIntersecting] = useState(false)
//   const observeRef = useRef(null);

//   const getObserver = useCallback(()=>{
//     if(!observeRef.current){
//       observeRef.current = new IntersectionObserver((entries) => {
//         setIntersecting(entries.some((entry)=> entry.isInterSecting))
//       })
//     }
//     return observeRef.current
//   }, [observeRef.current])

//   useEffect(()=>{
//     if(target.current){
//       getObserver().observe(target.current);
//     }
//   })

// }
