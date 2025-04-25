import React, { useEffect } from "react";
import { useHeader } from "@context/HeaderContext";
import { ListElement, Tabs } from ".";

function BoardListA() {
    const { setTitle } = useHeader();
    useEffect(() => {
        setTitle("국민 청원");
    }, []);
    return (
        <div className="container">
            <Tabs />
            <ListElement type={0} />
        </div>
    );
}

export default BoardListA;
