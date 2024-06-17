import React from 'react';
import ReactECharts from 'echarts-for-react';

const ResultsList = ({ results }) => {
    // 計算每個 county 的數量
    const countryCount = results.reduce((acc, result) => {
        acc[result.naics_desc] = (acc[result.naics_desc] || 0) + 1;
        return acc;
    }, {});

    // 準備 ECharts 的數據
    const data = Object.keys(countryCount).map(naics_desc => ({
        name: naics_desc,
        value: countryCount[naics_desc]
    }));

    // 設置 ECharts 的選項
    const options = {
        title: {
            text: '美國大學分類',
            left: 'center'
        },

        tooltip: {
            trigger: 'item'
        },

        series: [
            {
                name: 'County',
                type: 'pie',
                radius: '50%',
                data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <div>
            <ReactECharts option={options} />
        </div>
    );
};

export default ResultsList;