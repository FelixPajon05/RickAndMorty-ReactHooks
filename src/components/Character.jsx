/* eslint-disable react/prop-types */

import {
    Text,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";

function Character({ character }) {
    return (
        <Card>
            <CardHeader>
                <Text>
                    {character.name}
                </Text>
            </CardHeader>
            <CardBody>
                <img src={character.image} alt="" />
            </CardBody>
        </Card>
    );
}

export default Character;