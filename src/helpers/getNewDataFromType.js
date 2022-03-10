import { v4 as uuid } from 'uuid'
import getNewService from 'helpers'

export default function getNewDataFromType(type) {
    if (type === 'services') {
        return {
            id: uuid(),
            name: '',
            image: '',
            ports: [],
            volumes: [],
            links: [],
            networks: [],
        }
    } else {
        return {
            id: uuid(),
            content: '',
        }
    }
}