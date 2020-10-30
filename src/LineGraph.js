import numeral from 'numeral';
import React, { useEffect, useState } from 'react'
import {Line} from "react-chartjs-2";

function LineGraph({casesType="cases"}) {



    const options = {
        legend:{
            display:false,
        },

        element:{
            point:{
                radius:0,
            },
        },
        maintainAspectRatio:false,
        tooltips:{
            mode:"index",
            intersect:false,
            callbacks:{
                label:function (tooltipItem, data) {
                    return numeral(tooltipItem.value).format("+0,0")
                },
            },
        },

        scales: {
            xAxes:[{
                type:"time",
                time:{
                    format: "MM/DD/YY",
                    tooltipFormat:"ll",
                },
            },
            
        ],
        yAxes:[
            {
                gridLine:{
                    display: false,
                },
                ticks:{
                    callback: function (value, index, values){
                        return numeral(value).format("0a");
                    },
                },
            },
        ]
        }

    }



    const [data, setData] = useState()

    const buildChartData= (data, casesType='cases') =>{
        const chartData = [];
        let lastDataPoint;

        for(let date in data.cases){
            if (lastDataPoint){
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint,
                };
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        };
        return chartData;
    }


    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(response => response.json())
        .then(data =>{
            const chartData = buildChartData(data);
            setData(chartData);
        })
    }, [])



    return (
        <div className="linegraph">
            {data?.length>0 &&(
                < Line data={{
                    datasets:[
                        {data:data,
                        borderColor: "#CC1034",
                        backgroundColor:"rgba(204, 16, 52, 0.5)"
                    }
                    ]
                }}
                       options = {options} />
            )}
            
        </div>
    )
}

export default LineGraph
