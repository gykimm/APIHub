import React from 'react';
import { Link } from 'react-admin';

export const GuideApiKey = () => {
    return (
        <div>
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/skel.css"/>*/}
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/style.css"/>*/}
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/style-xlarge.css"/>*/}
            <link
                rel="stylesheet"
                href={process.env.PUBLIC_URL + '/css/skel.css'}
            />
            <link
                rel="stylesheet"
                href={process.env.PUBLIC_URL + '/css/style.css'}
            />
            <link
                rel="stylesheet"
                href={process.env.PUBLIC_URL + '/css/style-xlarge.css'}
            />

            <section id="main" className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="2u">
                            <section className="left_nav">
                                <ul className="alt">
                                    {/*<li><a href="./guideOpenAPI.html">오픈 API 플랫폼 가이드</a></li>*/}
                                    {/*<li>API Key 인증</li>*/}
                                    {/*<li><a href="./guideOAuth.html">OAuth2.0 인증</a></li>*/}
                                    {/*<li><a href="./guideSignature.html">데이터 무결성(Signature)</a></li>*/}
                                    {/*<li><a href="./guideJWE.html">데이터 암복호화(JWE)</a></li>*/}
                                    <li>
                                        <Link to="guideOpenAPI">
                                            오픈 API 플랫폼 가이드
                                        </Link>
                                    </li>
                                    <li>API KEY 인증</li>
                                    <li>
                                        <Link to="guideOAuth">
                                            OAuth2.0 인증
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="guideSignature">
                                            데이터 무결성(Signature)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="guideJWE">
                                            데이터 암복호화(JWE)
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="8u skel-cell-important">
                            <section>
                                <h2>API Key 인증</h2>
                                <p>
                                    미래에셋증권 오픈 API 는 API Key를 통해
                                    API를 인증할 수 있습니다. <br />
                                    API Key는 오픈 API 개발자 포탈에서 등록된
                                    APP을 통해 확인 할 수 있습니다.
                                </p>
                            </section>
                            <section>
                                <h2>API Key 인증</h2>
                                <p>
                                    오픈 API 접근에 사용되는 API Key를 통해
                                    미래에셋증권에서 제공하는 API 호출을
                                    수행하는 흐름입니다.
                                    <br />
                                    클라이언트는 API Key를 헤더에 추가하여 API를
                                    호출합니다. <br />
                                    API Gateway 서버는 API Key를 추출하고 API
                                    Key를 인증 합니다. API Key 에 따라 호출할 수
                                    있는 API 인지 확인합니다.
                                    <br />
                                    오픈 API 는 이용기관 서버와 직접 연동됩니다.
                                    (서버 to 서버 통신 기반으로 IP 검증)
                                </p>
                                <h4>전체 흐름</h4>
                                <span className="image">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            '/images/content_oauth_004.png'
                                        }
                                        alt=""
                                    />
                                </span>
                                {/*</p>*/}
                                <p>
                                    <b>- HTTP Header (header key = “apikey”)</b>
                                    <br />
                                    <br />
                                    &nbsp; ex) apikey:
                                    l7xx04b41144520148ae8d18283f2e9acf6a
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
