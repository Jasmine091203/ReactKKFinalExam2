import { Link } from 'react-router-dom';
import React from 'react';
import { useLoaderData } from "react-router-dom"
import ResultsList from './ResultsList';
// import ResultsListTwo from './ResultsListTwo';
import classes from "./MainNavLink.module.css";
const RouterHome = () => {
    const results = useLoaderData();
    return (
        <div>
            <section>
                <div>
                    <h3>歡迎來到海外留學資訊平台</h3>
                    <p>我們致力於提供最新、最全面的海外留學資訊，幫助您找到最適合的學校和課程。</p>
                    <img src='https://lh6.googleusercontent.com/-QjIJxpOACX8/T3VKDdgnAJI/AAAAAAACC6c/5e037aJ87Qg/s1600/IMG_8498.jpg' alt="Immigration Data" className={classes.imageWrapper3}></img>
                </div>
                <div>
                    <h3>豐富的學校數據</h3>
                    <p>我們的資料庫包含美國各地的數百所學校，提供詳細的學校信息。</p>
                    <div className={classes.grid}>
                        <div className={classes.item}>
                            <Link to="/university">
                                <img src="https://th.bing.com/th/id/OIP.9a0s2KtdcZg35x9YB3cbEwAAAA?w=250&h=188&c=7&r=0&o=5&dpr=1.9&pid=1.7" alt="University School Data" className={classes.imageWrapper2}></img>
                            </Link>
                            <h2>US University<br />美國大學</h2>
                        </div>
                        <div className={classes.item}>
                            <Link to="/highSchool" >
                                <img src="https://th.bing.com/th/id/OIP.sUhYwPsfrrlfboqz42O7-AHaE7?w=292&h=194&c=7&r=0&o=5&dpr=1.9&pid=1.7" alt="US Data" className={classes.imageWrapper2}></img>
                            </Link>
                            <h2>赴美讀書<br />移民到美國</h2>
                        </div>

                    </div>
                </div>
                <div>
                    <h3>個性化推薦</h3>
                    <p>根據您的需求和偏好，我們提供個性化的學校和課程推薦，幫助您做出最佳選擇。</p>
                    <ResultsList results={results} />
                    {/* <ResultsListTwo results={results}/> */}
                </div>
            </section>
        </div>

    );
}
export default RouterHome;
export const ResultsLoader = async () => {

    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-colleges-and-universities/records?limit=100");
    if (!response.ok) {
        return { isErrored: true, message: "取得資料發生錯誤...", }
    } else {

        const data = await response.json();
        return data.results;
    }
};