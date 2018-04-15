import React from "react";

import PropTypes from "prop-types";

//functional/stateless/presentational component

export default function Footer(props) {
    console.log("Footer called", props);

    //props.year = 2020;

    //deconstruct
    let {title, 
         year,
         address } = props;

    return (
        <div>
            <hr />
            <p>Copyrights, @{year}, {title}</p>
            <p> City: {address.city} </p>

            {/* child to parent communication */}
            <button onClick={() => props.changeAddress('BLR') }>
                Change City
            </button>

            {/* react keyword children */}
            {props.children}

        </div>
    )
}

// prop validation
//react keyword propTypes

Footer.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number.isRequired,
    address: PropTypes.object,
    //.isRequired mandatory
    changeAddress: PropTypes.func.isRequired
}

//keyword defaultProps

Footer.defaultProps = {
    // used when parent doesn't pass title
    title: 'React App'
}