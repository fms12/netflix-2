import React, { useEffect, useState } from 'react'
import "./MyList.css"
import Nav from '../Nav/Nav'
import { useSelector, useDispatch } from "react-redux";
import Cards from '../Card/Cards';
import { updateMovieList } from '../../utils/listSlice';

function MyList() {
     const dispatch = useDispatch();
    const moiveList = useSelector((store)=> store.list.lists)
       useEffect(() => {
         const storedMovieList = localStorage.getItem("movieList");
         if (storedMovieList) {
           dispatch(updateMovieList(JSON.parse(storedMovieList)));
         }
       }, [dispatch]);

       // Update local storage whenever movie list changes
       useEffect(() => {
         localStorage.setItem("movieList", JSON.stringify(moiveList));
       }, [moiveList]);

  return (
    <div className="list">
      <Nav />
      <div className="list__content">
        <h1>My List</h1>
        <div className="list__grid">
          {moiveList.map((list) => (
            <Cards key={list.id} data={list}  isLiked ={true}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyList