import Button from 'react-bootstrap/Button';
function BootstrapButton({buttonText,variant="primary",onClick}){
    return (
        <div>
            <Button onClick={onClick} variant={variant}>{buttonText}</Button>
        </div>
    )
}
export default BootstrapButton;