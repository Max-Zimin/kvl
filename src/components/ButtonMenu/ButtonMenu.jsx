import './ButtonMenu.css';

export default function ButtonMenu({children, isActiv, ...props}) {
    return (
        <button className={isActiv ? 'ButtonMenu ButtonMenuActiv': 'ButtonMenu'} {...props} >{children}</button>
    )
}