import React, { useEffect } from "react";
import { useHeader } from "@context/HeaderContext";
import { ListElement, Tabs } from ".";

function BoardListB() {
    const { setTitle } = useHeader();
    useEffect(() => {
        setTitle("국민 청원");
    }, []);
    return (
        <>
            <Tabs />
            <ListElement type={1} />
        </>
    );
}

export default BoardListB;
