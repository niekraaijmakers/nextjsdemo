import React from 'react';

import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}):JSX.Element {
  return (
    <section className={"hero-post"}>
      <div className="top-img">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="hero-text">

        <Container>
          <Row>
            <Col xs={6} md={10}>

              <div>
                <h3>
                  <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a>{title}</a>
                  </Link>
                </h3>
                <div className="date">
                  <Date dateString={date} />
                </div>
              </div>
              <p className="leadingtext">{excerpt}</p>
            </Col>
            <Col  xs={6}  md={2}>
              <Avatar name={author.name} hideName={true} picture={author.picture.url} />
            </Col>
          </Row>


        </Container>
      </div>
    </section>
  )
}
