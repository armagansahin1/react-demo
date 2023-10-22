import Button from 'react-bootstrap/Button';
function BootstrapButton({buttonText,variant="primary"}){
    return (
        <div>
            <Button variant={variant}>{buttonText}</Button>
        </div>
    )
}
export default BootstrapButton;