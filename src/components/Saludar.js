import {Text} from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
    // const {firstname = "Juan" , lastName="rivas"} = props;
    const {firstname, lastName} = props;

    return(
        <Text>
            Hola {firstname} {lastName}
        </Text>
    )
}

// Saludar.defaultProps = {
//     firstname: "Juan",
//     lastName: "Rivas"
// };

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}