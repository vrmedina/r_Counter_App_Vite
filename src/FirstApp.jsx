import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle } ) => {
    return (
    <>
        <h1>{ title }</h1>
        <p>{ subTitle}</p>
    </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    subTitle: 300111222,
    title: 'No me mandaste titulo'
}