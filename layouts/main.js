import React from 'react'
import Head from 'next/head'
import Header from '../components/header'


export default({children}) => (
	<div>
		<Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
		<Header />
        <div id="wrapper">
            <div id="main">
                <div class="inner">
                    { children }
                </div>
            </div>
        </div>
	</div>
	)