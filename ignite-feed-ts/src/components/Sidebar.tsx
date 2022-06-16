import { PencilSimple } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://i.pinimg.com/originals/98/32/36/983236a02e5d7e4d62d85c35445b6563.jpg"
            />
            <div className={styles.profile}>
                <Avatar src="https://cdn-icons-png.flaticon.com/512/1057/1057046.png" />
                <strong>Naell</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimple size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}