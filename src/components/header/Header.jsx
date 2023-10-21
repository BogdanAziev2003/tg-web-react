const tg = window.Telegram.WebApp


const Header = (props) => {
    const onClose = () => {
        tg.close()
      }
    

    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={"username"}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
} 

export default Header