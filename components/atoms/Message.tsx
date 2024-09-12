export default function Message({ messageText }) {
    return(
        
        <p style = {{
            color: "white",
            fontFamily: "sans-serif",
            gap: 2,
        }}>
            {messageText}
        </p>
    );
};