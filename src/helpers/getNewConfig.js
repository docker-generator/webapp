import { v4 as uuid } from 'uuid'

export default function getNewConfig() {
    const randomName = Array(4).fill(null).map(() => Math.floor(Math.random() * 10)).join('')

    return {
        id: uuid(),
        title: `My config #${randomName}`,
        created_at: Date.now(),
        last_edited: Date.now(),
        services: [],
        networks: [],
    }
}