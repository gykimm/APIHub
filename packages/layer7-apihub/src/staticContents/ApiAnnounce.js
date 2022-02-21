import React from 'react';
import { Link } from 'react-admin';

export const ApiAnnounce = () => {
    return (
        <div>
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/skel.css"/>*/}
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/style.css"/>*/}
            {/*<link rel="stylesheet" href="https://developers.securities.miraeasset.com/pages/assets/css/style-xlarge.css"/>*/}
            {/*<img src={process.env.PUBLIC_URL + '/images/content_oauth_004.png'} alt="" />*/}
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

            <section className="wrapper style3 special">
                <div className="container">
                    <header className="major">
                        <h2>제공 API</h2>
                        <p>
                            미래에셋증권에서 제공하는 오픈 API 는 아래와
                            같습니다.
                        </p>
                    </header>
                </div>

                <div className="container">
                    <div className="tab_area">
                        <ul className="col03">
                            <li>
                                {/*<a href="./memberAnnounce.html">회원 가입 안내</a>*/}
                                <Link to="memberAnnounce">회원 가입 안내</Link>
                            </li>
                            <li>
                                {/*<a href="./processAnnounce.html">플랫폼 이용 절차</a>*/}
                                <Link to="processAnnounce">
                                    플랫폼 이용 절차
                                </Link>
                            </li>
                            <li className="on">
                                {/*<a href="#" title="선택됨">제공 API</a>*/}
                                <a title="선택됨">제공 API</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="process_area">
                        <ul>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">01</span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>계좌조회</dt>
                                        <dd>
                                            미래에셋증권 일반 사용자의 계좌를
                                            조회합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">02</span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>거래내역 조회</dt>
                                        <dd>
                                            미래에셋증권 일반 사용자의
                                            거래내역를 조회합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">03</span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>관심종목 조회</dt>
                                        <dd>
                                            미래에셋증권 일반 사용자의
                                            관심종목을 조회합니다.
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">04</span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>해외주식 거래</dt>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                            <li>
                                <div className="ico_wrap">
                                    <span className="num">05</span>
                                </div>
                                <div className="txt_wrap">
                                    <dl>
                                        <dt>국내주식 거래</dt>
                                        <dd></dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};
