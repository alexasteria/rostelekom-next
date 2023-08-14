import { UserData } from '@/app/components/types'

import style from './components/style.module.scss'

const getUsers: () => Promise<UserData> = async () => {
    const res = await fetch(`${process.env._API_LINK_}/users`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json() as Promise<UserData>
}

export default async function Page(): Promise<JSX.Element> {
    const usersData = await getUsers()
    return <main>
        <div className={style.userCount}>Всего пользователей - {usersData.total}</div>
        <ul>
            {
                usersData.data.map(user => {
                    return <div key={user.id} className={style.userInfoLine}>
                        {user.first_name} {user.last_name}
                        <div className={style.userEmail}>{user.email}</div>
                    </div>
                })
            }
        </ul>
    </main>
}