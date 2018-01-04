import React from 'react'
import Svg from './Svg'
import ColoursList from './ColoursList'

import styled from 'styled-components'
import Row from './styled-components/Row'
import Btn from './styled-components/Btn'

const SectionHeading = styled.h1`
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
`;

const SectionSubheading = styled.h2`
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.1;
    color: inherit;
`;

const TextMuted = styled.p`
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 1.75;
`;

const Design = () => (
    <div>
        <section>
            <Row>
              <div className="col-lg-12 text-center">
                <SectionHeading>Kodes necklaces generator</SectionHeading>
                <SectionSubheading>Customise your Kodes necklace</SectionSubheading>
                <TextMuted>
                  <strong>Click on one or more beads then click on a colour. Move onto a new bead by clicking on it.</strong>
                </TextMuted>
              </div>
            </Row>
            <Row id="svgWrapper">
              <form id="necklaceOrderForm" action="/insert-details" method="post" className="form-horizontal">
                <Row>
                  <div id="test" className="col-sm-6">
                    <Svg />
                  </div>
                  <div className="col-sm-6">
                    <div id="colours">
                      <ColoursList />
                    </div>
                    <Row>
                      <div className="col-lg-12 text-center buttons">
                        <Btn id="downloadThisNecklace" className="btn btn-lg">Download necklace as image</Btn>
                        <Btn id="orderThisNecklace" className="btn btn-lg">Order this necklace</Btn>
                        <Btn id="confirmOrder" className="btn btn-lg">Order custom necklace</Btn>
                      </div>
                    </Row>
                </div>
                </Row>
              </form>
            </Row>
        </section>
    </div>
)

export default Design
