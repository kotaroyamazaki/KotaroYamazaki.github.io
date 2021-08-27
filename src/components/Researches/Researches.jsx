import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Spacer from '../Spacer/Spacer';

const Researches = () => {
  const { researches } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="researches">
      <Container>
        <div className="research-wrapper" >
          <Title title="researches" />
          {researches.map((research) => {
            const { title, data } = research;

            return (
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="research-wrapper__text">
                  <h2 className="research-wrapper__text-title">{title}</h2>
                </div>

                {data && data.map((v, i) => {
                  return (<>
                    <div key={i} className="research-wrapper__text">
                      <p >
                        {v.info}
                      </p>
                    </div>
                    <span className="d-flex flex-row ">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={v.url || '#!'}
                      >
                        Paper
                      </a>

                      {v.slide && (

                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={v.slide}
                        >
                          Slide
                        </a>

                      )}
                    </span>
                    <Spacer size={16} />
                  </>)
                })
                }
                <Spacer size={64} />
              </Fade>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Researches;
