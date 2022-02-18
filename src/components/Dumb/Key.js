const Key =({children, ...props}) => {
    
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default Key;