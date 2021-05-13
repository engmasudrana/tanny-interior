import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import axios from "axios";

const Review = () => {
    const { register, handleSubmit } = useForm();
    const [imageLink, setImageLink] = useState(null)

    // handle image upload
    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb')
        imageData.append('image', event.target.files[0])

        axios.post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageLink(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Add Review
    const onSubmit = data => {
        if (imageLink !== null) {
            const reviewData = data;
            reviewData.image = imageLink;
            fetch('https://lit-shelf-63973.herokuapp.com/addReview', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(reviewData)
            })
                .then(res => res.json())
                .then(data = alert('review added successfully'))
        }
        else {
            alert('Image is uploading , Please wait')
        }
    };

    return (
        <>
            <Container className="text-center p-5 mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="p-5 m-auto rounded card">
                        <h2 className="text-center mb-4 text-secondary">Add Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" placeholder="Your Name" {...register("name")} /> <br/>
                            <input className="form-control" placeholder="Company's Name or Designation" {...register("designation")} /> <br/>
                            <textarea className="form-control" placeholder="Description" {...register("des")} /> <br/>
                            <input className="btn btn-light btn-block" type="file" name="image" onChange={handleImageUpload} /> <br /> <br />
                            <input className="btn btn-secondary btn-block" type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Review;