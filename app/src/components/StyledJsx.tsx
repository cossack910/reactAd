export const StyledJsx: React.FC = () => {
    return  (
        <>
            <div className="container">
                <p className="title">スタイルJSX</p>
                <button className="button">OK</button>
            </div>
            <style jsx="true">{`
                .container {
                    border: solid 2px rgb(203, 25, 25);
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .title {
                    margin: 0;
                    color: blue;
                }
                .button {
                    background-color: yellow;
                    border: none;
                    padding: 8px;
                    border-radius: 8px;
                }
            `}</style>
        </>
    );
};

export default StyledJsx;