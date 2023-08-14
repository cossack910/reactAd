import React, { memo } from "react";

interface ChildAreaProps {
    open: boolean;
    clickClose: () => void;
}

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
}

export const ChildArea: React.FC<ChildAreaProps> = memo((props) => {
    const { open, clickClose } = props;
    return(
        <>
        {
            open ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                    <button onClick={clickClose}>閉じる</button>
                </div>
            ) : null
        }
        </>
    );
});

export default ChildArea;