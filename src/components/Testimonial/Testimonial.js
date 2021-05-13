import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";

const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://lit-shelf-63973.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    },[])

    const settings = {
        autoplaySpeed: 3000,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        vertical: true,
        centerMode: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container className="text-center" style={{marginTop: '80px'}}>
                <h2 className="mb-5"><span className="coffe-color">/</span> Testimonial</h2>
                <Row>
                    <Slider {...settings}>
                    {
                        reviews.map(review => <TestimonialDetail review={review} key={review.name}> </TestimonialDetail>)
                    }
                    </Slider>
                </Row>
            </Container>
        </>
    );
};

export default Testimonial;