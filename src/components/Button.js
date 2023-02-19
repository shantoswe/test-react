export default function Button({ text , type , variant }) {
    return(
        <button type={type} className={variant}>
            {text}
        </button>
    )
}