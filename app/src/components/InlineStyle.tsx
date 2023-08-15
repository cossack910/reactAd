export const InlineStyle: React.FC = () => {  
    //インラインCSS
const containerStyle = {
    border: "solid 2px red",
    borderRadius: "20px", //ハイフンが入る属性はキャメルケースにする
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
};
const titleStyle = {
    margin: 0,
    color: "blue",
};
const buttonStyle = {
    backgroundColor: "yellow",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
};
    return(
        <div style={containerStyle}>
            <p style={titleStyle}>インラインCSS</p>
            <button style={buttonStyle}>OK</button>
        </div>
    );
};

export default InlineStyle;