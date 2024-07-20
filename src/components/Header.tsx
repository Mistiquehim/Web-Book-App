import { useNavigate } from 'react-router-dom';

type HeaderProps = {
    closeButton: boolean;
    addButton: boolean;
    heading: string;
}

const Header = (props: HeaderProps) => {

    const { closeButton, addButton, heading } = props;

    const navigate = useNavigate();

    return (
        <div className={"header"}>
            <h1>{heading}</h1>
            {closeButton && <span className="closeBtn" onClick={() => navigate('/')}>&#10006;</span>}
            {addButton &&
                <button className="addBtn button" onClick={() => navigate('/add-book')}>Add Book</button>
            }
        </div>
    )
}

export default Header;