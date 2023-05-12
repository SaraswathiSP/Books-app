import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>In the realm of words and boundless thought,
Lies a world unseen, within books sought.
With pages filled, a treasure trove,
A poet's heart, a reader's love.

In libraries old, where wisdom rests,
And shelves adorned, with literary quests.
Each book a journey, a story untold,
Unfolding secrets, as time unfolds.

</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header