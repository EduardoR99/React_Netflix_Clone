import React, {useState} from "react";
import './style.css'


export const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let X = scrollX + Math.round(window.innerWidth / 2);
        if(X > 0){
            X = 0
        }
        setScrollX(X)
    }

    const handleRightArrow = () => {
        let X = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if(window.innerWidth - listW > X){
            X = (window.innerWidth - listW) - 60;
        }
        setScrollX(X)

    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <span> ⪡	 </span>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <span> 	⪢ </span>
            </div>

            <div className="movieRow--listArea">

                <div className="movieRow--list" style={{
                    marginLeft:scrollX,
                    width:items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}