import React from 'react';
import { Link } from 'react-admin';

export const GuideJWE = () => {
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
                                    {/*<li><a href="./guideApiKey.html">API KEY 인증</a></li>*/}
                                    {/*<li><a href="./guideOAuth.html">OAuth2.0 인증</a></li>*/}
                                    {/*<li><a href="./guideSignature.html">데이터 무결성(Signature)</a></li>*/}
                                    {/*<li>데이터 암복호화(JWE)</li>*/}
                                    <li>
                                        <Link to="guideOpenAPI">
                                            오픈 API 플랫폼 가이드
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="guideApiKey">
                                            API KEY 인증
                                        </Link>
                                    </li>
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
                                    <li>데이터 암복호화(JWE)</li>
                                </ul>
                            </section>
                        </div>
                        <div className="8u skel-cell-important">
                            <section>
                                <h2>메시지 암복호화</h2>
                                <p>
                                    미래에셋증권 오픈 API 는 메시지 보안을 위해
                                    요청/응답 Body 에 암호화된 메시지를 주고
                                    받습니다.
                                    <br />
                                    암호화는 Body 전체에 대한 수행하며, JWE
                                    (JSON Web Encryption) 기반으로 작성되어
                                    있습니다. <br />
                                    JWE 는 JWT (JSON Web Token) 기반의 암호화
                                    스펙으로 Signature 가 포함되지 않고 암호화
                                    기능만 사용합니다.
                                    <br />
                                    <br />
                                    JWT (JSON Web Token) 표준스펙{' '}
                                    <a
                                        target="_blank"
                                        href="https://tools/ietf.org/html/rfc7516"
                                        rel="noopener noreferrer"
                                    >
                                        [RFC7516]
                                    </a>
                                    <br />
                                    JWE (JSON Web Encryption) 표준스펙{' '}
                                    <a
                                        target="_blank"
                                        href="https://tools/ietf.org/html/rfc7519"
                                        rel="noopener noreferrer"
                                    >
                                        [RFC7519]
                                    </a>
                                </p>
                            </section>
                            <section>
                                {/*사용자 인증용 Grant Type*/}
                                <h2>JSON Web Encryption</h2>
                                <p>
                                    요청 Body 전체에 대한 대칭키 또는 비대칭키
                                    방식 알고리즘(Key Management Algorithm) 을
                                    기반으로 JWE를 생성하여 API 호출시 Body
                                    컨텐츠에 사용합니다. 응답은 요청과 다르게
                                    대칭키 방식 알고리즘(Key Management
                                    Algorithm)만을 사용하여 생성한 JWE 를
                                    전달합니다. <br />
                                </p>
                                <h3>비대칭키 방식</h3>
                                미래에셋증권 OpenAPI 플랫폼에서 제공한 JWE용
                                Public Key를 사용하여 JWE 를 생성하고,
                                미래에셋증권에서 Private Key 로 JWE 복호화를
                                합니다.
                                <br />
                                <br />
                                <h3>대칭키 방식</h3>
                                동일 키를 사용한 암호화 (Portal을 통해 발급된
                                Client Secret 기반)
                                <br />
                                <div className="table_area ">
                                    <table
                                        border="0"
                                        cellSpacing="0"
                                        cellPadding="0"
                                    >
                                        <thead>
                                            <tr className="head">
                                                <th scope="col">Item</th>
                                                <th scope="col">Value</th>
                                                <th width="40%" scope="col">
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">JWE Payload</td>
                                                <td>Body</td>
                                                <td>
                                                    HTTP Body 가 있는 요청/응답
                                                    Body message 전체
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    JWE Key Management Algorithm
                                                    (“alg”) - 대칭키
                                                </td>
                                                <td>
                                                    <code>dir</code>
                                                </td>
                                                <td>
                                                    Direct use of a shared
                                                    symmetric
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    JWE Key Management Algorithm
                                                    (“alg”) - 비대칭키
                                                </td>
                                                <td>
                                                    <code>RSA-OAEP</code>
                                                    <br />
                                                    <code>RSA-OAEP-256</code>
                                                </td>
                                                <td>RSA 비대칭키 알고리즘</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    JWE Content Encryption
                                                    Algorithm (“enc”)
                                                </td>
                                                <td>
                                                    <code>A128CBC-HS256</code>
                                                </td>
                                                <td>AES_128-CBC_HMAC_SHA256</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    HMAC Shared Key - 대칭키
                                                </td>
                                                <td>
                                                    <code>key secret</code>
                                                </td>
                                                <td>
                                                    오픈 API 개발자 포탈에서 APP
                                                    등록시 생성
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    HMAC Shared Key - 비대칭키
                                                </td>
                                                <td>
                                                    Public Key (Certificate)
                                                </td>
                                                <td>
                                                    미래에셋증권 담당자로부터
                                                    전달받은 PEM 파일로,
                                                    개발/운영환경 별로 상이하며
                                                    SSL 인증서와는 상이함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    JWE Serialization
                                                </td>
                                                <td>Compact Serialization</td>
                                                <td>
                                                    [Protectd Header].[Encrypted
                                                    Key].[Initialization
                                                    Vector].[Ciphertext].[Authentication
                                                    Tab]
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                                <p>
                                    ※ JWE 를 사용하기 위한 오픈소스 라이브러리는{' '}
                                    <a
                                        target="_blank"
                                        href="https://jwto.io"
                                        rel="noopener noreferrer"
                                    >
                                        [jwt.io]
                                    </a>{' '}
                                    에서 확인하실 수 있습니다.
                                    <br />
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
