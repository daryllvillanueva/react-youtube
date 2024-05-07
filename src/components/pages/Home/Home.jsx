import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer';
import Video from '../Video/Video';
import SideBar from './SideBar';
import {topLiveGames, videos } from '../Video/data';
import TopLiveGames from '../Video/TopLiveGames';
import Shorts from '../Video/Shorts';


const Home = () => {
  const [menuTab, setMenuTab] = React.useState('all');
  const handleChangeMenu = (menu) => {
    setMenuTab(menu)
  }
  return (
    <>
      <Header/>
      <div className="h-full bg-[#0f0f0f] pt-[60px]">
        <div className="px-6 grid grid-cols-[12%_1fr] gap-5">
          <aside className='flex flex-col gap-3 text-white py-4'>
            <SideBar/>
            <Footer/>
          </aside>
          <main className='pb-4'> 
            <div className='category pt-4 px-4 pb-3 bg-[#0f0f0f] fixed z-[999]'>
              <ul className='flex gap-4 text-white items-center flex-wrap whitespace-nowrap'>
                <li><button className={`${menuTab === "all" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("all")}>All</button></li>
                <li><button className={`${menuTab === "music" ? "bg-[#f1f1f1] text-[#0f0f0f]" : "bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("music")}>Music</button></li>
                <li><button className={`${menuTab === "gaming" ? "bg-[#f1f1f1] text-[#0f0f0f]" : "bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("gaming")}>Gaming</button></li>
                <li><button className={`${menuTab === "playlists" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("playlists")}>Playlists</button></li>
                <li><button className={`${menuTab === "news" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("news")}>News</button></li>
                <li><button className={`${menuTab === "slamdunks" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("slamdunks")}>Slam dunks</button></li>
                <li><button className={`${menuTab === "live" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("live")}>Live</button></li>
                <li><button className={`${menuTab === "melodramas" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("melodramas")}>Melodramas</button></li>
                <li><button className={`${menuTab === "restaurants" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("restaurants")}>Restaurants</button></li>
                <li><button className={`${menuTab === "varietyshows" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("varietyshows")}>Variety shows</button></li>
                <li><button className={`${menuTab === "manga" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("manga")}>Manga</button></li>
                <li><button className={`${menuTab === "kpop" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("kpop")}>K-Pop</button></li>
                <li><button className={`${menuTab === "gadgets" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("gadgets")}>Gadgets</button></li>
                <li><button className={`${menuTab === "instrumentals" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("instrumentals")}>Instrumentals</button></li>
                <li><button className={`${menuTab === "animatedfilms" ? "bg-[#f1f1f1] text-[#0f0f0f]" : " bg-[#ffffff1a]"}`} onClick={() => handleChangeMenu("animatedfilms")}>Animated films</button></li>
              </ul>
            </div>
            {menuTab === "all" && <Video videos={videos} grouping="all"/>}
            {menuTab === "music" && (<><Video videos={videos} grouping="music" sliderHeader="Top Music"/><TopLiveGames/></>)}
            {menuTab === "gaming" && (
              <>
                <Video videos={videos} topLiveGames={topLiveGames} grouping="gaming" sliderHeader="Top Games"/>
                <TopLiveGames/>
              </>
            )} 

            <Shorts/>

                    
            
          </main>
        </div>
      </div>
      
      
    </>
  )
}

export default Home


