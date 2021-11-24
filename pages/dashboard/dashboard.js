import Head from 'next/head';
import ReactDOM from 'react-dom';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
import CreateChart from '../../components/apexchartlayout';

import strdata from '../../public/data/str.json';
import tsaData from '../../public/data/passengerData.json';

let occData2019 = [];
let occData2020 = [];
let occData2021 = [];

let adrData2019 = [];
let adrData2020 = [];
let adrData2021 = [];
let weeks = [...Object.keys(strdata[2019])];

for (let i = 1; i <= 52; i++) {
  occData2019.push(strdata[2019][i][0]);
  occData2020.push(strdata[2020][i][0]);
  adrData2019.push(strdata[2019][i][1]);
  adrData2020.push(strdata[2020][i][1]);
}
for (let i = 1; i <= Object.keys(strdata[2021]).length; i++) {
  occData2021.push(strdata[2021][i][0]);
  adrData2021.push(strdata[2021][i][1]);
}

const occChartData = [
  {
    name: '2019',
    data: occData2019,
  },
  {
    name: '2020',
    data: occData2020,
  },
  {
    name: '2021',
    data: occData2021,
  },
];

const ADRChartData = [
  {
    name: '2019',
    data: adrData2019,
  },
  {
    name: '2020',
    data: adrData2020,
  },
  {
    name: '2021',
    data: adrData2021,
  },
];

const occChartOptions = {
  chart: {
    fontFamily: 'Roboto, Arial, sans-serif',
    height: 350,
    width: 650,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  title: {
    text: 'U.S. Hotel Occupancy (weekly)',
    align: 'center',
  },
  xaxis: {
    categories: weeks,
    labels: {
      rotate: 0,
    },
    title: {
      text: 'Updated Weekly. Source: STR, str.com',
      offsetX: 215,
      style: {
        color: '#9C9C9C',
        fontSize: '10px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
      },
    },
    tickAmount: 18,
  },
  colors: ['#2b2d42', '#8d99ae', '#d90429'],
  fill: {
    type: 'solid',
    opacity: [1, 0.5, 1],
  },
  theme: {
    mode: 'light',
    palette: 'palette6',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
};

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Hospitality Data Dashboard</title>
      </Head>
      <div id=''>
        <h3>Occupancy Data:</h3>
      </div>
      <CreateChart data={occChartData} options={occChartOptions} type={'line'} width={650} />
      <div>
        <h3>ADR Data:</h3>
      </div>
      <CreateChart data={ADRChartData} options={occChartOptions} type={'line'} width={650} />
    </Layout>
  );
}
