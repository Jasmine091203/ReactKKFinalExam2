import React from 'react';
import ReactECharts from 'echarts-for-react';

const ResultsList = ({ results }) => {

    const countryCount = results.reduce((acc, result) => {
        acc[result.naics_desc] = (acc[result.naics_desc] || 0) + 1;
        return acc;
    }, {});

    const data = Object.keys(countryCount).map(naics_desc => ({
        name: naics_desc,
        value: countryCount[naics_desc]
    }));

    const options = {
        title: {
            text: '美國大學性質分類占比',
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