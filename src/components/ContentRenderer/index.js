import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Wrapper from './Wrapper';
import no_img from 'images/no_img.png';

const poster_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
const backdrop_url = 'https://image.tmdb.org/t/p/w1400_and_h450_face/';
const ContentRenderer = (props) => {
    const holder = props.data.results;
    const render = holder.map((data) => {
        const {
            vote_count,
            id,
            video,
            vote_average,
            title,
            popularity,
            poster_path,
            original_language,
            original_title,
            genre_ids,
            backdrop_path,
            adult,
            overview,
            release_date,
        } = data;

        return (
            <Wrapper
                backdrop={
                    backdrop_path !== null
                        ? backdrop_url + backdrop_path
                        : no_img
                }
                key={id}>
                <div className='video mg'>
                    <button
                        type='button'
                        onClick={() =>
                            alert(
                                video
                                    ? 'Check this Video'
                                    : ' No Video available',
                            )
                        }>
                        {video ? 'Check this Video' : '  No Video available'}
                    </button>
                </div>
                <div className='adult mg'>Age for {adult ? '19+' : 'All'}</div>
                <div className='poster mg'>
                    {poster_path !== null ? (
                        <img src={poster_url + poster_path} alt='poster' />
                    ) : (
                        <img src={no_img} alt='No img' />
                    )}
                </div>
                <div className='title mg'>
                    <b>{title}</b>({release_date})
                </div>
                <div className='popularity mg'>Popularity : {popularity}</div>
                {/* <div className='original_title'> ({original_title})</div> */}
                <div className='vote_average mg'>
                    Score
                    <CircularProgressbar
                        percentage={vote_average * 10}
                        text={`${vote_average * 10}%`}
                        // background={true}
                        styles={{
                            // Customize the root svg element
                            root: {},
                            // Customize the path, i.e. the "completed progress"
                            path: {
                                // Path color
                                stroke: `rgba(75,243,33, ${(vote_average * 10) /
                                    100})`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Customize transition animation
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                                // Trail color
                                stroke: '#d6d6d600',
                            },
                            // Customize the text
                            text: {
                                // Text color
                                fill: '#4bf321e6',
                                // Text size
                                fontSize: '33px',
                                fontweight: 'bold',
                            },
                            // Customize background - only used when the `background` prop is true
                            background: {
                                fill: '#3432e6',
                            },
                        }}
                    />
                    attended <b>{vote_count} for vote this moive!</b>
                </div>
                <div className='original_language mg'>
                    Language: <b>{original_language}</b>
                </div>
                {/* <div className='genre_ids'>{genre_ids}</div> */}
                <div className='overview mg'>
                    <b>OVERVIEW</b>
                    <br />
                    <br />
                    {overview}
                </div>
            </Wrapper>
        );
    });
    return render;
};

ContentRenderer.propTypes = {
    vote_count: PropTypes.string,
    id: PropTypes.string,
    video: PropTypes.string,
    vote_average: PropTypes.string,
    title: PropTypes.string,
    popularity: PropTypes.string,
    poster_path: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    genre_ids: PropTypes.string,
    backdrop_path: PropTypes.string,
    adult: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
};

ContentRenderer.defaultProps = {
    vote_count: '',
    id: '',
    video: '',
    vote_average: '',
    title: '',
    popularity: '',
    poster_path: '',
    original_language: '',
    original_title: '',
    genre_ids: '',
    backdrop_path: '',
    adult: '',
    overview: '',
    release_date: '',
};

export default ContentRenderer;
