import './componentstyles.css';

export function GameWinPopup(props) {
    return (props.trigger) ? (
        <div className="gamewin-popup">
            <div className="popup-inner">
                {props.children}
            </div>
        </div>
    ): "";
}