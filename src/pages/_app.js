import App from 'next/app';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const MyApp = props => {
    const { Component, pageProps } = props;
    return (
        <>
            <Head>
                <title>Nam Hai</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;