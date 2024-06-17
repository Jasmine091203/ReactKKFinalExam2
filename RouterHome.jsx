// import { Link } from 'react-router-dom';
import React from 'react';
import { useLoaderData } from "react-router-dom"
import ResultsList from './ResultsList';
const RouterHome = () => {
    const results = useLoaderData();
    return (
        <div>
            <section>
                <h3>歡迎來到海外留學資訊平台</h3>
                <p>我們致力於提供最新、最全面的海外留學資訊，幫助您找到最適合的學校和課程。</p>
                <ResultsList results={results} />
                <h3>豐富的學校數據</h3>
                <p>我們的資料庫包含全球各地的數千所學校，提供詳細的學校信息和評價。</p>
                <h3>個性化推薦</h3>
                <p>根據您的需求和偏好，我們提供個性化的學校和課程推薦，幫助您做出最佳選擇。</p>
                <h3>專業的移民資訊</h3>
                <p>我們提供詳盡的移民指南和建議，幫助您順利移民並適應新的學習環境。</p>
                
            </section>
        </div>

    );
}
export default RouterHome;
export const ResultsLoader = async () => {

    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-colleges-and-universities/records?limit=20");

    if (!response.ok) {
        return { isErrored: true, message: "取得資料發生錯誤...", }
    } else {

        const data = await response.json();
        return data.results;
    }
};