import './style.css'

export const FeaturedMovie = ({item}) => {
    let firstDate = new Date(item.first_air_date)
    let genres= [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    // Limitate Description size
    let desc = item.overview;
    if(desc.length > 200){
        desc = desc.substring(0, 250) + ' ...'
    }

    return(
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--desc'>{desc}</div>
                    <div className='featured--btn'>
                        <a className='btn_I' href={`/watch/${item.id}`}>▷ Assistir</a>
                        <a className='btn_II' href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className='featured--genres'><strong>Gêneros:{genres.join(', ')}</strong></div>
                </div>
            </div>
        </section>
    );
}