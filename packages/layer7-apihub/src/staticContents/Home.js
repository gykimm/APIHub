import React from 'react';
import { Link } from 'react-admin';

export const Home = () => {
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
            <section id="banner">
                <h2>오픈 API를 통한 새로운 비즈니스 창출</h2>
                <p>
                    미래에셋증권 Open API 플랫폼은 다양하고 가치있는 데이터 및
                    서비스에 접근할 수 있는 API를 제공합니다.
                </p>
            </section>
            <section id="one" className="wrapper style1 special">
                <div className="container">
                    <header className="notice">
                        <h2>How To Use</h2>
                    </header>
                    <section>
                        <div className="row">
                            <section className="4u 12u$(medium) 12u$(xsmall) announce">
                                <img src="https://developers.securities.miraeasset.com/pages/assets/img/icon_02.png" />
                                <dl>
                                    <h3>회원 가입</h3>
                                    <p>
                                        개발자는 플랫폼 이용을 위해 사이트
                                        가입이 필요 합니다.{' '}
                                    </p>
                                    {/*<dd><a href="./memberAnnounce.html" className="button small">가입 안내</a></dd>*/}
                                    <dd>
                                        <Link
                                            to="/memberAnnounce"
                                            className="button small"
                                        >
                                            가입 안내
                                        </Link>
                                    </dd>
                                </dl>
                            </section>
                            <section className="4u 12u$(medium) 12u$(xsmall) announce">
                                <img src="https://developers.securities.miraeasset.com/pages/assets/img/icon_01.png" />
                                <dl>
                                    <h3>이용절차 안내</h3>
                                    <p>
                                        이용기관에서 API를 이용하기 위한 필요한
                                        절차를 안내 합니다.{' '}
                                    </p>
                                    {/*<dd><a href="./processAnnounce.html" className="button small">플랫폼 이용절차</a></dd>*/}
                                    <dd>
                                        <Link
                                            to="/processAnnounce"
                                            className="button small"
                                        >
                                            플랫폼 이용절차
                                        </Link>
                                    </dd>
                                </dl>
                            </section>
                            <section className="4u 12u$(medium) 12u$(xsmall) announce">
                                <img src="https://developers.securities.miraeasset.com/pages/assets/img/icon_03.png" />
                                <dl>
                                    <h3>제공 API</h3>
                                    <p>
                                        이용기관에서 사용할 수 있는 오픈 API 를
                                        소개합니다.{' '}
                                    </p>
                                    {/*<dd><a href="./apiAnnounce.html" className="button small">제공 API 목록</a></dd>*/}
                                    <dd>
                                        <Link
                                            to="/apiAnnounce"
                                            className="button small"
                                        >
                                            제공 API 목록
                                        </Link>
                                    </dd>
                                </dl>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
            <section id="two" className="wrapper style2 special">
                <div className="container">
                    <div className="row">
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <img src="https://developers.securities.miraeasset.com/pages/assets/img/icon_04.png" />
                                <h3>API로 비즈니스 성장</h3>
                                <p>
                                    API를 신속하게 작성하고 API 관리를 단순화
                                    하여 기업의 서비스 개발을 위한 속도와
                                    민첩성을 향상할 수 있습니다.
                                </p>
                            </section>
                        </div>
                        <div className="4u 12u$(medium)">
                            <section className="box">
                                <img src="https://developers.securities.miraeasset.com/pages/assets/img/icon_05.png" />
                                <h3>안전한 서비스를 보다 빠르게 제공</h3>
                                <p>
                                    기업의 경쟁력을 유지하기 위해 디지털
                                    비즈니스를 구축해야 구축 합니다. 오픈 API
                                    플랫폼은 API의 보안을 유지하면서 새로운
                                    디지털 서비스를 시작하는 기능을 제공합니다.
                                </p>
                            </section>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <section className="box">
                                <img src="https://developers.securities.miraeasset.com/pages/assets/img/icon_06.png" />
                                <h3>고객 경험 강화</h3>
                                <p>
                                    고객 경험을 개선하고 옴니 채널 전략을
                                    지원하기 위해 향상된 API 관리 및 Application
                                    테스트 기능을 통해 이러한 목표를 달성할 수
                                    있습니다.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section id="three" className="wrapper style1 special">
                <div className="container">
                    <header className="notice">
                        <h2>오픈 API 사용 가이드</h2>
                        <p>
                            오픈 API 를 사용하기 위한 인증 및 보안 정책을 확인
                            하세요.
                        </p>
                        <ul className="actions">
                            {/*<li><a href="./guideOpenAPI.html" className="button big special">바로 가기</a></li>*/}
                            <li>
                                <Link
                                    to="/guideOpenAPI"
                                    className="button big special"
                                >
                                    바로 가기
                                </Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </section>
        </div>
    );
};
