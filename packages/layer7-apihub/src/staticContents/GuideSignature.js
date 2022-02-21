import React from 'react';
import { Link } from 'react-admin';

export const GuideSignature = () => {
    const styles1 = { paddingLeft: '2em' };
    const styles2 = { color: 'darkred' };
    const styles3 = { color: 'cornflowerblue', paddingLeft: '4em' };
    const styles4 = { color: 'darkred', paddingLeft: '4em' };
    const styles5 = { color: 'coral' };
    const styles6 = { color: 'green' };
    const styles7 = { color: 'blueviolet' };
    const styles8 = { color: 'darkblue' };

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
                                    {/*<li><a href="./guideOAuth.html">오픈 API 플랫폼 가이드</a></li>*/}
                                    {/*<li><a href="./guideApiKey.html">API KEY 인증</a></li>*/}
                                    {/*<li><a href="./guideOAuth.html">OAuth2.0 인증</a></li>*/}
                                    {/*<li>데이터 무결성(Signature)</li>*/}
                                    {/*<li><a href="./guideJWE.html">데이터 암복호화(JWE)</a></li>*/}
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
                                    <li>데이터 무결성(Signature)</li>
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
                                <h2>데이터 무결성 검증</h2>
                                <p>
                                    미래에셋증권 오픈 API 는 요청 데이터
                                    무결성을 위하여 요청 정보에 대한 Signature
                                    Hash 값을 생성하여 검증합니다.
                                    <br />
                                    이용기관에서 API 호출시 요청 URL 및
                                    인증정보, 요청일시, HTTP Body 등에 대한
                                    Signature 를 생성하여 HTTP Header 에
                                    전달해야합니다. <br />
                                    미래에셋 대우 오픈 API 서버에서는 요청
                                    정보에 대한 Signature 를 생성하여
                                    이용기관에서 전달한 Signature 를 비교
                                    검증합니다.
                                    <br />
                                    <br />
                                    Signature Hash 사용 알고리즘은{' '}
                                    <code>HMAC-SHA256</code> 입니다.
                                    <br />
                                    HMAC-SHA256 표준스펙{' '}
                                    <a
                                        target="_blank"
                                        href="https://tools/ietf.org/html/rfc4868"
                                        rel="noopener noreferrer"
                                    >
                                        [RFC4868]
                                    </a>
                                    <br />
                                </p>
                            </section>
                            <section>
                                <h2>Signature Hash</h2>
                                <p>
                                    <b>Base64 ( HMAC ( 대칭키, Input ) )</b>
                                    <br />
                                    ※ HMAC shared key(대칭키) 는 개발자 포털에서
                                    App 등록시 API Key와 같이 발급된 Client
                                    Secret 값 또는 담당자에 의해 별도로 발급된
                                    값 (256 bits / 32 characters)
                                    <br />
                                    ※ OAuth 2.0 access token / apikey 인증과
                                    함께 사용됩니다.
                                    <br />
                                    <br />
                                    <span className="image fit">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                'images/content_signature_001.png'
                                            }
                                            alt=""
                                        />
                                    </span>
                                </p>
                                {/*<p>*/}
                                오픈 API 호출시 HTTP Header에 Signature Hash
                                값을 생성하여 전달합니다.
                                <br />* HTTP Header Parameter :{' '}
                                <code>x-md-signature</code>
                                <br />* 대상 컨텐츠 (서명 대상 문자열 구성) :
                                HTTP Method, 요청 URI, 요청일시, 인증토큰, HTTP
                                Body 등
                                <div className="table_area ">
                                    <table
                                        border="0"
                                        cellSpacing="0"
                                        cellPadding="0"
                                    >
                                        <thead>
                                            <tr className="head">
                                                <th width="20%" scope="col">
                                                    항목
                                                </th>
                                                <th scope="col">설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">
                                                    <code>x-md-signature</code>
                                                </td>
                                                <td className="align-left">
                                                    Base64 ( HMAC (
                                                    <code>Shared Secret</code>,{' '}
                                                    <code>StringToSign</code> )
                                                    )
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>Shared Secret</code>
                                                </td>
                                                <td className="align-left">
                                                    개발자 포탈에서 발급된 32
                                                    bytes 값
                                                    <br />
                                                    <em>
                                                        예)
                                                        63871109f9f9************************
                                                    </em>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>StringToSign</code>
                                                </td>
                                                <td className="align-left">
                                                    <code>HTTP-Method</code> +
                                                    “&” +{' '}
                                                    <code>Request-URI</code> +
                                                    "&" + <code>x-md-date</code>{' '}
                                                    + "&" + <code>인증값</code>+
                                                    "&" +{' '}
                                                    <code>
                                                        base64(hash(body))
                                                    </code>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>HTTP-Method</code>
                                                </td>
                                                <td className="align-left">
                                                    <code>GET</code>
                                                    <code>POST</code>
                                                    <code>PUT</code>
                                                    <code>DELETE</code>
                                                    <br />
                                                    <em>예) GET</em>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>Request-URI</code>
                                                </td>
                                                <td className="align-left">
                                                    URL 에서 http Scheme 및
                                                    도메인을 제외한 "/" 로
                                                    시작하는 URI Path + Query
                                                    Parameter 부분 전체
                                                    <br />
                                                    Value 는 non-ASCII 또는 URL
                                                    reserved 문자가 포함되어
                                                    있을 경우{' '}
                                                    <code>
                                                        URL Encoding (UTF-8)
                                                    </code>
                                                    <br />
                                                    <em>
                                                        예)
                                                        /apis/acct/v1/list?p1=%ED%95%9C%EA%B8%80
                                                    </em>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>x-md-date</code>
                                                </td>
                                                <td className="align-left">
                                                    요청 header 의{' '}
                                                    <code>x-md-date</code> 값
                                                    (yyyyMMddHHmmss) KST 기준
                                                    <br />
                                                    <em>예) 20200401163242</em>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>인증값</code>
                                                </td>
                                                <td className="align-left">
                                                    OAuth 2.0 인증 API 의 경우
                                                    access token
                                                    <br /> API Key 인증 API 의
                                                    경우 apikey
                                                    <br />
                                                    <em>
                                                        예)
                                                        0c25605c-50d2-492f-9cef-adaa208f4ca5
                                                    </em>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="row">
                                                    <code>
                                                        base64(hash(body))
                                                    </code>
                                                </td>
                                                <td className="align-left">
                                                    <code>
                                                        Base64 ( SHA256 ( HTTP
                                                        Body ) )
                                                    </code>{' '}
                                                    Hash 값 (HMAC 아님)
                                                    <br />
                                                    - HTTP Body 는 Hash 계산전에
                                                    UTF-8 변환
                                                    <br />
                                                    - GET/DELETE 의 경우 empty
                                                    body ("") 에 대한 Hash 값
                                                    사용
                                                    <br />
                                                    - 실제 요청 Body 와 일치
                                                    해야함 (/r/n, /n, /r 의 실제
                                                    byte 코드 값이 상이함)
                                                    <br />
                                                    <em>
                                                        예)
                                                        47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=
                                                    </em>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*</p>*/}
                                <h3>[예시]</h3>
                                <pre>
                                    <code>
                                        curl -X GET
                                        'https://dev-openapi.securities.miraeasset.com:8443/apis/acct/v1/list?p1=%ED%95%9C%EA%B8%80'
                                        \ --header 'x-md-txid:
                                        7f15ba3a-2ea1-4322-834a-8e00878a39c7' \
                                        --header 'x-md-date: 20200401163242' \
                                        --header 'x-md-ctype: json' \ --header
                                        'Authorization: Bearer
                                        0c25605c-50d2-492f-9cef-adaa208f4ca5' \
                                        --header 'x-md-signature:
                                        Wc0I4C+qXWtU86Gj3vtlUyPVxlcRlZ/A8yygkxXm1t4='
                                    </code>
                                </pre>
                                <p>
                                    <code>x-md-signature</code>
                                    <br />
                                    <span style={styles1}>
                                        = Base64 ( HMAC ({' '}
                                        <span style={styles2}>
                                            <code>Shared Secret</code>
                                        </span>
                                        , <code>StringToSign</code> ) )<br />
                                        <span style={styles1}>
                                            = Base64 ( HMAC ({' '}
                                        </span>
                                        <span style={styles2}>
                                            63871109f9f9************************
                                        </span>
                                        , "<br />
                                        <span style={styles3}>
                                            <code>HTTP-Method</code>
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles5}>
                                            <code>Request-URI</code>
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles6}>
                                            <code>x-md-date</code>
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles7}>
                                            <code>Access Token</code>
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles8}>
                                            <code>base64(hash(body))</code>
                                        </span>
                                        <br />
                                        <span style={styles1}>" ) )</span>
                                        <br />
                                        <span style={styles1}>
                                            = Base64 ( HMAC ({' '}
                                        </span>
                                        <span style={styles2}>
                                            63871109f9f9************************
                                        </span>
                                        , "<br />
                                        <span style={styles3}>GET</span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles5}>
                                            /apis/acct/v1/list?p1=%ED%95%9C%EA%B8%80
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles6}>
                                            20200401163242
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles7}>
                                            0c25605c-50d2-492f-9cef-adaa208f4ca5
                                        </span>
                                        <br />
                                        <span style={styles4}>&</span>
                                        <span style={styles8}>
                                            47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=
                                        </span>
                                        <br />
                                        <span style={styles1}>" ) )</span>
                                        <br />
                                        <span style={styles1}>
                                            ={' '}
                                            <strong>
                                                Wc0I4C+qXWtU86Gj3vtlUyPVxlcRlZ/A8yygkxXm1t4=
                                            </strong>
                                        </span>
                                    </span>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
